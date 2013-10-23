
import "console.jsx";
import "js/web.jsx";

import "canvaselement.jsx";

/**
 * Scene class
 */
class Label extends CanvasElement {
    var text: string;

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

