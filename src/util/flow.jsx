
class Flow {
	var waits = 0;
	var counter = 0;
	var callback = null: (Map.<variant>) -> void;
	var args = {} : Map.<variant>;

	function constructor(waits: int, callback: (Map.<variant>) -> void) {
		this.waits = waits;
		this.callback = callback;
	}

	function pass(): void {
		++this.counter;

		this._check();
	}

	function pass(key:string, value:variant): void {
		++this.counter;

		this.args[key] = value;

		this._check();
	}

	function _check(): void {
		if (this.counter == this.waits) {
			this._dispatch();
		}
	}

	function _dispatch(): void {
		if (this.callback) {
			this.callback(this.args);
			this.callback = null;
		}
	}
}