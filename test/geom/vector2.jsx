import 'test-case.jsx';

import '../../src/geom/vector2.jsx';

class _Test extends TestCase {
    
    function test_constructor() : void {
        var v = new Vector2(3, 4);
        this.expect(v.equals(3, 4)).toBe(true);
    }
    
    function test_set() : void {
        var v = new Vector2(3, 4);
        v.set(5, 6);
        this.expect(v.equals(5, 6)).toBe(true);
    }
    
    function test_add() : void {
        var v = new Vector2(3, 4);
        v.add(7, 6);
        this.expect(v.equals(10, 10)).toBe(true);
    }
    
    function test_sub() : void {
        var v = new Vector2(3, 4);
        v.sub(3, 4);
        this.expect(v.equals(0, 0)).toBe(true);
    }
    
    function test_mul() : void {
        var v = new Vector2(3, 4);
        v.mul(10);
        this.expect(v.equals(30, 40)).toBe(true);
    }
    
    function test_div() : void {
        var v = new Vector2(3, 4);
        v.div(10);
        this.expect(v.equals(0.3, 0.4)).toBe(true);
    }
    
    function test_dot() : void {
        var a = new Vector2(1, 0);
        var b = new Vector2(0, 1);
        
        this.expect(Vector2.dot(a, b) == 0).toBe(true);
    }
    
    function test_cross() : void {
        var a = new Vector2(3, 4);
        var b = new Vector2(1, 0);
        var c = new Vector2(0, 1);
        
        this.expect(Vector2.cross(a, b) == -4).toBe(true);
        this.expect(Vector2.cross(a, c) ==  3).toBe(true);
    }
    
}



