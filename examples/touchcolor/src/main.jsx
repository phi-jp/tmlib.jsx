import "console.jsx";
import "js/web.jsx";

import "../../../src/app/scene.jsx";

import "../../../src/display/canvasapp.jsx";
import "../../../src/display/canvaselement.jsx";
import "../../../src/display/sprite.jsx";
import "../../../src/display/label.jsx";
import "../../../src/display/shape.jsx";

/**
 * main
 */
class _Main {
    static function main(args: string[]): void {
        var canvas = dom.window.document.createElement("canvas");
        dom.window.document.body.appendChild(canvas);
        
        var app = new TouchColorApp(canvas as HTMLCanvasElement);
        app.canvas.setSize(640, 960);
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
		        piece.setPosition(x+85, y+100);
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

        this.pieceGroup.children.forEach(function(elm) {
            var canvasElement = elm as CanvasElement;
            var x = p.position.x;
            var y = p.position.y;
            var checkHorizon = (canvasElement.position.x < x && x < (canvasElement.position.x+canvasElement.width));
            var checkVertical= (canvasElement.position.y < y && y < (canvasElement.position.y+canvasElement.height));

            if (checkHorizon && checkVertical) {
                this.pieceGroup.removeChild(elm);
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
















