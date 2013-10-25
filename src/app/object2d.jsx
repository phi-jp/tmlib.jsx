/*
 *
 */

import "../geom/vector2.jsx";

import "element.jsx";


/**
 * element class
 */
class Object2D extends Element {
    var position: Vector2 = new Vector2();
    var origin: Vector2 = new Vector2(0.5, 0.5);
    var scale: Vector2 = new Vector2(1.0, 1.0);
    var rotation = 0;
    var width  = 32;
    var height = 32;
    var radius = 32;
    
    /**
     * constructor
     */
    function constructor() {
    }

    function setPosition(x: number, y: number): Object2D {
    	this.position.set(x, y);
    	return this;
    }
    
    function isHit(p:Vector2): boolean {
        var x = p.x;
        var y = p.y;
        
        var checkHorizon = (this.getLeft() < x && x < this.getRight());
        var checkVertical= (this.getTop() < y && y < this.getBottom());
        
        return checkHorizon && checkVertical;
    }

    function isHit(object: Object2D): boolean {
        var dir = (new Vector2()).sub(this.position, object.position);
        var lenSq = dir.lengthSquare();

        return ( (lenSq) < (this.radius+object.radius)*(this.radius+object.radius) );
    }
    
    function getLeft(): number {
        return this.position.x - this.width*this.origin.x;
    }
    
    function getRight(): number {
        return this.position.x + this.width*(1-this.origin.x);
    }
    
    function getTop(): number {
        return this.position.y - this.height*this.origin.y;
    }
    
    function getBottom(): number {
        return this.position.y + this.height*(1-this.origin.y);
    }

}
