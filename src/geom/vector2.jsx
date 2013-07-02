/*
 * Vector2.jsx
 */


/**
 * 
 */
class Vector2 {
    var x:number = 0;
    var y:number = 0;
    
    /**
     * 
     */
    function constructor() {
        
    }
    
    /**
     * 
     */
    function constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }
    
    /**
     * 
     */
    function set(x:number, y:number): Vector2 {
        this.x = x;
        this.y = y;
        return this;
    }
    
    /**
     * 
     */
    function length(): number {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
    
    /**
     * 
     */
    function add(x:number, y:number): Vector2 {
        this.x += x;
        this.y += y;
        return this;
    }
    
    /**
     * 
     */
    function add(v:Vector2): Vector2 {
        this.x += v.x;
        this.y += v.y;
        return this;
    }
    
    /**
     * 
     */
    function sub(x:number, y:number): Vector2 {
        this.x -= x;
        this.y -= y;
        return this;
    }
    
    /**
     * 
     */
    function sub(v:Vector2): Vector2 {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }
    
    /**
     * 
     */
    function mul(value:number): Vector2 {
        this.x *= value;
        this.y *= value;
        return this;
    }
    
    /**
     * 
     */
    function div(value:number): Vector2 {
        this.x /= value;
        this.y /= value;
        return this;
    }
    
    /**
     * 
     */
    function normalize():Vector2 {
        var len = this.length();
        this.x /= len;
        this.y /= len;
        return this;
    }
    
    /**
     *
     */
    override function toString(): string {
        return "(" + this.x.toString() + "," + this.y.toString() + ")";
    }
    
    /**
     * 
     */
    function log(): Vector2 {
        log this.toString();
        return this;
    }
}