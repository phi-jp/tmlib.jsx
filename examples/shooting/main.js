// generatedy by JSX compiler 0.9.67 (2013-10-23 12:05:19 +0900; e553dcac2c3666c454a7247e62e0c94d2385ce95)
var JSX = {};
(function (JSX) {
/**
 * extends the class
 */
function $__jsx_extend(derivations, base) {
	var ctor = function () {};
	ctor.prototype = base.prototype;
	var proto = new ctor();
	for (var i in derivations) {
		derivations[i].prototype = proto;
	}
}

/**
 * copies the implementations from source interface to target
 */
function $__jsx_merge_interface(target, source) {
	for (var k in source.prototype)
		if (source.prototype.hasOwnProperty(k))
			target.prototype[k] = source.prototype[k];
}

/**
 * defers the initialization of the property
 */
function $__jsx_lazy_init(obj, prop, func) {
	function reset(obj, prop, value) {
		delete obj[prop];
		obj[prop] = value;
		return value;
	}

	Object.defineProperty(obj, prop, {
		get: function () {
			return reset(obj, prop, func());
		},
		set: function (v) {
			reset(obj, prop, v);
		},
		enumerable: true,
		configurable: true
	});
}

/**
 * sideeffect().a /= b
 */
function $__jsx_div_assign(obj, prop, divisor) {
	return obj[prop] = (obj[prop] / divisor) | 0;
}

/*
 * global functions, renamed to avoid conflict with local variable names
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
function $__jsx_isNaN(n) { return n !== n; }
var $__jsx_isFinite = isFinite;

var $__jsx_encodeURIComponent = encodeURIComponent;
var $__jsx_decodeURIComponent = decodeURIComponent;
var $__jsx_encodeURI = encodeURI;
var $__jsx_decodeURI = decodeURI;

var $__jsx_ObjectToString = Object.prototype.toString;
var $__jsx_ObjectHasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * profiler object, initialized afterwards
 */
function $__jsx_profiler() {
}

/*
 * public interface to JSX code
 */
JSX.require = function (path) {
	var m = $__jsx_classMap[path];
	return m !== undefined ? m : null;
};

JSX.profilerIsRunning = function () {
	return $__jsx_profiler.getResults != null;
};

JSX.getProfileResults = function () {
	return ($__jsx_profiler.getResults || function () { return {}; })();
};

JSX.postProfileResults = function (url, cb) {
	if ($__jsx_profiler.postResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.postResults(url, cb);
};

JSX.resetProfileResults = function () {
	if ($__jsx_profiler.resetResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.resetResults();
};
JSX.DEBUG = true;
function StopIteration() {
	Error.call(this);
	this.name = "StopIteration";
	if (Error.captureStackTrace) Error.captureStackTrace(this, StopIteration);
};

$__jsx_extend([StopIteration], Error);
function _Main() {
};

$__jsx_extend([_Main], Object);
function _Main$main$AS(args) {
	var canvas;
	var app;
	canvas = dom.window.document.createElement("canvas");
	dom.window.document.body.appendChild(canvas);
	app = new ShootingApp((function ($v) {
		if (! ($v == null || $v instanceof HTMLCanvasElement)) {
			debugger;
			throw new Error("[examples/shooting/src/main.jsx:13:41] detected invalid cast, value is not an instance of the designated type or null\n        var app = new ShootingApp(canvas as HTMLCanvasElement);\n                                         ^^\n");
		}
		return $v;
	}(canvas)));
	app.run$();
	console.dir(canvas);
};

_Main.main = _Main$main$AS;
_Main.main$AS = _Main$main$AS;

function dom() {}
$__jsx_extend([dom], Object);
function dom$id$S(id) {
	return (function ($v) {
		if (! ($v == null || $v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/uematsu.yuki/Dropbox/git/tmlib.jsx/node_modules/grunt-jsx/node_modules/jsx/lib/js/js/web.jsx:29:47] detected invalid cast, value is not an instance of the designated type or null\n        return dom.document.getElementById(id) as HTMLElement;\n                                               ^^\n");
		}
		return $v;
	}(dom.document.getElementById(id)));
};

dom.id$S = dom$id$S;

function dom$getElementById$S(id) {
	return (function ($v) {
		if (! ($v == null || $v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/uematsu.yuki/Dropbox/git/tmlib.jsx/node_modules/grunt-jsx/node_modules/jsx/lib/js/js/web.jsx:37:47] detected invalid cast, value is not an instance of the designated type or null\n        return dom.document.getElementById(id) as HTMLElement;\n                                               ^^\n");
		}
		return $v;
	}(dom.document.getElementById(id)));
};

dom.getElementById$S = dom$getElementById$S;

function dom$createElement$S(tag) {
	return (function ($v) {
		if (! ($v == null || $v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/uematsu.yuki/Dropbox/git/tmlib.jsx/node_modules/grunt-jsx/node_modules/jsx/lib/js/js/web.jsx:45:47] detected invalid cast, value is not an instance of the designated type or null\n        return dom.document.createElement(tag) as __noconvert__ HTMLElement;\n                                               ^^\n");
		}
		return $v;
	}(dom.document.createElement(tag)));
};

dom.createElement$S = dom$createElement$S;

function EventInit() {
	this.bubbles = false;
	this.cancelable = false;
};

$__jsx_extend([EventInit], Object);
function CustomEventInit() {
	EventInit.call(this);
	this.detail = null;
};

$__jsx_extend([CustomEventInit], EventInit);
function MutationObserverInit() {
	this.childList = false;
	this.attributes = false;
	this.characterData = false;
	this.subtree = false;
	this.attributeOldValue = false;
	this.characterDataOldValue = false;
	this.attributeFilter = null;
};

$__jsx_extend([MutationObserverInit], Object);
function UIEventInit() {
	EventInit.call(this);
	this.view = null;
	this.detail = 0;
};

$__jsx_extend([UIEventInit], EventInit);
function FocusEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.relatedTarget = null;
};

$__jsx_extend([FocusEventInit], Object);
function MouseEventInit() {
	UIEventInit.call(this);
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.region = null;
};

$__jsx_extend([MouseEventInit], UIEventInit);
function WheelEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.deltaX = 0;
	this.deltaY = 0;
	this.deltaZ = 0;
	this.deltaMode = 0;
};

$__jsx_extend([WheelEventInit], Object);
function KeyboardEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.char = "";
	this.key = "";
	this.location = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.repeat = false;
	this.locale = "";
	this.charCode = 0;
	this.keyCode = 0;
	this.which = 0;
};

$__jsx_extend([KeyboardEventInit], Object);
function CompositionEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.data = null;
	this.locale = "";
};

$__jsx_extend([CompositionEventInit], Object);
function ProgressEventInit() {
	EventInit.call(this);
	this.lengthComputable = false;
	this.loaded = 0;
	this.total = 0;
};

$__jsx_extend([ProgressEventInit], EventInit);
function XMLHttpRequestOptions() {
	this.anon = false;
};

$__jsx_extend([XMLHttpRequestOptions], Object);
function ScrollOptions() {
	this.x = 0;
	this.y = 0;
	this.behavior = "";
};

$__jsx_extend([ScrollOptions], Object);
function TrackEventInit() {
	EventInit.call(this);
	this.track = null;
};

$__jsx_extend([TrackEventInit], EventInit);
function PopStateEventInit() {
	EventInit.call(this);
	this.state = null;
};

$__jsx_extend([PopStateEventInit], EventInit);
function HashChangeEventInit() {
	EventInit.call(this);
	this.oldURL = "";
	this.newURL = "";
};

$__jsx_extend([HashChangeEventInit], EventInit);
function PageTransitionEventInit() {
	EventInit.call(this);
	this.persisted = false;
};

$__jsx_extend([PageTransitionEventInit], EventInit);
function ErrorEventInit() {
	EventInit.call(this);
	this.message = "";
	this.filename = "";
	this.lineno = 0;
	this.column = 0;
};

$__jsx_extend([ErrorEventInit], EventInit);
function DragEventInit() {
	MouseEventInit.call(this);
	this.dataTransfer = null;
};

$__jsx_extend([DragEventInit], MouseEventInit);
function CloseEventInit() {
	EventInit.call(this);
	this.wasClean = false;
	this.code = 0;
	this.reason = "";
};

$__jsx_extend([CloseEventInit], EventInit);
function StorageEventInit() {
	EventInit.call(this);
	this.key = null;
	this.oldValue = null;
	this.newValue = null;
	this.url = "";
	this.storageArea = null;
};

$__jsx_extend([StorageEventInit], EventInit);
function MessageEventInit() {
	EventInit.call(this);
	this.data = null;
	this.origin = "";
	this.lastEventId = "";
	this.source = null;
	this.ports = null;
};

$__jsx_extend([MessageEventInit], EventInit);
function EventSourceInit() {
	this.withCredentials = false;
};

$__jsx_extend([EventSourceInit], Object);
function IDBObjectStoreParameters() {
	this.keyPath = null;
	this.autoIncrement = false;
};

$__jsx_extend([IDBObjectStoreParameters], Object);
function IDBIndexParameters() {
	this.unique = false;
	this.multiEntry = false;
};

$__jsx_extend([IDBIndexParameters], Object);
function IDBVersionChangeEventInit() {
	EventInit.call(this);
	this.oldVersion = 0;
	this.newVersion = null;
};

$__jsx_extend([IDBVersionChangeEventInit], EventInit);
function NotificationOptions() {
	this.titleDir = "";
	this.body = "";
	this.bodyDir = "";
	this.tag = "";
	this.iconUrl = "";
};

$__jsx_extend([NotificationOptions], Object);
function RTCSessionDescriptionInit() {
	this.type = "";
	this.sdp = "";
};

$__jsx_extend([RTCSessionDescriptionInit], Object);
function RTCIceCandidateInit() {
	this.candidate = "";
	this.sdpMid = "";
	this.sdpMLineIndex = 0;
};

$__jsx_extend([RTCIceCandidateInit], Object);
function RTCIceServer() {
	this.url = "";
	this.credential = null;
};

$__jsx_extend([RTCIceServer], Object);
function RTCConfiguration() {
	this.iceServers = null;
};

$__jsx_extend([RTCConfiguration], Object);
function DataChannelInit() {
	this.reliable = false;
};

$__jsx_extend([DataChannelInit], Object);
function RTCPeerConnectionIceEventInit() {
	EventInit.call(this);
	this.candidate = null;
};

$__jsx_extend([RTCPeerConnectionIceEventInit], EventInit);
function MediaStreamEventInit() {
	EventInit.call(this);
	this.stream = null;
};

$__jsx_extend([MediaStreamEventInit], EventInit);
function DataChannelEventInit() {
	EventInit.call(this);
	this.channel = null;
};

$__jsx_extend([DataChannelEventInit], EventInit);
function MediaStreamConstraints() {
	this.video = null;
	this.audio = null;
};

$__jsx_extend([MediaStreamConstraints], Object);
function MediaTrackConstraints() {
	this.mandatory = null;
	this.optional = null;
};

$__jsx_extend([MediaTrackConstraints], Object);
function HitRegionOptions() {
	this.path = null;
	this.id = "";
	this.parentID = null;
	this.cursor = "";
	this.control = null;
	this.label = null;
	this.role = null;
};

$__jsx_extend([HitRegionOptions], Object);
function WebGLContextAttributes() {
	this.alpha = false;
	this.depth = false;
	this.stencil = false;
	this.antialias = false;
	this.premultipliedAlpha = false;
	this.preserveDrawingBuffer = false;
};

$__jsx_extend([WebGLContextAttributes], Object);
function WebGLContextEventInit() {
	EventInit.call(this);
	this.statusMessage = "";
};

$__jsx_extend([WebGLContextEventInit], EventInit);
function DeviceOrientationEventInit() {
	EventInit.call(this);
	this.alpha = null;
	this.beta = null;
	this.gamma = null;
	this.absolute = false;
};

$__jsx_extend([DeviceOrientationEventInit], EventInit);
function DeviceMotionEventInit() {
	EventInit.call(this);
	this.acceleration = null;
	this.accelerationIncludingGravity = null;
	this.rotationRate = null;
	this.interval = null;
};

$__jsx_extend([DeviceMotionEventInit], EventInit);
var js$0 = (function () { var global = (function () { return this; }()); return { global: global, eval: global.eval, invoke: function(invocant, methodName, args) { return invocant[methodName].apply(invocant, args); } }; }());
function Vector2() {
	this.x = 0;
	this.y = 0;
};

function Vector2$0(x, y) {
	this.x = x;
	this.y = y;
};

$__jsx_extend([Vector2, Vector2$0], Object);
Vector2.prototype.set$NN = function (x, y) {
	this.x = x;
	this.y = y;
	return this;
};


Vector2.prototype.add$NN = function (x, y) {
	this.x += x;
	this.y += y;
	return this;
};


Vector2.prototype.add$LVector2$ = function (v) {
	return this.add$NN(v.x, v.y);
};


Vector2.prototype.sub$NN = function (x, y) {
	this.x -= x;
	this.y -= y;
	return this;
};


Vector2.prototype.sub$LVector2$ = function (v) {
	return this.sub$NN(v.x, v.y);
};


Vector2.prototype.mul$N = function (value) {
	this.x *= value;
	this.y *= value;
	return this;
};


Vector2.prototype.div$N = function (value) {
	this.x /= value;
	this.y /= value;
	return this;
};


Vector2.prototype.length$ = function () {
	return Math.sqrt(this.lengthSquare$());
};


Vector2.prototype.lengthSquare$ = function () {
	return this.x * this.x + this.y * this.y;
};


Vector2.prototype.normalize$ = function () {
	var len;
	len = this.length$();
	this.x /= len;
	this.y /= len;
	return this;
};


Vector2.prototype.equals$NN = function (x, y) {
	return this.x === x && this.y === y;
};


Vector2.prototype.equals$LVector2$ = function (v) {
	return this.x === v.x && this.y === v.y;
};


Vector2.prototype.toString = function () {
	return "(" + this.x.toString() + "," + this.y.toString() + ")";
};


Vector2.prototype.log$ = function () {
	console.log(this.toString());
	return this;
};


function Vector2$dot$LVector2$LVector2$(lhs, rhs) {
	return lhs.x * rhs.x + lhs.y * rhs.y;
};

Vector2.dot$LVector2$LVector2$ = Vector2$dot$LVector2$LVector2$;

function Vector2$cross$LVector2$LVector2$(lhs, rhs) {
	return lhs.x * rhs.y - lhs.y * rhs.x;
};

Vector2.cross$LVector2$LVector2$ = Vector2$cross$LVector2$LVector2$;

function BaseApp(elm) {
	this.element = elm;
	this.scenes = [ new Scene() ];
	this.sceneIndex = 0;
};

$__jsx_extend([BaseApp], Object);
BaseApp.prototype.run$ = function () {
	var $this = this;
	var self;
	self = this;
	Timer$setInterval$F$V$N((function () {
		self._loop$();
	}), 1000 / 30);
};


BaseApp.prototype.getCurrentScene$ = function () {
	return this.scenes[this.sceneIndex];
};


BaseApp.prototype._loop$ = function () {
	this._update$();
	this._draw$();
};


BaseApp.prototype._update$ = function () {
	this.getCurrentScene$()._update$X(this);
};


BaseApp.prototype._draw$ = function () {
};


function CanvasApp(elm) {
	BaseApp.call(this, elm);
	this.canvas = new Canvas(elm);
	this.renderer = new Renderer();
	this.bgColor = "#eee";
};

$__jsx_extend([CanvasApp], BaseApp);
CanvasApp.prototype.setSize$NN = function (width, height) {
	this.canvas.width = width;
	this.canvas.height = height;
	return this;
};


CanvasApp.prototype._update$ = function () {
	var scene;
	scene = this.getCurrentScene$();
	scene._update$X(this);
	this.canvas.clear$S(this.bgColor);
	this.renderer.render$LElement$0$LCanvas$(scene, this.canvas);
};


function ShootingApp(elm) {
	var scene;
	var player;
	CanvasApp.call(this, elm);
	scene = this.getCurrentScene$();
	player = new Player();
	player.position.set$NN(0, 50);
	scene.addChild$LElement$0$(player);
};

$__jsx_extend([ShootingApp], CanvasApp);
function Canvas(elm) {
	this.element = null;
	this.canvas = elm;
	this.context = (function ($v) {
		if (! ($v == null || $v instanceof CanvasRenderingContext2D)) {
			debugger;
			throw new Error("[src/graphics/canvas.jsx:18:52] detected invalid cast, value is not an instance of the designated type or null\n        this.context = this.canvas.getContext(\'2d\') as CanvasRenderingContext2D;\n                                                    ^^\n");
		}
		return $v;
	}(this.canvas.getContext('2d')));
	this.width = this.canvas.width;
	this.height = this.canvas.height;
};

$__jsx_extend([Canvas], Object);
Canvas.prototype.clear$ = function () {
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};


Canvas.prototype.clear$S = function (color) {
	this.context.save();
	this.context.fillStyle = color;
	this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
	this.context.restore();
};


Canvas.prototype.fillRect$NNNN = function (x, y, width, height) {
	this.context.fillRect(x, y, width, height);
};


Canvas.prototype.drawImage$LHTMLImageElement$ = function (image) {
	this.context.drawImage(image, 0, 0);
};


Canvas.prototype.setTransform$NNNNNN = function (m11, m12, m21, m22, dx, dy) {
	this.context.setTransform(m11, m12, m21, m22, dx, dy);
};


function Renderer() {
};

$__jsx_extend([Renderer], Object);
Renderer.prototype.render$LElement$0$LCanvas$ = function (root, canvas) {
	this._render$LElement$0$LCanvas$(root, canvas);
};


Renderer.prototype._render$LElement$0$LCanvas$ = function (element, canvas) {
	var $this = this;
	var sprite;
	if (element instanceof Sprite) {
		sprite = (function ($v) {
			if (! ($v == null || $v instanceof Sprite)) {
				debugger;
				throw new Error("[src/display/renderer.jsx:28:33] detected invalid cast, value is not an instance of the designated type or null\n            var sprite = element as Sprite;\n                                 ^^\n");
			}
			return $v;
		}(element));
		canvas.setTransform$NNNNNN(1, 0, 0, 1, sprite.position.x, sprite.position.y);
		if (sprite.loaded === true) {
			canvas.drawImage$LHTMLImageElement$(sprite.image);
		} else {
			canvas.fillRect$NNNN(sprite.position.x, sprite.position.y, sprite.width, sprite.height);
		}
	}
	if (element.children.length > 0) {
		element.children.forEach((function (elm) {
			$this._render$LElement$0$LCanvas$(elm, canvas);
		}));
	}
};


function Timer() {
};

$__jsx_extend([Timer], Object);
function Timer$setTimeout$F$V$N(callback, intervalMS) {
	return (function ($v) {
		if (! ($v == null || typeof $v === "function")) {
			debugger;
			throw new Error("[/Users/uematsu.yuki/Dropbox/git/tmlib.jsx/node_modules/grunt-jsx/node_modules/jsx/lib/js/timer.jsx:34:40] detected invalid cast, value is not a function or null\n        return (js.global[\"setTimeout\"] as __noconvert__ function(:function():void,:number) : TimerHandle)(callback, intervalMS);\n                                        ^^\n");
		}
		return $v;
	}(js$0.global.setTimeout))(callback, intervalMS);
};

Timer.setTimeout$F$V$N = Timer$setTimeout$F$V$N;

function Timer$clearTimeout$LTimerHandle$(timer) {
	(function ($v) {
		if (! ($v == null || typeof $v === "function")) {
			debugger;
			throw new Error("[/Users/uematsu.yuki/Dropbox/git/tmlib.jsx/node_modules/grunt-jsx/node_modules/jsx/lib/js/timer.jsx:38:35] detected invalid cast, value is not a function or null\n        (js.global[\"clearTimeout\"] as __noconvert__ function(:TimerHandle) : void)(timer);\n                                   ^^\n");
		}
		return $v;
	}(js$0.global.clearTimeout))(timer);
};

Timer.clearTimeout$LTimerHandle$ = Timer$clearTimeout$LTimerHandle$;

function Timer$setInterval$F$V$N(callback, intervalMS) {
	return (function ($v) {
		if (! ($v == null || typeof $v === "function")) {
			debugger;
			throw new Error("[/Users/uematsu.yuki/Dropbox/git/tmlib.jsx/node_modules/grunt-jsx/node_modules/jsx/lib/js/timer.jsx:42:41] detected invalid cast, value is not a function or null\n        return (js.global[\"setInterval\"] as __noconvert__ function(:function():void,:number) : TimerHandle)(callback, intervalMS);\n                                         ^^\n");
		}
		return $v;
	}(js$0.global.setInterval))(callback, intervalMS);
};

Timer.setInterval$F$V$N = Timer$setInterval$F$V$N;

function Timer$clearInterval$LTimerHandle$(timer) {
	(function ($v) {
		if (! ($v == null || typeof $v === "function")) {
			debugger;
			throw new Error("[/Users/uematsu.yuki/Dropbox/git/tmlib.jsx/node_modules/grunt-jsx/node_modules/jsx/lib/js/timer.jsx:46:36] detected invalid cast, value is not a function or null\n        (js.global[\"clearInterval\"] as __noconvert__ function(:TimerHandle) : void)(timer);\n                                    ^^\n");
		}
		return $v;
	}(js$0.global.clearInterval))(timer);
};

Timer.clearInterval$LTimerHandle$ = Timer$clearInterval$LTimerHandle$;

function Timer$requestAnimationFrame$F$NV$(callback) {
	return Timer._requestAnimationFrame(callback);
};

Timer.requestAnimationFrame$F$NV$ = Timer$requestAnimationFrame$F$NV$;

function Timer$cancelAnimationFrame$LTimerHandle$(timer) {
	Timer._cancelAnimationFrame(timer);
};

Timer.cancelAnimationFrame$LTimerHandle$ = Timer$cancelAnimationFrame$LTimerHandle$;

function Timer$useNativeRAF$B(enable) {
	Timer._requestAnimationFrame = Timer$_getRequestAnimationFrameImpl$B(enable);
	Timer._cancelAnimationFrame = Timer$_getCancelAnimationFrameImpl$B(enable);
};

Timer.useNativeRAF$B = Timer$useNativeRAF$B;

function Timer$_getRequestAnimationFrameImpl$B(useNativeImpl) {
	var prefixes;
	var i;
	var name;
	var lastTime;
	if (useNativeImpl) {
		prefixes = [ "r", "webkitR", "mozR", "oR", "msR" ];
		for (i = 0; i < prefixes.length; ++ i) {
			name = (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[/Users/uematsu.yuki/Dropbox/git/tmlib.jsx/node_modules/grunt-jsx/node_modules/jsx/lib/js/timer.jsx:72:35] null access\n                var name = prefixes[i] + \"equestAnimationFrame\";\n                                   ^\n");
				}
				return v;
			}(prefixes[i])) + "equestAnimationFrame";
			if (js$0.global[name] instanceof Function) {
				return (function (callback) {
					return (function ($v) {
						if (! ($v == null || typeof $v === "function")) {
							debugger;
							throw new Error("[/Users/uematsu.yuki/Dropbox/git/tmlib.jsx/node_modules/grunt-jsx/node_modules/jsx/lib/js/timer.jsx:75:48] detected invalid cast, value is not a function or null\n                        return (js.global[name] as __noconvert__\n                                                ^^\n");
						}
						return $v;
					}(js$0.global[name]))(callback);
				});
			}
		}
	}
	lastTime = 0;
	return (function (callback) {
		var now;
		var timeToCall;
		now = Date.now();
		timeToCall = Math.max(0, 16 - (now - lastTime));
		lastTime = now + timeToCall;
		return Timer$setTimeout$F$V$N((function () {
			callback(now + timeToCall);
		}), timeToCall);
	});
};

Timer._getRequestAnimationFrameImpl$B = Timer$_getRequestAnimationFrameImpl$B;

function Timer$_getCancelAnimationFrameImpl$B(useNativeImpl) {
	var prefixes;
	var i;
	var name;
	if (useNativeImpl) {
		prefixes = [ "c", "webkitC", "mozC", "oC", "msC" ];
		for (i = 0; i < prefixes.length; ++ i) {
			name = (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[/Users/uematsu.yuki/Dropbox/git/tmlib.jsx/node_modules/grunt-jsx/node_modules/jsx/lib/js/timer.jsx:100:35] null access\n                var name = prefixes[i] + \"ancelAnimationFrame\";\n                                   ^\n");
				}
				return v;
			}(prefixes[i])) + "ancelAnimationFrame";
			if (js$0.global[name] instanceof Function) {
				return (function (timer) {
					(function ($v) {
						if (! ($v == null || typeof $v === "function")) {
							debugger;
							throw new Error("[/Users/uematsu.yuki/Dropbox/git/tmlib.jsx/node_modules/grunt-jsx/node_modules/jsx/lib/js/timer.jsx:103:41] detected invalid cast, value is not a function or null\n                        (js.global[name] as __noconvert__\n                                         ^^\n");
						}
						return $v;
					}(js$0.global[name]))(timer);
				});
			}
		}
	}
	return Timer$clearTimeout$LTimerHandle$;
};

Timer._getCancelAnimationFrameImpl$B = Timer$_getCancelAnimationFrameImpl$B;

function TimerHandle() {}
$__jsx_extend([TimerHandle], Object);
function Element$0() {
	this.children = [  ];
};

$__jsx_extend([Element$0], Object);
Element$0.prototype.addChild$LElement$0$ = function (child) {
	this.children.push(child);
};


Element$0.prototype.update$X = function (app) {
};


Element$0.prototype._update$X = function (app) {
	var $this = this;
	if (this.update$X) {
		this.update$X(app);
	}
	if (this.children.length > 0) {
		this.children.forEach((function (elm) {
			elm._update$X(app);
		}));
	}
};


function Scene() {
	Element$0.call(this);
};

$__jsx_extend([Scene], Element$0);
function Object2D() {
	Element$0.call(this);
	this.position = new Vector2();
};

$__jsx_extend([Object2D], Element$0);
function CanvasElement() {
	Object2D.call(this);
};

$__jsx_extend([CanvasElement], Object2D);
CanvasElement.prototype._draw$LCanvasRenderingContext2D$ = function (ctx) {
	var $this = this;
	if (this.draw$LCanvasRenderingContext2D$) {
		this.draw$LCanvasRenderingContext2D$(ctx);
	}
	if (this.children.length > 0) {
		this.children.forEach((function (elm) {
			(function ($v) {
				if (! ($v == null || $v instanceof CanvasElement)) {
					debugger;
					throw new Error("[src/display/canvaselement.jsx:22:21] detected invalid cast, value is not an instance of the designated type or null\n                (elm as CanvasElement)._draw(ctx);\n                     ^^\n");
				}
				return $v;
			}(elm))._draw$LCanvasRenderingContext2D$(ctx);
		}));
	}
};


CanvasElement.prototype.draw$LCanvasRenderingContext2D$ = function (ctx) {
};


function Sprite() {
	CanvasElement.call(this);
	this.image = null;
	this.width = 32;
	this.height = 32;
	this.loaded = false;
};

function Sprite$0(src) {
	var $this = this;
	var self;
	CanvasElement.call(this);
	this.width = 32;
	this.height = 32;
	this.loaded = false;
	this.image = (function ($v) {
		if (! ($v == null || $v instanceof HTMLImageElement)) {
			debugger;
			throw new Error("[src/display/sprite.jsx:29:55] detected invalid cast, value is not an instance of the designated type or null\n        this.image = dom.document.createElement(\"img\") as HTMLImageElement;\n                                                       ^^\n");
		}
		return $v;
	}(dom.document.createElement("img")));
	this.image.src = src;
	self = this;
	this.image.addEventListener("load", (function (e) {
		self.loaded = true;
		self.width = self.image.width;
		self.height = self.image.height;
	}));
};

$__jsx_extend([Sprite, Sprite$0], CanvasElement);
Sprite.prototype.draw$LCanvasRenderingContext2D$ = function (ctx) {
	if (this.loaded === true) {
		ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
	} else {
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
};


function Player() {
	Sprite$0.call(this, "http://rawgithub.com/jsx/JSX/master/web/example/shooting/img/my.png");
	this.velocity = new Vector2$0(2, 0);
	console.log(this.velocity);
};

$__jsx_extend([Player], Sprite);
Player.prototype.update$X = function (app) {
	var canvasapp;
	var left;
	var right;
	canvasapp = (function ($v) {
		if (! ($v == null || $v instanceof CanvasApp)) {
			debugger;
			throw new Error("[examples/shooting/src/shootingapp.jsx:38:28] detected invalid cast, value is not an instance of the designated type or null\n        var canvasapp = app as CanvasApp;\n                            ^^\n");
		}
		return $v;
	}(app));
	this.position.add$LVector2$(this.velocity);
	left = 0;
	right = canvasapp.canvas.width;
	if (this.position.x > right) {
		this.position.x = right;
		this.velocity.x *= - 1;
	} else if (this.position.x < left) {
		this.position.x = left;
		this.velocity.x *= - 1;
	}
};


$__jsx_lazy_init(dom, "window", function () {
	return js$0.global.window;
});
$__jsx_lazy_init(dom, "document", function () {
	return (function ($v) {
		if (! ($v == null || $v instanceof HTMLDocument)) {
			debugger;
			throw new Error("[/Users/uematsu.yuki/Dropbox/git/tmlib.jsx/node_modules/grunt-jsx/node_modules/jsx/lib/js/js/web.jsx:23:50] detected invalid cast, value is not an instance of the designated type or null\n    static const document = js.global[\"document\"] as __noconvert__ HTMLDocument;\n                                                  ^^\n");
		}
		return $v;
	}(js$0.global.document));
});
$__jsx_lazy_init(Timer, "_requestAnimationFrame", function () {
	return Timer$_getRequestAnimationFrameImpl$B(true);
});
$__jsx_lazy_init(Timer, "_cancelAnimationFrame", function () {
	return Timer$_getCancelAnimationFrameImpl$B(true);
});

var $__jsx_classMap = {
	"system:lib/built-in.jsx": {
		StopIteration: StopIteration,
		StopIteration$: StopIteration
	},
	"examples/shooting/src/main.jsx": {
		_Main: _Main,
		_Main$: _Main
	},
	"system:lib/js/js/web.jsx": {
		dom: dom,
		EventInit: EventInit,
		EventInit$: EventInit,
		CustomEventInit: CustomEventInit,
		CustomEventInit$: CustomEventInit,
		MutationObserverInit: MutationObserverInit,
		MutationObserverInit$: MutationObserverInit,
		UIEventInit: UIEventInit,
		UIEventInit$: UIEventInit,
		FocusEventInit: FocusEventInit,
		FocusEventInit$: FocusEventInit,
		MouseEventInit: MouseEventInit,
		MouseEventInit$: MouseEventInit,
		WheelEventInit: WheelEventInit,
		WheelEventInit$: WheelEventInit,
		KeyboardEventInit: KeyboardEventInit,
		KeyboardEventInit$: KeyboardEventInit,
		CompositionEventInit: CompositionEventInit,
		CompositionEventInit$: CompositionEventInit,
		ProgressEventInit: ProgressEventInit,
		ProgressEventInit$: ProgressEventInit,
		XMLHttpRequestOptions: XMLHttpRequestOptions,
		XMLHttpRequestOptions$: XMLHttpRequestOptions,
		ScrollOptions: ScrollOptions,
		ScrollOptions$: ScrollOptions,
		TrackEventInit: TrackEventInit,
		TrackEventInit$: TrackEventInit,
		PopStateEventInit: PopStateEventInit,
		PopStateEventInit$: PopStateEventInit,
		HashChangeEventInit: HashChangeEventInit,
		HashChangeEventInit$: HashChangeEventInit,
		PageTransitionEventInit: PageTransitionEventInit,
		PageTransitionEventInit$: PageTransitionEventInit,
		ErrorEventInit: ErrorEventInit,
		ErrorEventInit$: ErrorEventInit,
		DragEventInit: DragEventInit,
		DragEventInit$: DragEventInit,
		CloseEventInit: CloseEventInit,
		CloseEventInit$: CloseEventInit,
		StorageEventInit: StorageEventInit,
		StorageEventInit$: StorageEventInit,
		MessageEventInit: MessageEventInit,
		MessageEventInit$: MessageEventInit,
		EventSourceInit: EventSourceInit,
		EventSourceInit$: EventSourceInit,
		IDBObjectStoreParameters: IDBObjectStoreParameters,
		IDBObjectStoreParameters$: IDBObjectStoreParameters,
		IDBIndexParameters: IDBIndexParameters,
		IDBIndexParameters$: IDBIndexParameters,
		IDBVersionChangeEventInit: IDBVersionChangeEventInit,
		IDBVersionChangeEventInit$: IDBVersionChangeEventInit,
		NotificationOptions: NotificationOptions,
		NotificationOptions$: NotificationOptions,
		RTCSessionDescriptionInit: RTCSessionDescriptionInit,
		RTCSessionDescriptionInit$: RTCSessionDescriptionInit,
		RTCIceCandidateInit: RTCIceCandidateInit,
		RTCIceCandidateInit$: RTCIceCandidateInit,
		RTCIceServer: RTCIceServer,
		RTCIceServer$: RTCIceServer,
		RTCConfiguration: RTCConfiguration,
		RTCConfiguration$: RTCConfiguration,
		DataChannelInit: DataChannelInit,
		DataChannelInit$: DataChannelInit,
		RTCPeerConnectionIceEventInit: RTCPeerConnectionIceEventInit,
		RTCPeerConnectionIceEventInit$: RTCPeerConnectionIceEventInit,
		MediaStreamEventInit: MediaStreamEventInit,
		MediaStreamEventInit$: MediaStreamEventInit,
		DataChannelEventInit: DataChannelEventInit,
		DataChannelEventInit$: DataChannelEventInit,
		MediaStreamConstraints: MediaStreamConstraints,
		MediaStreamConstraints$: MediaStreamConstraints,
		MediaTrackConstraints: MediaTrackConstraints,
		MediaTrackConstraints$: MediaTrackConstraints,
		HitRegionOptions: HitRegionOptions,
		HitRegionOptions$: HitRegionOptions,
		WebGLContextAttributes: WebGLContextAttributes,
		WebGLContextAttributes$: WebGLContextAttributes,
		WebGLContextEventInit: WebGLContextEventInit,
		WebGLContextEventInit$: WebGLContextEventInit,
		DeviceOrientationEventInit: DeviceOrientationEventInit,
		DeviceOrientationEventInit$: DeviceOrientationEventInit,
		DeviceMotionEventInit: DeviceMotionEventInit,
		DeviceMotionEventInit$: DeviceMotionEventInit
	},
	"src/geom/vector2.jsx": {
		Vector2: Vector2,
		Vector2$: Vector2,
		Vector2$NN: Vector2$0
	},
	"src/app/baseapp.jsx": {
		BaseApp: BaseApp,
		BaseApp$LHTMLElement$: BaseApp
	},
	"src/display/canvasapp.jsx": {
		CanvasApp: CanvasApp,
		CanvasApp$LHTMLCanvasElement$: CanvasApp
	},
	"examples/shooting/src/shootingapp.jsx": {
		ShootingApp: ShootingApp,
		ShootingApp$LHTMLCanvasElement$: ShootingApp,
		Player: Player,
		Player$: Player
	},
	"src/graphics/canvas.jsx": {
		Canvas: Canvas,
		Canvas$LHTMLCanvasElement$: Canvas
	},
	"src/display/renderer.jsx": {
		Renderer: Renderer,
		Renderer$: Renderer
	},
	"system:lib/js/timer.jsx": {
		Timer: Timer,
		Timer$: Timer,
		TimerHandle: TimerHandle
	},
	"src/app/element.jsx": {
		Element: Element$0,
		Element$: Element$0
	},
	"src/app/scene.jsx": {
		Scene: Scene,
		Scene$: Scene
	},
	"src/app/object2d.jsx": {
		Object2D: Object2D,
		Object2D$: Object2D
	},
	"src/display/canvaselement.jsx": {
		CanvasElement: CanvasElement,
		CanvasElement$: CanvasElement
	},
	"src/display/sprite.jsx": {
		Sprite: Sprite,
		Sprite$: Sprite,
		Sprite$S: Sprite$0
	}
};


/**
 * launches _Main.main(:string[]):void invoked by jsx --run|--executable
 */
JSX.runMain = function (sourceFile, args) {
	var module = JSX.require(sourceFile);
	if (! module) {
		throw new ReferenceError("entry point module not found in " + sourceFile);
	}
	if (! module._Main) {
		throw new ReferenceError("entry point _Main not found in " + sourceFile);
	}
	if (! module._Main.main) {
		throw new ReferenceError("entry point _Main.main(:string[]):void not found in " + sourceFile);
	}
	module._Main.main(args);
};

/**
 * launches _Test#test*():void invoked by jsx --test
 */
JSX.runTests = function (sourceFile, tests) {
	var module = JSX.require(sourceFile);
	if (! module) return;

	var testClass = module._Test;

	if (!testClass) return; // skip if there's no test class

	if(tests.length === 0) {
		var p = testClass.prototype;
		for (var m in p) {
			if (p[m] instanceof Function && m.match(/^test\w*$/)) {
				tests.push(m);
			}
		}
	}

	var testCase = new testClass();

	if (testCase.beforeClass != null)
		testCase.beforeClass(tests);

	for (var i = 0; i < tests.length; ++i) {
		(function (method) {
			if (method in testCase) {
				testCase.run(method, function() { testCase[method](); });
			}
			else {
				throw new ReferenceError("No such test method: " + method);
			}
		}(tests[i]));
	}

	if (testCase.afterClass != null)
		testCase.afterClass();
};
/**
 * call a function on load/DOMContentLoaded
 */
function $__jsx_onload (event) {
	window.removeEventListener("load", $__jsx_onload);
	document.removeEventListener("DOMContentLoaded", $__jsx_onload);
	JSX.runMain("examples/shooting/src/main.jsx", []);
}

window.addEventListener("load", $__jsx_onload);
document.addEventListener("DOMContentLoaded", $__jsx_onload);

})(JSX);
