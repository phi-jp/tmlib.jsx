import "console.jsx";
import "js/web.jsx";
import "shootingapp.jsx";

/**
 * main
 */
class _Main {
    static function main(args: string[]): void {
        var canvas = dom.window.document.createElement("canvas");
        dom.window.document.body.appendChild(canvas);
        
        var app = new ShootingApp(canvas as HTMLCanvasElement);
        app.canvas.setSize(640, 960);
        app.bgColor = "rgb(245, 245, 250)";
        app.canvas.fit();
        app.run();
    }
}
