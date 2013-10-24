
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
    function constructor(width: number = 32, height: number = 32) {
        super();
        
        this.canvas = new Canvas();
        this.canvas.setSize(width, height);
    }
}

