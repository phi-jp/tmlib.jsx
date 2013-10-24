/**
 * canvas.jsx
 */

import "js/web.jsx";



class Canvas {
	var element: Element;
    var canvas: HTMLCanvasElement;
    var context: CanvasRenderingContext2D;
    var width: number;
    var height: number;
    
    function constructor() {
        var elm = dom.window.document.createElement("canvas");
        this.init(elm as HTMLCanvasElement);
    }
    
    function constructor(elm: HTMLCanvasElement) {
        this.init(elm);
    }

    function init(elm: HTMLCanvasElement): Canvas {
        this.canvas = elm as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;

        this.width  = this.canvas.width;
        this.height = this.canvas.height;

        return this;
    }

    function clear(): Canvas {
    	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    	return this;
    }

    function clear(color: string): Canvas {
    	this.context.save();
    	this.context.fillStyle = color;
    	this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    	this.context.restore();
    	return this;
    }

    function fillRect(x:number, y:number, width:number, height:number): Canvas {
    	this.context.fillRect(x, y, width, height);
    	return this;
    }

    function fillText(text:string, x:number, y:number): Canvas {
    	this.context.fillText(text, x, y);
    	return this;
    }

    function drawImage(image: HTMLImageElement): Canvas {
        this.context.drawImage(image, 0, 0);
        return this;
    }

    function drawCanvas(canvas: Canvas): Canvas {
        this.context.drawImage(canvas.canvas, 0, 0);
        return this;
    }

    function setTransform(m11:number, m12:number, m21:number, m22:number, dx:number, dy:number): Canvas {
    	this.context.setTransform(m11, m12, m21, m22, dx, dy);
    	return this;
    }

    function setSize(width:number, height:number): Canvas {
        this.width  = this.canvas.width  = width;
        this.height = this.canvas.height = height;

        return this;
    }
}









