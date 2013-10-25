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
import "../../../src/display/canvasapp.jsx";
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
            "my": "http://rawgithub.com/jsx/JSX/master/web/example/shooting/img/my.png",
            "rock": "http://rawgithub.com/jsx/JSX/master/web/example/shooting/img/rock1.png",
        }, (hoge):void -> {
            var scene = new GameScene();
            this.replaceScene(scene);
        });
    }
}

class GameScene extends Scene {
    var player = new Player();
    function constructor() {
        super();

        this.player.position.set(ShootingApp.SCREEN_CENTER_X, ShootingApp.SCREEN_HEIGHT-30);
        this.addChild(this.player);

        // var label = new Label("GameScene");
        // label.setPosition(30, 30);
        // this.addChild(label);

        // var shape = new Shape();
        // shape.setPosition(30, 30);
        // shape.canvas.clear("blue");
        // this.addChild(shape);
    }
    override function update(app:variant): void {
        var baseApp = app as BaseApp;
        
        if (baseApp.frame % 30 == 0) {
            var enemy = new Enemy();
            var x = Random.randint(0, ShootingApp.SCREEN_WIDTH);
            enemy.setPosition(x, -60);
            this.addChild(enemy);
        }
    }
}

class Player extends Sprite {
    var velocity: Vector2;
    function constructor() {
        super("my");
        this.velocity = new Vector2(2, 0);
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
            this.position.add(temp.div(2));
        }
    }
}


class Enemy extends Sprite {
    var velocity = new Vector2(0, 4);
    
    function constructor() {
        super("rock");
    }
    
    override function update(app:variant): void {
        this.position.add(this.velocity);
    }
}




