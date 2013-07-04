
import "js/web.jsx";

import "canvaselement.jsx";

/**
 * Scene class
 */
class Sprite extends CanvasElement {
    
    /**
     * constructor
     */
    function constructor() {
        super();
    }
    
    override function draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillRect(this.position.x, this.position.y, 10, 10);
    }
}

