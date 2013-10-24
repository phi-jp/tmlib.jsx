
import "js/web.jsx";

import "../app/element.jsx" into tm;
import "../app/object2d.jsx";
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
            this._drawSprite(element as Sprite, canvas);
        }
        else if (element instanceof Label) {
            this._drawLabel(element as Label, canvas);
        }
        else if (element instanceof Shape) {
            this._drawShape(element as Shape, canvas);
        }
        else if (element instanceof CanvasElement) {
            var canvaselement = element as CanvasElement;
            this._transform(canvaselement, canvas);
        }

        // draw children
        if (element.children.length > 0) {
            element.children.forEach((elm) -> {
                this._render(elm, canvas);
            });
        }

        canvas.context.restore();
    }
    
    function _drawSprite(sprite:Sprite, canvas: Canvas): Renderer {
        this._transform(sprite, canvas);

        if (sprite.loaded == true) {
            // ctx.drawImage(sprite.image, sprite.position.x, sprite.position.y, sprite.width, sprite.height);
            // canvas.drawImage(sprite.image);
            canvas.drawImage(
                sprite.image,
                -sprite.width*sprite.origin.x,
                -sprite.height*sprite.origin.y,
                sprite.width,
                sprite.height);
        }
        else {
            canvas.fillRect(0, 0, sprite.width, sprite.height);
        }

        return this;
    }
    
    function _drawLabel(label:Label, canvas: Canvas): Renderer {
        this._transform(label, canvas);

        canvas.context.fillStyle = label.fontColor;
        canvas.fillText(label.text, -label.width*label.origin.x, -label.height*label.origin.y);
        return this;
    }
    
    function _drawShape(shape:Shape, canvas: Canvas): Renderer {
        this._transform(shape, canvas);
        
        canvas.drawCanvas(
            shape.canvas,
            -shape.width*shape.origin.x,
            -shape.height*shape.origin.y,
            shape.width,
            shape.height);
        
        return this;
    }
    
    function _transform(obj: Object2D, canvas: Canvas): Renderer {
        canvas.translate(obj.position.x, obj.position.y);
        canvas.rotate(obj.rotation);
        canvas.scale(obj.scale.x, obj.scale.y);
        
        return this;
    }
}

