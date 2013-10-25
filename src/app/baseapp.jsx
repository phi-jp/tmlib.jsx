/*
 * baseapp.jsx
 */

import "timer.jsx";
import "js/web.jsx";

import "console.jsx";

import "../input/pointing.jsx";
import "../input/mouse.jsx";
import "scene.jsx";


/**
 * baseapp class
 */
class BaseApp {
    var element: HTMLElement;
    var scenes: Scene[];
    var sceneIndex: int = 0;
    var frame: number = 0;
    var fps: number = 30;
    var pointing: Pointing;
    
    /**
     * constructor
     */
    function constructor(elm: HTMLElement) {
        this.element = elm;
        this.scenes = [
            new Scene()
        ]: Scene[];
        this.pointing = new Mouse(elm);
    }
    
    function run(): void {
        //var id: Nullable.<TimerHandle> = null;
        Timer.setInterval(function(): void {
            this._loop();
        }, 1000/this.fps);
    }

    function replaceScene(scene: Scene): BaseApp {
        this.scenes[this.sceneIndex] = scene;
        return this;
    }
    
    function getCurrentScene(): Scene {
        return this.scenes[this.sceneIndex];
    }
    
    function _loop(): void {
        this.pointing.update();
        
        this._update();
        this._draw();

        ++this.frame;
    }
    
    function _update(): void {
        this.getCurrentScene()._update(this);
    }
    
    function _draw(): void {
        
    }
}


