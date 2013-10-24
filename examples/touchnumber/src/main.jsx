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
        
        var app = new TouchNumberApp(canvas as HTMLCanvasElement);
        app.canvas.setSize(640, 960);
        app.run();
    }
}



class TouchNumberApp extends CanvasApp {
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
    function constructor() {
        super();

        for (var i=0; i<5; ++i) {
        	for (var j=0; j<5; ++j) {
        		var x = j*100;
        		var y = i*100;
		        var piece = new Piece();
		        piece.setPosition(x+85, y+100);
		        this.addChild(piece);
        	}
        }
    }
    override function update(app:variant): void {
    }
}

class Piece extends CanvasElement {
	function constructor() {
		super();
        
        var shape = new Shape(64, 64);
        shape.canvas.clear("black");
        this.addChild(shape);

        var label = new Label("TEST");
        label.fontColor = "white";
        label.setPosition(20, 35);
        this.addChild(label);
	}
}
















