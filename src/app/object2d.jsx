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
    var width  = 32;
    var height = 32;
    
    /**
     * constructor
     */
    function constructor() {
        this.position = new Vector2();
    }

    function setPosition(x: number, y: number): Object2D {
    	this.position.set(x, y);
    	return this;
    }

}
