/**
 * baseinput.jsx
 */

import "js/web.jsx";

import "../geom/Vector2.jsx";



class Pointing {
	var element: HTMLElement;
	var position: Vector2 = new Vector2();
	var deltaPosition: Vector2 = new Vector2();
	var prevPosition: Vector2 = new Vector2();
	var _tempPosition: Vector2 = new Vector2();

	var button: int;
	var last: int;
	var press: int;
	var up: int;
	var down: int;

	static const BUTTON_LEFT   = 0x1;
	static const BUTTON_MIDDLE = 0x2;
	static const BUTTON_RIGHT  = 0x4;
	static const BUTTON_MAP = {
        "left"  : Pointing.BUTTON_LEFT,
        "middle": Pointing.BUTTON_MIDDLE,
        "right" : Pointing.BUTTON_RIGHT
	};

	function constructor(elm: HTMLElement) {
		this.element = elm;

		this.element.addEventListener("mousedown", (e) -> {
			var mouseEvent = e as MouseEvent;
			this.button |= 1<<mouseEvent.button;
		});
		this.element.addEventListener("mouseup", (e) -> {
			var mouseEvent = e as MouseEvent;
			this.button &= ~(1<<mouseEvent.button);
		});
		this.element.addEventListener("mousemove", (e) -> {
			var mouseEvent = e as MouseEvent;
			var element = e.target as HTMLElement;
            var rect = element.getBoundingClientRect();

			this._tempPosition.x = mouseEvent.x - rect.left;
			this._tempPosition.y = mouseEvent.y - rect.top;
			
			this._tempPosition.x *= ((element as variant)['width']  as number) / (element.style.width.replace('px', '')  as number);
			this._tempPosition.y *= ((element as variant)['height'] as number) / (element.style.height.replace('px', '') as number);
		});
	}

	function update(): void {
        this.last = this.press;
        this.press = this.button;
        this.down = (this.press ^ this.last) & this.press;
        this.up   = (this.press ^ this.last) & this.last;
        
        // update delta position
        this.deltaPosition.sub(this._tempPosition, this.prevPosition);
        
        // save prev position
        this.prevPosition.set(this.position);
        
        // update now position
		this.position.set(this._tempPosition);
	}
    
    function getPointingStart(): boolean {
        return (this.down & Pointing.BUTTON_MAP["left"]) != 0;
    }
    
    function getPointing(): boolean {
        return (this.press & Pointing.BUTTON_MAP["left"]) != 0;
    }

	function getButtonDown(button: string):boolean {
		return (this.down & Pointing.BUTTON_MAP[button]) != 0;
	}

}
