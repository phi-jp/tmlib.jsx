import "console.jsx";
import "js/web.jsx";

import "../../../src/geom/vector2.jsx";

import "../../../src/util/util.jsx";

import "../../../src/app/object2d.jsx";
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
        app.canvas.setSize(TouchNumberApp.SCREEN_WIDTH, TouchNumberApp.SCREEN_HEIGHT);
        app.bgColor = "rgb(245, 245, 250)";
        app.canvas.fit();
        app.run();
    }
}



class TouchNumberApp extends CanvasApp {

    static const SCREEN_WIDTH   = 480;
    static const SCREEN_HEIGHT  = 640;
    static const SCREEN_CENTER_X= TouchNumberApp.SCREEN_WIDTH/2;
    static const SCREEN_CENTER_Y= TouchNumberApp.SCREEN_HEIGHT/2;
    
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
    var currentNumber = 1;
    var pieceGroup = new CanvasElement();

    function constructor() {
        super();

        this.addChild(this.pieceGroup);

        for (var i=0; i<25; ++i) {
            var piece = new Piece(i+1);
            this.pieceGroup.addChild(piece);
        }

        Util.shuffle( (this.pieceGroup.children as variant) as Array.<variant> );

        for (var i=0; i<5; ++i) {
        	for (var j=0; j<5; ++j) {
                var index = i*5+j;
        		var x = j*88;
        		var y = i*88;
		        var p = this.pieceGroup.children[index] as Object2D;
                p.setPosition(x+65, y+100);
        	}
        }
    }
    override function update(app:variant): void {
        this.checkTouch(app);
    }

    function checkTouch(app:variant): void {
        var baseApp = app as CanvasApp;
        var p = baseApp.pointing;
        if (!p.getButtonDown("left")) { return ; }
        
        var temp = new Vector2(p.position.x, p.position.y);
        
        this.pieceGroup.children.forEach(function(elm) {
            var piece = elm as Piece;
            
            if (piece.isHit(temp) && this.currentNumber == piece.number) {
                this.pieceGroup.removeChild(piece);
                ++this.currentNumber;

                if (this.currentNumber > 25) {
                    var time = baseApp.frame/baseApp.fps;
                    dom.window.alert("clear!" + (time|0) + "秒かかりました!");
                }
            }
        });
    }

}

class Piece extends CanvasElement {
    var number = 0;

	function constructor(number: number) {
		super();

        this.number = number;
        
        var shape = new Shape(64, 64);
        shape.canvas.clear("hsl(160, 70%, 60%)");
        this.addChild(shape);

        var label = new Label(number as string);
        label.fontColor = "white";
        this.addChild(label);
	}
}
















