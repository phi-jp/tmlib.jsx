

class Event {
	var type: string;

	function constructor(type:string) {
		this.type = type;
	}
}

class EventDispatcher {

	var _listeners = {}: Map.< Array.<(Event) -> void> >;

	function constructor() {
	}

	function on(type:string, fn:(Event) -> void): EventDispatcher {
		if (!this._listeners[type]) {
			this._listeners[type] = [];
		}
		this._listeners[type].push(fn);
		return this;
	}

	function off(): EventDispatcher {
		// TODO: 

		return this;
	}

	function fire(e:Event): EventDispatcher {
		// var oldEventName = 'on' + e.type;
		// var temp = this as variant;
		// if (temp[oldEventName]) {
		// 	var fn = temp[oldEventName] as (Event) -> void;
		// 	fn(e);
		// }

		var listeners = this._listeners[e.type];
		if (listeners) {
			listeners.forEach((fn) -> {
				fn(e);
			});
		}

		return this;
	}

	function contains(type:string): boolean {
		// var oldEventName = 'on' + type;
		// var temp = this as variant;

		// return (temp[oldEventName] || this._listeners[type]);
		return (this._listeners[type]) ? true:false;
	}

}


















