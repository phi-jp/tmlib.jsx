import "console.jsx";
import "js/web.jsx";

import "../../../src/app/scene.jsx";

import "../../../src/geom/vector2.jsx";

import "../../../src/display/canvasapp.jsx";
import "../../../src/display/canvaselement.jsx";
import "../../../src/display/sprite.jsx";
import "../../../src/display/label.jsx";
import "../../../src/display/shape.jsx";

import "../../../src/input/pointing.jsx";

/**
 * main
 */
class _Main {
    static function main(args: string[]): void {
        var canvas = dom.window.document.createElement("canvas");
        dom.window.document.body.appendChild(canvas);
        
        var app = new TouchColorApp(canvas as HTMLCanvasElement);
        app.canvas.setSize(640, 960);
        app.bgColor = "rgb(245, 245, 250)";
        app.canvas.fit();
        app.run();
    }
}

class TouchColorApp extends CanvasApp {
    /**
     * constructor
     */
    function constructor(elm: HTMLCanvasElement) {
        super(elm);

        var scene = new GameScene();

        this.replaceScene(scene);
    }
}

class GameScene extends Scene {
    var pieceGroup: CanvasElement = new CanvasElement();

    function constructor() {
        super();

        this.addChild(this.pieceGroup);

        for (var i=0; i<5; ++i) {
        	for (var j=0; j<5; ++j) {
                var index = i*5+j;
        		var x = j*100;
        		var y = i*100;
                var angle = (360/25)*index;
		        var piece = new Piece(angle);
		        piece.setPosition(x+115, y+100);
		        this.pieceGroup.addChild(piece);
        	}
        }
    }
    override function update(app:variant): void {
        this.checkCollision(app);
    }

    function checkCollision(app:variant): void {
        var baseApp = app as CanvasApp;
        var p = baseApp.pointing;
        if (!p.getButtonDown("left")) { return ; }
        
        var temp = new Vector2(p.position.x, p.position.y);
        
        this.pieceGroup.children.forEach(function(elm) {
            var canvasElement = elm as CanvasElement;
            
            if (canvasElement.isHit(temp)) {
                this.pieceGroup.removeChild(elm);
                canvasElement.scale.x *= 1.1;
                canvasElement.scale.y *= 1.1;
            }
        });
    }
}

class Piece extends CanvasElement {
	function constructor(angle:number) {
		super();

        this.width  = 64;
        this.height = 64;

        var color = "hsl(" + angle + ",75%, 55%)";
        var shape = new Shape(64, 64);
        shape.canvas.clear(color);
        this.addChild(shape);
	}
}
















