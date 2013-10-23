
import "js/web.jsx";

import "../app/element.jsx" into tm;
import "canvaselement.jsx";
import "sprite.jsx";

/**
 * group class
 */
class Renderer {
    /**
     * constructor
     */
    function constructor() {
        super();
    }

    function render(root: tm.Element, ctx: CanvasRenderingContext2D): void {
        this._render(root, ctx);
    }

    function _render(element: tm.Element, ctx: CanvasRenderingContext2D): void {
        if (element instanceof Sprite) {
            var sprite = element as Sprite;
            if (sprite.loaded == true) {
                ctx.drawImage(sprite.image, sprite.position.x, sprite.position.y, sprite.width, sprite.height);
            }
            else {
                ctx.fillRect(sprite.position.x, sprite.position.y, sprite.width, sprite.height);
            }
        }
        else {

        }

        // draw children
        if (element.children.length > 0) {
            element.children.forEach((elm) -> {
                this._render(elm, ctx);
            });
        }
    }
}

