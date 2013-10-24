
import "js/web.jsx";

import "../app/element.jsx" into tm;
import "../graphics/canvas.jsx";

import "canvaselement.jsx";
import "sprite.jsx";
import "label.jsx";
import "shape.jsx";

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

    function render(root: tm.Element, canvas: Canvas): void {
        canvas.context.save();
        this._render(root, canvas);
        canvas.context.restore();
    }

    function _render(element: tm.Element, canvas: Canvas): void {
        canvas.context.save();

        if (element instanceof Sprite) {
            var sprite = element as Sprite;
            canvas.translate(sprite.position.x, sprite.position.y);

            if (sprite.loaded == true) {
                // ctx.drawImage(sprite.image, sprite.position.x, sprite.position.y, sprite.width, sprite.height);
                canvas.drawImage(sprite.image);
            }
            else {
                canvas.fillRect(0, 0, sprite.width, sprite.height);
            }
        }
        else if (element instanceof Label) {
            var label = element as Label;
            canvas.translate(label.position.x, label.position.y);

            canvas.context.fillStyle = label.fontColor;
            canvas.fillText(label.text, 0, 0);
        }
        else if (element instanceof Shape) {
            var shape = element as Shape;
            canvas.translate(shape.position.x, shape.position.y);

            canvas.drawCanvas(shape.canvas);
        }
        else if (element instanceof CanvasElement) {
            var canvaselement = element as CanvasElement;
            canvas.translate(canvaselement.position.x, canvaselement.position.y);
        }

        // draw children
        if (element.children.length > 0) {
            element.children.forEach((elm) -> {
                this._render(elm, canvas);
            });
        }

        canvas.context.restore();
    }
}

