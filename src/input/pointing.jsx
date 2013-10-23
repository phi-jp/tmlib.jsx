/**
 * baseinput.jsx
 */

import "js/web.jsx";

import "../geom/Vector2.jsx";



class Pointing {
	var element: HTMLElement;
	var position: Vector2;
	var _tempPosition: Vector2;

	function constructor(elm: HTMLElement) {
		this.element = elm;
		this.position = new Vector2();
		this._tempPosition = new Vector2();

		this.element.addEventListener("mousemove", (e) -> {
			var mouseEvent = e as MouseEvent;
			this._tempPosition.x = mouseEvent.x;
			this._tempPosition.y = mouseEvent.y;
		});
	}

	function update(): void {
		this.position.set(this._tempPosition);
	}
}
