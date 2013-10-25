

import "js/web.jsx";
import "pointing.jsx";


class Touch extends Pointing {
	var touch: boolean = false;
	var last: int;
	var now: int;
	var start: int;
	var end: int;

	function constructor(elm: HTMLElement) {
		super(elm);

		this.element.addEventListener("touchstart", (e) -> {
			var touchEvent = e as TouchEvent;
			var element = e.target as HTMLElement;
            var t = touchEvent.touches[0];
            var r = element.getBoundingClientRect();

			this._tempPosition.set(t.clientX - r.left, t.clientY - r.top);
			this._tempPosition.x *= ((element as variant)['width']  as number) / (element.style.width.replace('px', '')  as number);
			this._tempPosition.y *= ((element as variant)['height'] as number) / (element.style.height.replace('px', '') as number);

			this.position.set(this._tempPosition);
			this.prevPosition.set(this._tempPosition);

			this.touch = true;
		});
		this.element.addEventListener("touchend", (e) -> {
			this.touch = false;
		});
		this.element.addEventListener("touchmove", (e) -> {
			var touchEvent = e as TouchEvent;
			var element = e.target as HTMLElement;
            var t = touchEvent.touches[0];
            var r = element.getBoundingClientRect();

			this._tempPosition.set(t.clientX - r.left, t.clientY - r.top);

			this._tempPosition.x *= ((element as variant)['width']  as number) / (element.style.width.replace('px', '')  as number);
			this._tempPosition.y *= ((element as variant)['height'] as number) / (element.style.height.replace('px', '') as number);
		});
	}
    
	override function update(): void {
        this.last   = this.now;
        this.now    = (this.touch) ? 1 : 0;
        this.start  = (this.now ^ this.last) & this.now;
        this.end    = (this.now ^ this.last) & this.last;
        
        // update delta position
        this.deltaPosition.sub(this._tempPosition, this.prevPosition);

        // save prev position
        this.prevPosition.set(this.position);
        
        // update now position
		this.position.set(this._tempPosition);
	}

    override function getPointing(): boolean {
    	return this.getTouch();
    }

    override function getPointingStart(): boolean {
    	return this.getTouchStart();
    }

    override function getPointingEnd(): boolean {
    	return this.getTouchEnd();
    }

	function getTouch(): boolean {
        return (this.now) != 0;
	}

	function getTouchStart(): boolean {
		return (this.start) != 0;
	}

	function getTouchEnd(): boolean {
		return (this.end) != 0;
	}

}



