/*
 * Vector2.jsx
 */


/**
 * vector class
 */
class Vector2 {
    var x:number = 0;
    var y:number = 0;
    
    /**
     * constructor
     */
    function constructor() {
        
    }
    
    /**
     * constructor
     */
    function constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }
    
    /**
     * set
     */
    function set(x:number, y:number): Vector2 {
        this.x = x;
        this.y = y;
        return this;
    }
    
    /**
     * set
     */
    function set(v: Vector2): Vector2 {
        this.x = v.x;
        this.y = v.y;
        return this;
    }
    
    /**
     * add value
     */
    function add(x:number, y:number): Vector2 {
        this.x += x;
        this.y += y;
        return this;
    }
    
    /**
     * add value by Vector2
     */
    function add(v:Vector2): Vector2 {
        return this.add(v.x, v.y);
    }
    
    /**
     * add value by Vector2
     */
    function add(lhs:Vector2, rhs:Vector2): Vector2 {
        return this.set(lhs.x+rhs.x, lhs.y+rhs.y);
    }
    
    /**
     * sub value
     */
    function sub(x:number, y:number): Vector2 {
        this.x -= x;
        this.y -= y;
        return this;
    }
    
    /**
     * sub value by Vector2
     */
    function sub(v:Vector2): Vector2 {
        return this.sub(v.x, v.y);
    }
    
    /**
     * sub value by Vector2
     */
    function sub(lhs:Vector2, rhs:Vector2): Vector2 {
        return this.set(lhs.x-rhs.x, lhs.y-rhs.y);
    }
    
    /**
     * multiplication
     */
    function mul(value:number): Vector2 {
        this.x *= value;
        this.y *= value;
        return this;
    }
    
    /**
     * division
     */
    function div(value:number): Vector2 {
        this.x /= value;
        this.y /= value;
        return this;
    }
    
    /**
     * get length
     */
    function length(): number {
        return Math.sqrt( this.lengthSquare() );
    }
    
    /**
     * get length square
     */
    function lengthSquare(): number {
        return this.x*this.x + this.y*this.y;
    }
    
    /**
     * normalize
     */
    function normalize():Vector2 {
        var len = this.length();
        this.x /= len;
        this.y /= len;
        return this;
    }
    
    function equals(x: number, y: number): boolean {
        return this.x == x && this.y == y;
    }
    
    function equals(v: Vector2): boolean {
        return this.x == v.x && this.y == v.y;
    }
    
    /**
     * to string
     */
    override function toString(): string {
        return "(" + this.x.toString() + "," + this.y.toString() + ")";
    }
    
    /**
     * output log
     */
    function log(): Vector2 {
        log this.toString();
        return this;
    }
    
    /**
     * 
     */
    static function dot(lhs:Vector2, rhs:Vector2): number {
        return lhs.x * rhs.x + lhs.y * rhs.y;
    }
    
    /**
     * 
     */
    static function cross(lhs:Vector2, rhs:Vector2): number {
        return (lhs.x*rhs.y) - (lhs.y*rhs.x);
    }
}
