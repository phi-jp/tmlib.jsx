
import "../app/object2d.jsx";
import "js/web.jsx";

/**
 * group class
 */
class CanvasElement extends Object2D {
    /**
     * constructor
     */
    function constructor() {
        super();
    }
    
    function _draw(ctx: CanvasRenderingContext2D): void {
        if (this.draw) {
            this.draw(ctx);
        }
        if (this.children.length > 0) {
            this.children.forEach((elm) -> {
                (elm as CanvasElement)._draw(ctx);
            });
        }
    }
    
    function draw(ctx: CanvasRenderingContext2D): void {
        
    }
}

