/*
 *
 */

import "../geom/vector2.jsx";

import "element.jsx";


/**
 * element class
 */
class Object2D extends Element {
    var position: Vector2;
    
    /**
     * constructor
     */
    function constructor() {
        this.position = new Vector2();
    }

}
