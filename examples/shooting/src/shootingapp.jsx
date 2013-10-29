/*
 *
 */

import "js/web.jsx";

import "../../../src/util/random.jsx";
import "../../../src/util/flow.jsx";

import "../../../src/geom/vector2.jsx";

import "../../../src/asset/assetmanager.jsx";

import "../../../src/app/baseapp.jsx";
import "../../../src/app/scene.jsx";
import "../../../src/app/object2d.jsx";

import "../../../src/display/canvasapp.jsx";
import "../../../src/display/canvaselement.jsx";
import "../../../src/display/sprite.jsx";
import "../../../src/display/label.jsx";
import "../../../src/display/shape.jsx";


class ShootingApp extends CanvasApp {

    static const SCREEN_WIDTH   = 240;
    static const SCREEN_HEIGHT  = 320;
    static const SCREEN_CENTER_X= ShootingApp.SCREEN_WIDTH/2;
    static const SCREEN_CENTER_Y= ShootingApp.SCREEN_HEIGHT/2;

    /**
     * constructor
     */
    function constructor(elm: HTMLCanvasElement) {
        super(elm);

        AssetManager.load({
            "my": "http://rawgithub.com/phi-jp/tmlib.js/0.1.8/resource/img/shooting/player00.png",
            "rock": "http://rawgithub.com/phi-jp/tmlib.js/0.1.8/resource/img/shooting/enemy.png",
            "bullet": "http://rawgithub.com/jsx/JSX/master/web/example/shooting/img/bullet.png",
        }, (hoge):void -> {
            var scene = new GameScene();
            this.replaceScene(scene);
        });
    }
}

class GameScene extends Scene {
    var player = new Player();
    var bulletGroup = new CanvasElement();
    var enemyGroup = new CanvasElement();
    var scoreLabel = new Label("SCORE: 000");
    var score = 0;

    function constructor() {
        super();

        this.player.position.set(ShootingApp.SCREEN_CENTER_X, ShootingApp.SCREEN_HEIGHT-30);
        this.addChild(this.player);

        this.addChild(this.enemyGroup);
        this.addChild(this.bulletGroup);

        this.scoreLabel.setPosition(230, 20);
        this.scoreLabel.align = "right";
        this.addChild(this.scoreLabel);
    }
    override function update(app:variant): void {
        var baseApp = app as BaseApp;
        
        if (baseApp.frame % 16 == 0) {
            var enemy = new Enemy();
            var x = Random.randint(0, ShootingApp.SCREEN_WIDTH);
            enemy.setPosition(x, -60);
            this.enemyGroup.addChild(enemy);
        }
        
        if (baseApp.frame % 4 == 0) {
            var bullet = new Bullet();
            bullet.setPosition(this.player.position.x, this.player.position.y-10);
            this.bulletGroup.addChild(bullet);
        }

        // check collision(player vs enemy)
        this.enemyGroup.children.some((enemy) -> {
            if (this.player.isHit(enemy as Object2D)) {
                enemy.remove();
                return true;
            }
            return false;
        });

        // check collision(bullet vs enemy)
        this.bulletGroup.children.forEach((bullet) -> {
            this.enemyGroup.children.some((enemyElement) -> {
                var enemy = enemyElement as Enemy;
                if ( (bullet as Object2D).isHit( enemy as Object2D )) {
                    bullet.remove();

                    enemy.damage();
                    if (enemy.isDead()) {
                        enemy.remove();

                        this.score += 100;
                        this.scoreLabel.text = "SCORE: " + (this.score as string);
                    }

                    return true;
                }

                return false;
            });
        });
    }
}

class Player extends Sprite {
    var velocity: Vector2;
    function constructor() {
        super("my");

        this.radius = 16;
        this.velocity = new Vector2(2, 0);

        // this.on('enterframe', (e)-> {
        //     log("hoge");
        // });
    }
    
    override function update(app:variant): void {
        var canvasapp = app as CanvasApp;
//        this.position.add(this.velocity);

        var left  = 0;
        var right = canvasapp.canvas.width;

        if (this.position.x > right) {
            this.position.x = right;
            this.velocity.x *= -1;
        }
        else if (this.position.x < left) {
            this.position.x = left;
            this.velocity.x *= -1;
        }

        var baseApp = app as BaseApp;
        var p = baseApp.pointing;
        if (p.getPointing()) {
            var temp = new Vector2(p.deltaPosition.x, p.deltaPosition.y);
            // log(temp.y);
            this.position.add(temp.div(2));
        }
    }

}


class Enemy extends Sprite {
    var velocity = new Vector2(0, 4);
    var life = 4;
    
    function constructor() {
        super("rock");

        this.radius = 16;
    }
    
    override function update(app:variant): void {
        this.position.add(this.velocity);

        if (this.position.y > ShootingApp.SCREEN_HEIGHT+50) this.remove();
    }

    function damage(): void {
        this.life -= 1;
    }

    function isDead(): boolean {
        return this.life <= 0;
    }
}


class Bullet extends Sprite {
    var velocity = new Vector2(0, -8);
    
    function constructor() {
        super("bullet");
        this.radius = 4;
    }
    
    override function update(app:variant): void {
        this.position.add(this.velocity);

        if (this.position.y < -50) this.remove();
    }
}




