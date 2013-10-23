/*
 *
 */

import "js/web.jsx";

import "../../../src/geom/vector2.jsx";

import "../../../src/display/canvasapp.jsx";
import "../../../src/display/sprite.jsx";


class ShootingApp extends CanvasApp {
    
    /**
     * constructor
     */
    function constructor(elm: HTMLCanvasElement) {
        super(elm);
        var scene = this.getCurrentScene();
        var player = new Player();

        player.position.set(0, 50);
        
        scene.addChild(player);
    }
}

class Player extends Sprite {
    var velocity: Vector2;
    function constructor() {
        super("http://rawgithub.com/jsx/JSX/master/web/example/shooting/img/my.png");
        this.velocity = new Vector2(2, 0);
        log(this.velocity);
    }
    
    override function update(app:variant): void {
        var canvasapp = app as CanvasApp;
        this.position.add(this.velocity);

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
    }
}