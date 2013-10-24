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
    var origin: Vector2;
    var width  = 32;
    var height = 32;
    
    /**
     * constructor
     */
    function constructor() {
        this.position = new Vector2();
        this.origin   = new Vector2();
    }

    function setPosition(x: number, y: number): Object2D {
    	this.position.set(x, y);
    	return this;
    }
    
    function isHit(p:Vector2): boolean {
        var x = p.x;
        var y = p.y;
        var checkHorizon = (this.position.x < x && x < (this.position.x+this.width));
        var checkVertical= (this.position.y < y && y < (this.position.y+this.height));
        
        return checkHorizon && checkVertical;
    }

}
