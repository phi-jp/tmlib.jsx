/*
 * canvasapp.jsx
 */

import "js/web.jsx";

import "../app/baseapp.jsx";
import "../graphics/canvas.jsx";

import "renderer.jsx";

/**
 * canvasapp class
 */
class CanvasApp extends BaseApp {
    var canvas: Canvas;
    var renderer: Renderer;
    var bgColor: string;
    
    /**
     * constructor
     */
    function constructor(elm: HTMLCanvasElement) {
        super(elm);
        this.canvas = new Canvas(elm as HTMLCanvasElement);

        this.renderer = new Renderer();
        this.bgColor = "#eee";
    }
    
    function setSize(width:number, height:number): CanvasApp {
        this.canvas.width  = width;
        this.canvas.height = height;
        
        return this;
    }
    
    override function _update(): void {
        var scene = this.getCurrentScene();
        scene._update(this);
        
        this.canvas.clear(this.bgColor);
        this.renderer.render(scene, this.canvas);
        // this.renderer.render(5, this.context);
    }
}
