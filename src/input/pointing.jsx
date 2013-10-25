/**
 * baseinput.jsx
 */

import "js/web.jsx";

import "../geom/Vector2.jsx";



abstract class Pointing {
	var element: HTMLElement;
	var position: Vector2 = new Vector2();
	var deltaPosition: Vector2 = new Vector2();
	var prevPosition: Vector2 = new Vector2();
	var _tempPosition: Vector2 = new Vector2();

	function constructor(elm: HTMLElement) {
		this.element = elm;
	}

	abstract function update(): void;

	abstract function getPointing(): boolean;
	abstract function getPointingStart(): boolean;
	abstract function getPointingEnd(): boolean;
}
