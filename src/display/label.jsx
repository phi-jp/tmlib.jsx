
import "console.jsx";
import "js/web.jsx";

import "canvaselement.jsx";

/**
 * Scene class
 */
class Label extends CanvasElement {
    var text = "";
    var align = "center";
    var baseline = "middle";
    var fontColor = "black";

    /**
     * constructor
     */
    function constructor() {
        super();
    }
    
    /**
     * constructor
     */
    function constructor(text: string) {
        super();

        this.text = text;
    }
}

