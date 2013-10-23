
import "console.jsx";
import "js/web.jsx";

import "canvaselement.jsx";

/**
 * Scene class
 */
class Sprite extends CanvasElement {
    var image: HTMLImageElement;
    var width  = 32;
    var height = 32;
    var loaded = false;

    /**
     * constructor
     */
    function constructor() {
        super();
    }
    
    /**
     * constructor
     */
    function constructor(src: string) {
        super();

        this.image = dom.document.createElement("img") as HTMLImageElement;
        this.image.src = src;
        var self = this;
        this.image.addEventListener("load", function(e:Event): void {
            self.loaded = true;
            self.width = self.image.width;
            self.height= self.image.height;
        });
    }
    
    override function draw(ctx: CanvasRenderingContext2D): void {
        if (this.loaded == true) {
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
        else {
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
    }
}

