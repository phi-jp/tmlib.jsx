

import "js/web.jsx";
import "pointing.jsx";


class Mouse extends Pointing {
	var button: int;
	var last: int;
	var press: int;
	var up: int;
	var down: int;

	static const BUTTON_LEFT   = 0x1;
	static const BUTTON_MIDDLE = 0x2;
	static const BUTTON_RIGHT  = 0x4;
	static const BUTTON_MAP = {
        "left"  : Mouse.BUTTON_LEFT,
        "middle": Mouse.BUTTON_MIDDLE,
        "right" : Mouse.BUTTON_RIGHT
	};

	function constructor(elm: HTMLElement) {
		super(elm);

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
    
	override function update(): void {
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

    override function getPointing(): boolean {
    	return this.getButton("left");
    }

    override function getPointingStart(): boolean {
    	return this.getButtonDown("left");
    }

    override function getPointingEnd(): boolean {
    	return this.getButtonUp("left");
    }

	function getButton(button: string): boolean {
        return (this.press & Mouse.BUTTON_MAP[button]) != 0;
	}

	function getButtonDown(button: string): boolean {
		return (this.down & Mouse.BUTTON_MAP[button]) != 0;
	}

	function getButtonUp(button: string): boolean {
		return (this.up & Mouse.BUTTON_MAP[button]) != 0;
	}

}



