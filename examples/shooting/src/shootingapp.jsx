/*
 *
 */

import "js/web.jsx";

import "../../../src/geom/vector2.jsx";

import "../../../src/app/baseapp.jsx";
import "../../../src/app/scene.jsx";
import "../../../src/display/canvasapp.jsx";
import "../../../src/display/sprite.jsx";
import "../../../src/display/label.jsx";
import "../../../src/display/shape.jsx";


class ShootingApp extends CanvasApp {
    /**
     * constructor
     */
    function constructor(elm: HTMLCanvasElement) {
        super(elm);

        var scene = new GameScene();

        this.replaceScene(scene);
    }
}

class GameScene extends Scene {
    var player = new Player();
    function constructor() {
        super();

        this.player.position.set(0, 50);
        this.addChild(this.player);

        var label = new Label("GameScene");
        label.setPosition(30, 30);
        this.addChild(label);

        var shape = new Shape();
        shape.setPosition(30, 30);
        shape.canvas.clear("blue");
        this.addChild(shape);
    }
    override function update(app:variant): void {
    }
}

class Player extends Sprite {
    var velocity: Vector2;
    function constructor() {
        super("http://rawgithub.com/jsx/JSX/master/web/example/shooting/img/my.png");
        this.scale.x = 4;
        this.scale.y = 4;
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


