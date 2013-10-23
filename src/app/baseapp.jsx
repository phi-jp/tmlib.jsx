/*
 * baseapp.jsx
 */

import "timer.jsx";
import "js/web.jsx";

import "console.jsx";

import "scene.jsx";

/**
 * baseapp class
 */
class BaseApp {
    var element: HTMLElement;
    var scenes: Scene[];
    var sceneIndex: int;
    
    /**
     * constructor
     */
    function constructor(elm: HTMLElement) {
        this.element = elm;
        this.scenes = [
            new Scene()
        ]: Scene[];
        this.sceneIndex = 0;
    }
    
    function run(): void {
        var self = this;
        //var id: Nullable.<TimerHandle> = null;
        Timer.setInterval(function(): void {
            self._loop();
        }, 1000/30);
    }
    
    function getCurrentScene(): Scene {
        return this.scenes[this.sceneIndex];
    }
    
    function _loop(): void {
        this._update();
        this._draw();
    }
    
    function _update(): void {
        this.getCurrentScene()._update(this);
    }
    
    function _draw(): void {
        
    }
}


