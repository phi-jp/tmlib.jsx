/*
 *
 */

import "js/web.jsx";

import "../../../src/app/canvasapp.jsx";
import "../../../src/app/sprite.jsx";


class ShootingApp extends CanvasApp {
    
    /**
     * constructor
     */
    function constructor(elm: HTMLCanvasElement) {
        super(elm);
        var scene = this.getCurrentScene();
        var player = new Player();
        
        scene.addChild(player);
    }
}

class Player extends Sprite {
    function constructor() {
        
    }
    
    override function update(app:variant): void {
        this.position.add(1, 1);
    }
}