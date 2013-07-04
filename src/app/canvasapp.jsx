/*
 * canvasapp.jsx
 */

import "js/web.jsx";

import "baseapp.jsx";


/**
 * canvasapp class
 */
class CanvasApp extends BaseApp {
    var canvas: HTMLCanvasElement;
    var context: CanvasRenderingContext2D;
    
    /**
     * constructor
     */
    function constructor(elm: HTMLCanvasElement) {
        super(elm);
        this.canvas = elm as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    }
    
    function setSize(width:number, height:number): CanvasApp {
        this.canvas.width  = width;
        this.canvas.height = height;
        
        return this;
    }
    
    override function _update(): void {
        var scene = this.getCurrentScene();
        scene._update(this);
        
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        scene._draw(this.context);
    }
}
