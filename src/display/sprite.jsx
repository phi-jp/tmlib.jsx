
import "console.jsx";
import "js/web.jsx";

import "../asset/assetmanager.jsx";

import "canvaselement.jsx";

/**
 * Scene class
 */
class Sprite extends CanvasElement {
    var image: HTMLImageElement;

    /**
     * constructor
     */
    function constructor() {
        super();
    }
    
    /**
     * constructor
     */
    function constructor(key: string) {
        super();

        this.image = AssetManager.getImage(key);

        this.width = this.image.width;
        this.height= this.image.height;
    }
}

