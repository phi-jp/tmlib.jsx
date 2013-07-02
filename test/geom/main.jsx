import 'console.jsx';
import 'geom/vector2.jsx';


class _Main {
  static function main(args: string[]): void {
    // 
    var v = new Vector2();
    log v.toString();
    // 
    var v = new Vector2(3, 4);
    log v.toString();
    // 
    log v.length();
    // 
    v.add(5, 10);
    log v.toString();
    v.add(new Vector2(10, 5));
    log v.toString();
    // 
    v.normalize();
    log v.toString();
  }
}

