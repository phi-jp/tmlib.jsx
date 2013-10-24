
import "console.jsx";
import "js/web.jsx";

import "../graphics/canvas.jsx";
import "canvaselement.jsx";

/**
 * Shape class
 */
class Shape extends CanvasElement {
    var canvas: Canvas;
    var loaded = false;
    
    /**
     * constructor
     */
    function constructor(width: number = 64, height: number = 64) {
        super();
        
        this.width  = width;
        this.height = height;
        
        this.canvas = new Canvas();
        this.canvas.setSize(width, height);
    }
}

