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
	app = new TouchColorApp((function ($v) {
		if (! ($v == null || $v instanceof HTMLCanvasElement)) {
			debugger;
			throw new Error("[examples/touchcolor/src/main.jsx:24:43] detected invalid cast, value is not an instance of the designated type or null\n        var app = new TouchColorApp(canvas as HTMLCanvasElement);\n                                           ^^\n");
		}
		return $v;
	}(canvas)));
	app.canvas.setSize$NN(640, 960);
	app.bgColor = "rgb(245, 245, 250)";
	app.canvas.fit$();
	app.run$();
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


Vector2.prototype.set$LVector2$ = function (v) {
	this.x = v.x;
	this.y = v.y;
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


Vector2.prototype.add$LVector2$LVector2$ = function (lhs, rhs) {
	return this.set$NN(lhs.x + rhs.x, lhs.y + rhs.y);
};


Vector2.prototype.sub$NN = function (x, y) {
	this.x -= x;
	this.y -= y;
	return this;
};


Vector2.prototype.sub$LVector2$ = function (v) {
	return this.sub$NN(v.x, v.y);
};


Vector2.prototype.sub$LVector2$LVector2$ = function (lhs, rhs) {
	return this.set$NN(lhs.x - rhs.x, lhs.y - rhs.y);
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

function Pointing(elm) {
	this.position = new Vector2$1();
	this.deltaPosition = new Vector2$1();
	this.prevPosition = new Vector2$1();
	this._tempPosition = new Vector2$1();
	this.element = elm;
};

$__jsx_extend([Pointing], Object);
var js$0 = (function () { var global = (function () { return this; }()); return { global: global, eval: global.eval, invoke: function(invocant, methodName, args) { return invocant[methodName].apply(invocant, args); } }; }());
function BaseApp(elm) {
	var $this = this;
	var ua;
	var mobileFlag;
	this.sceneIndex = 0;
	this.frame = 0;
	this.fps = 30;
	this.pointing = null;
	this.element = elm;
	this.scenes = [ new Scene() ];
	ua = dom.window.navigator.userAgent;
	mobileFlag = (function () {
		return ua.indexOf("iPhone") > 0 || ua.indexOf("iPad") > 0 || ua.indexOf("Android") > 0;
	})();
	this.pointing = (mobileFlag ? new Touch$0(elm) : new Mouse(elm));
	elm.addEventListener("touchstart", (function (e) {
		e.preventDefault();
	}));
};

$__jsx_extend([BaseApp], Object);
BaseApp.prototype.run$ = function () {
	var $this = this;
	Timer$setInterval$F$V$N((function () {
		$this._loop$();
	}), 1000 / this.fps);
};


BaseApp.prototype.replaceScene$LScene$ = function (scene) {
	this.scenes[this.sceneIndex] = scene;
	return this;
};


BaseApp.prototype.getCurrentScene$ = function () {
	return this.scenes[this.sceneIndex];
};


BaseApp.prototype._loop$ = function () {
	this.pointing.update$();
	this._update$();
	this._draw$();
	++ this.frame;
};


BaseApp.prototype._update$ = function () {
	this.getCurrentScene$()._update$X(this);
};


BaseApp.prototype._draw$ = function () {
};


function CanvasApp(elm) {
	BaseApp.call(this, elm);
	this.canvas = new Canvas$0(elm);
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


function TouchColorApp(elm) {
	var scene;
	CanvasApp.call(this, elm);
	scene = new GameScene();
	this.replaceScene$LScene$(scene);
};

$__jsx_extend([TouchColorApp], CanvasApp);
function Canvas() {
	var elm;
	this.element = null;
	this.canvas = null;
	this.context = null;
	this.width = 0;
	this.height = 0;
	elm = dom.window.document.createElement("canvas");
	this.init$LHTMLCanvasElement$((function ($v) {
		if (! ($v == null || $v instanceof HTMLCanvasElement)) {
			debugger;
			throw new Error("[src/graphics/canvas.jsx:18:22] detected invalid cast, value is not an instance of the designated type or null\n        this.init(elm as HTMLCanvasElement);\n                      ^^\n");
		}
		return $v;
	}(elm)));
};

function Canvas$0(elm) {
	this.element = null;
	this.canvas = null;
	this.context = null;
	this.width = 0;
	this.height = 0;
	this.init$LHTMLCanvasElement$(elm);
};

$__jsx_extend([Canvas, Canvas$0], Object);
Canvas.prototype.init$LHTMLCanvasElement$ = function (elm) {
	this.canvas = elm;
	this.context = (function ($v) {
		if (! ($v == null || $v instanceof CanvasRenderingContext2D)) {
			debugger;
			throw new Error("[src/graphics/canvas.jsx:27:52] detected invalid cast, value is not an instance of the designated type or null\n        this.context = this.canvas.getContext(\'2d\') as CanvasRenderingContext2D;\n                                                    ^^\n");
		}
		return $v;
	}(this.canvas.getContext('2d')));
	this.width = this.canvas.width;
	this.height = this.canvas.height;
	return this;
};


Canvas.prototype.clear$ = function () {
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	return this;
};


Canvas.prototype.fit$ = function () {
	var s;
	var rateWidth;
	var rateHeight;
	var rate;
	s = this.canvas.style;
	s.position = "absolute";
	s.margin = "auto";
	s.top = "0px";
	s.right = "0px";
	s.bottom = "0px";
	s.left = "0px";
	rateWidth = this.width / dom.window.innerWidth;
	rateHeight = this.height / dom.window.innerHeight;
	rate = this.height / this.width;
	if (rateWidth > rateHeight) {
		s.width = (dom.window.innerWidth + "") + "px";
		s.height = (dom.window.innerWidth * rate + "") + "px";
	} else {
		s.width = (dom.window.innerHeight / rate + "") + "px";
		s.height = (dom.window.innerHeight + "") + "px";
	}
	return this;
};


Canvas.prototype.clear$S = function (color) {
	this.context.save();
	this.context.fillStyle = color;
	this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
	this.context.restore();
	return this;
};


Canvas.prototype.fillRect$NNNN = function (x, y, width, height) {
	this.context.fillRect(x, y, width, height);
	return this;
};


Canvas.prototype.fillText$SNN = function (text, x, y) {
	this.context.fillText(text, x, y);
	return this;
};


Canvas.prototype.drawImage$LHTMLImageElement$ = function (image) {
	this.context.drawImage(image, 0, 0);
	return this;
};


Canvas.prototype.drawImage$LHTMLImageElement$NNNN = function (image, dx, dy, dw, dh) {
	this.context.drawImage(image, dx, dy, dw, dh);
	return this;
};


Canvas.prototype.drawImage$LHTMLImageElement$NNNNNNNN = function (image, sx, sy, sw, sh, dx, dy, dw, dh) {
	this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
	return this;
};


Canvas.prototype.drawCanvas$LCanvas$ = function (canvas) {
	this.context.drawImage(canvas.canvas, 0, 0);
	return this;
};


Canvas.prototype.drawCanvas$LCanvas$NNNN = function (canvas, dx, dy, dw, dh) {
	this.context.drawImage(canvas.canvas, dx, dy, dw, dh);
	return this;
};


Canvas.prototype.drawCanvas$LCanvas$NNNNNNNN = function (canvas, sx, sy, sw, sh, dx, dy, dw, dh) {
	this.context.drawImage(canvas.canvas, sx, sy, sw, sh, dx, dy, dw, dh);
	return this;
};


Canvas.prototype.setTransform$NNNNNN = function (m11, m12, m21, m22, dx, dy) {
	this.context.setTransform(m11, m12, m21, m22, dx, dy);
	return this;
};


Canvas.prototype.translate$NN = function (x, y) {
	this.context.translate(x, y);
	return this;
};


Canvas.prototype.rotate$N = function (angle) {
	this.context.rotate(angle);
	return this;
};


Canvas.prototype.scale$NN = function (x, y) {
	this.context.scale(x, y);
	return this;
};


Canvas.prototype.setSize$NN = function (width, height) {
	this.width = this.canvas.width = width;
	this.height = this.canvas.height = height;
	return this;
};


function Renderer() {
};

$__jsx_extend([Renderer], Object);
Renderer.prototype.render$LElement$0$LCanvas$ = function (root, canvas) {
	canvas.context.save();
	this._render$LElement$0$LCanvas$(root, canvas);
	canvas.context.restore();
};


Renderer.prototype._render$LElement$0$LCanvas$ = function (element, canvas) {
	var $this = this;
	var canvaselement;
	canvas.context.save();
	if (element instanceof Sprite) {
		this._drawSprite$LSprite$LCanvas$((function ($v) {
			if (! ($v == null || $v instanceof Sprite)) {
				debugger;
				throw new Error("[src/display/renderer.jsx:34:37] detected invalid cast, value is not an instance of the designated type or null\n            this._drawSprite(element as Sprite, canvas);\n                                     ^^\n");
			}
			return $v;
		}(element)), canvas);
	} else if (element instanceof Label) {
		this._drawLabel$LLabel$LCanvas$((function ($v) {
			if (! ($v == null || $v instanceof Label)) {
				debugger;
				throw new Error("[src/display/renderer.jsx:37:36] detected invalid cast, value is not an instance of the designated type or null\n            this._drawLabel(element as Label, canvas);\n                                    ^^\n");
			}
			return $v;
		}(element)), canvas);
	} else if (element instanceof Shape) {
		this._drawShape$LShape$LCanvas$((function ($v) {
			if (! ($v == null || $v instanceof Shape)) {
				debugger;
				throw new Error("[src/display/renderer.jsx:40:36] detected invalid cast, value is not an instance of the designated type or null\n            this._drawShape(element as Shape, canvas);\n                                    ^^\n");
			}
			return $v;
		}(element)), canvas);
	} else if (element instanceof CanvasElement) {
		canvaselement = (function ($v) {
			if (! ($v == null || $v instanceof CanvasElement)) {
				debugger;
				throw new Error("[src/display/renderer.jsx:43:40] detected invalid cast, value is not an instance of the designated type or null\n            var canvaselement = element as CanvasElement;\n                                        ^^\n");
			}
			return $v;
		}(element));
		this._transform$LObject2D$LCanvas$(canvaselement, canvas);
	}
	if (element.children.length > 0) {
		element.children.forEach((function (elm) {
			$this._render$LElement$0$LCanvas$(elm, canvas);
		}));
	}
	canvas.context.restore();
};


Renderer.prototype._drawSprite$LSprite$LCanvas$ = function (sprite, canvas) {
	this._transform$LObject2D$LCanvas$(sprite, canvas);
	canvas.drawImage$LHTMLImageElement$NNNN(sprite.image, - sprite.width * sprite.origin.x, - sprite.height * sprite.origin.y, sprite.width, sprite.height);
	return this;
};


Renderer.prototype._drawLabel$LLabel$LCanvas$ = function (label, canvas) {
	this._transform$LObject2D$LCanvas$(label, canvas);
	canvas.context.fillStyle = label.fontColor;
	canvas.context.font = label._fontStyle;
	canvas.context.textAlign = label.align;
	canvas.context.textBaseline = label.baseline;
	canvas.fillText$SNN(label.text, 0, 0);
	return this;
};


Renderer.prototype._drawShape$LShape$LCanvas$ = function (shape, canvas) {
	this._transform$LObject2D$LCanvas$(shape, canvas);
	canvas.drawCanvas$LCanvas$NNNN(shape.canvas, - shape.width * shape.origin.x, - shape.height * shape.origin.y, shape.width, shape.height);
	return this;
};


Renderer.prototype._transform$LObject2D$LCanvas$ = function (obj, canvas) {
	canvas.translate$NN(obj.position.x, obj.position.y);
	canvas.rotate$N(obj.rotation);
	canvas.scale$NN(obj.scale.x, obj.scale.y);
	return this;
};


function AssetManager() {
};

$__jsx_extend([AssetManager], Object);
function AssetManager$load$HSF$HXV$(assets, callback) {
	var flow;
	flow = new Flow((Object.keys(assets).length | 0), callback);
	Object.keys(assets).forEach((function (key) {
		var value;
		var image;
		value = assets[key];
		image = (function ($v) {
			if (! ($v == null || $v instanceof HTMLImageElement)) {
				debugger;
				throw new Error("[src/asset/assetmanager.jsx:16:58] detected invalid cast, value is not an instance of the designated type or null\n            var image = dom.document.createElement(\"img\") as HTMLImageElement;\n                                                          ^^\n");
			}
			return $v;
		}(dom.document.createElement("img")));
		image.src = (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[src/asset/assetmanager.jsx:18:24] null access\n            image.src = value;\n                        ^^^^^\n");
			}
			return v;
		}(value));
		image.addEventListener("load", (function (e) {
			flow.pass$();
		}));
		AssetManager.assets[key] = image;
	}));
};

AssetManager.load$HSF$HXV$ = AssetManager$load$HSF$HXV$;

function AssetManager$getImage$S(key) {
	return (function ($v) {
		if (! ($v == null || $v instanceof HTMLImageElement)) {
			debugger;
			throw new Error("[src/asset/assetmanager.jsx:28:40] detected invalid cast, value is not an instance of the designated type or null\n        return AssetManager.assets[key] as HTMLImageElement;\n                                        ^^\n");
		}
		return $v;
	}(AssetManager.assets[key]));
};

AssetManager.getImage$S = AssetManager$getImage$S;

function Util() {
};

$__jsx_extend([Util], Object);
function Util$shuffle$AX(arr) {
	var i;
	var len;
	var j;
	var t;
	for ((i = 0, len = arr.length); i < len; ++ i) {
		j = Math.floor(Math.random() * len);
		if (i !== j) {
			t = arr[i];
			arr[i] = arr[j];
			arr[j] = t;
		}
	}
	return arr;
};

Util.shuffle$AX = Util$shuffle$AX;

function Util$format$SHX(str, obj) {
	var fn;
	var rex;
	fn = (function (m) {
		var key;
		key = m.substring(1, m.length - 1);
		return obj[key] + "";
	});
	rex = /\{(\w+)\}/g;
	return str.replace(rex, fn);
};

Util.format$SHX = Util$format$SHX;

function Vector2$1() {
	this.x = 0;
	this.y = 0;
};

function Vector2$2(x, y) {
	this.x = x;
	this.y = y;
};

$__jsx_extend([Vector2$1, Vector2$2], Object);
Vector2$1.prototype.set$NN = function (x, y) {
	this.x = x;
	this.y = y;
	return this;
};


Vector2$1.prototype.set$LVector2$1$ = function (v) {
	this.x = v.x;
	this.y = v.y;
	return this;
};


Vector2$1.prototype.add$NN = function (x, y) {
	this.x += x;
	this.y += y;
	return this;
};


Vector2$1.prototype.add$LVector2$1$ = function (v) {
	return this.add$NN(v.x, v.y);
};


Vector2$1.prototype.add$LVector2$1$LVector2$1$ = function (lhs, rhs) {
	return this.set$NN(lhs.x + rhs.x, lhs.y + rhs.y);
};


Vector2$1.prototype.sub$NN = function (x, y) {
	this.x -= x;
	this.y -= y;
	return this;
};


Vector2$1.prototype.sub$LVector2$1$ = function (v) {
	return this.sub$NN(v.x, v.y);
};


Vector2$1.prototype.sub$LVector2$1$LVector2$1$ = function (lhs, rhs) {
	return this.set$NN(lhs.x - rhs.x, lhs.y - rhs.y);
};


Vector2$1.prototype.mul$N = function (value) {
	this.x *= value;
	this.y *= value;
	return this;
};


Vector2$1.prototype.div$N = function (value) {
	this.x /= value;
	this.y /= value;
	return this;
};


Vector2$1.prototype.length$ = function () {
	return Math.sqrt(this.lengthSquare$());
};


Vector2$1.prototype.lengthSquare$ = function () {
	return this.x * this.x + this.y * this.y;
};


Vector2$1.prototype.normalize$ = function () {
	var len;
	len = this.length$();
	this.x /= len;
	this.y /= len;
	return this;
};


Vector2$1.prototype.equals$NN = function (x, y) {
	return this.x === x && this.y === y;
};


Vector2$1.prototype.equals$LVector2$1$ = function (v) {
	return this.x === v.x && this.y === v.y;
};


Vector2$1.prototype.toString = function () {
	return "(" + this.x.toString() + "," + this.y.toString() + ")";
};


Vector2$1.prototype.log$ = function () {
	console.log(this.toString());
	return this;
};


function Vector2$1$dot$LVector2$1$LVector2$1$(lhs, rhs) {
	return lhs.x * rhs.x + lhs.y * rhs.y;
};

Vector2$1.dot$LVector2$1$LVector2$1$ = Vector2$1$dot$LVector2$1$LVector2$1$;

function Vector2$1$cross$LVector2$1$LVector2$1$(lhs, rhs) {
	return lhs.x * rhs.y - lhs.y * rhs.x;
};

Vector2$1.cross$LVector2$1$LVector2$1$ = Vector2$1$cross$LVector2$1$LVector2$1$;

function Event$0(type) {
	this.type = type;
};

$__jsx_extend([Event$0], Object);
function EventDispatcher() {
	this._listeners = ({  });
};

$__jsx_extend([EventDispatcher], Object);
EventDispatcher.prototype.on$SF$LEvent$0$V$ = function (type, fn) {
	if (! this._listeners[type]) {
		this._listeners[type] = [  ];
	}
	this._listeners[type].push(fn);
	return this;
};


EventDispatcher.prototype.off$ = function () {
	return this;
};


EventDispatcher.prototype.fire$LEvent$0$ = function (e) {
	var $this = this;
	var listeners;
	listeners = this._listeners[e.type];
	if (listeners) {
		listeners.forEach((function (fn) {
			fn(e);
		}));
	}
	return this;
};


EventDispatcher.prototype.contains$S = function (type) {
	return (this._listeners[type] ? true : false);
};


function Element$0() {
	EventDispatcher.call(this);
	this.parent = null;
	this.children = [  ];
};

$__jsx_extend([Element$0], EventDispatcher);
Element$0.prototype.addChild$LElement$0$ = function (child) {
	this.children.push(child);
	child.parent = this;
	return this;
};


Element$0.prototype.addChildTo$LElement$0$ = function (parent) {
	parent.addChild$LElement$0$(this);
	return this;
};


Element$0.prototype.remove$ = function () {
	this.parent.removeChild$LElement$0$(this);
	return this;
};


Element$0.prototype.removeChild$LElement$0$ = function (child) {
	var index;
	index = this.children.indexOf(child);
	if (index !== - 1) {
		this.children.splice(index, 1);
		child.parent = null;
	}
	return this;
};


Element$0.prototype.update$X = function (app) {
};


Element$0.prototype._update$X = function (app) {
	var $this = this;
	var e;
	this.update$X(app);
	if (this.contains$S("enterframe")) {
		e = new Event$0("enterframe");
		this.fire$LEvent$0$(e);
	}
	if (this.children.length > 0) {
		this.children.forEach((function (elm) {
			elm._update$X(app);
		}));
	}
};


function Object2D() {
	Element$0.call(this);
	this.position = new Vector2();
	this.origin = new Vector2$0(0.5, 0.5);
	this.scale = new Vector2$0(1.0, 1.0);
	this.rotation = 0;
	this.width = 32;
	this.height = 32;
	this.radius = 32;
};

$__jsx_extend([Object2D], Element$0);
Object2D.prototype.setPosition$NN = function (x, y) {
	this.position.set$NN(x, y);
	return this;
};


Object2D.prototype.isHit$LVector2$ = function (p) {
	var x;
	var y;
	var checkHorizon;
	var checkVertical;
	x = p.x;
	y = p.y;
	checkHorizon = this.getLeft$() < x && x < this.getRight$();
	checkVertical = this.getTop$() < y && y < this.getBottom$();
	return checkHorizon && checkVertical;
};


Object2D.prototype.isHit$LObject2D$ = function (object) {
	var dir;
	var lenSq;
	dir = new Vector2().sub$LVector2$LVector2$(this.position, object.position);
	lenSq = dir.lengthSquare$();
	return lenSq < (this.radius + object.radius) * (this.radius + object.radius);
};


Object2D.prototype.getLeft$ = function () {
	return this.position.x - this.width * this.origin.x;
};


Object2D.prototype.getRight$ = function () {
	return this.position.x + this.width * (1 - this.origin.x);
};


Object2D.prototype.getTop$ = function () {
	return this.position.y - this.height * this.origin.y;
};


Object2D.prototype.getBottom$ = function () {
	return this.position.y + this.height * (1 - this.origin.y);
};


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


function Piece(angle) {
	var color;
	var shape;
	CanvasElement.call(this);
	this.width = 64;
	this.height = 64;
	color = "hsl(" + (angle + "") + ",75%, 55%)";
	shape = new Shape(64, 64);
	shape.canvas.clear$S(color);
	this.addChild$LElement$0$(shape);
};

$__jsx_extend([Piece], CanvasElement);
function Sprite() {
	CanvasElement.call(this);
	this.image = null;
};

function Sprite$0(key) {
	CanvasElement.call(this);
	this.image = AssetManager$getImage$S(key);
	this.width = this.image.width;
	this.height = this.image.height;
};

$__jsx_extend([Sprite, Sprite$0], CanvasElement);
function Label(text) {
	CanvasElement.call(this);
	this.align = "center";
	this.baseline = "middle";
	this.fontColor = "black";
	this._fontWeight = "";
	this._fontSize = 24;
	this._fontFamily = "'Consolas', 'Monaco', 'ＭＳ ゴシック'";
	this._fontStyle = "";
	this.text = text;
	this._updateFontStyle$();
};

function Label$0() {
	Label.call(this, "");
};

$__jsx_extend([Label, Label$0], CanvasElement);
Label.prototype._updateFontStyle$ = function () {
	this._fontStyle = Util$format$SHX("{_fontWeight} {_fontSize}px {_fontFamily}", (function ($v) {
		if (! ($v == null || typeof $v === "object" || typeof $v === "function")) {
			debugger;
			throw new Error("[src/display/label.jsx:34:101] detected invalid cast, value is not a Map or null\n        this._fontStyle = Util.format(\"{_fontWeight} {_fontSize}px {_fontFamily}\", (this as variant) as Map.<variant>);\n                                                                                                     ^^\n");
		}
		return $v;
	}(this)));
	return this;
};


function Shape(width, height) {
	CanvasElement.call(this);
	this.loaded = false;
	this.width = width;
	this.height = height;
	this.canvas = new Canvas();
	this.canvas.setSize$NN(width, height);
};

function Shape$0(width) {
	Shape.call(this, width, 64);
};

function Shape$1() {
	Shape.call(this, 64, 64);
};

$__jsx_extend([Shape, Shape$0, Shape$1], CanvasElement);
function Scene() {
	Element$0.call(this);
};

$__jsx_extend([Scene], Element$0);
function GameScene() {
	var i;
	var j;
	var index;
	var x;
	var y;
	var angle;
	var piece;
	Scene.call(this);
	this.pieceGroup = new CanvasElement();
	this.addChild$LElement$0$(this.pieceGroup);
	for (i = 0; i < 5; ++ i) {
		for (j = 0; j < 5; ++ j) {
			index = i * 5 + j;
			x = j * 100;
			y = i * 100;
			angle = 360 / 25 * index;
			piece = new Piece(angle);
			piece.setPosition$NN(x + 115, y + 100);
			this.pieceGroup.addChild$LElement$0$(piece);
		}
	}
};

$__jsx_extend([GameScene], Scene);
GameScene.prototype.update$X = function (app) {
	this.checkCollision$X(app);
};


GameScene.prototype.checkCollision$X = function (app) {
	var $this = this;
	var baseApp;
	var p;
	var temp;
	baseApp = (function ($v) {
		if (! ($v == null || $v instanceof CanvasApp)) {
			debugger;
			throw new Error("[examples/touchcolor/src/main.jsx:70:26] detected invalid cast, value is not an instance of the designated type or null\n        var baseApp = app as CanvasApp;\n                          ^^\n");
		}
		return $v;
	}(app));
	p = baseApp.pointing;
	if (! p.getPointingStart$()) {
		return;
	}
	temp = new Vector2$0(p.position.x, p.position.y);
	this.pieceGroup.children.forEach((function (elm) {
		var canvasElement;
		canvasElement = (function ($v) {
			if (! ($v == null || $v instanceof CanvasElement)) {
				debugger;
				throw new Error("[examples/touchcolor/src/main.jsx:77:36] detected invalid cast, value is not an instance of the designated type or null\n            var canvasElement = elm as CanvasElement;\n                                    ^^\n");
			}
			return $v;
		}(elm));
		if (canvasElement.isHit$LVector2$(temp)) {
			$this.pieceGroup.removeChild$LElement$0$(elm);
			canvasElement.scale.x *= 1.1;
			canvasElement.scale.y *= 1.1;
		}
	}));
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
function Mouse(elm) {
	var $this = this;
	Pointing.call(this, elm);
	this.button = 0;
	this.last = 0;
	this.press = 0;
	this.up = 0;
	this.down = 0;
	this.element.addEventListener("mousedown", (function (e) {
		var mouseEvent;
		mouseEvent = (function ($v) {
			if (! ($v == null || $v instanceof MouseEvent)) {
				debugger;
				throw new Error("[src/input/mouse.jsx:27:31] detected invalid cast, value is not an instance of the designated type or null\n            var mouseEvent = e as MouseEvent;\n                               ^^\n");
			}
			return $v;
		}(e));
		$this.button |= 1 << mouseEvent.button;
	}));
	this.element.addEventListener("mouseup", (function (e) {
		var mouseEvent;
		mouseEvent = (function ($v) {
			if (! ($v == null || $v instanceof MouseEvent)) {
				debugger;
				throw new Error("[src/input/mouse.jsx:31:31] detected invalid cast, value is not an instance of the designated type or null\n            var mouseEvent = e as MouseEvent;\n                               ^^\n");
			}
			return $v;
		}(e));
		$this.button &= ~ (1 << mouseEvent.button);
	}));
	this.element.addEventListener("mousemove", (function (e) {
		var mouseEvent;
		var element;
		var rect;
		mouseEvent = (function ($v) {
			if (! ($v == null || $v instanceof MouseEvent)) {
				debugger;
				throw new Error("[src/input/mouse.jsx:35:31] detected invalid cast, value is not an instance of the designated type or null\n            var mouseEvent = e as MouseEvent;\n                               ^^\n");
			}
			return $v;
		}(e));
		element = (function ($v) {
			if (! ($v == null || $v instanceof HTMLElement)) {
				debugger;
				throw new Error("[src/input/mouse.jsx:36:35] detected invalid cast, value is not an instance of the designated type or null\n            var element = e.target as HTMLElement;\n                                   ^^\n");
			}
			return $v;
		}(e.target));
		rect = element.getBoundingClientRect();
		$this._tempPosition.x = mouseEvent.x - rect.left;
		$this._tempPosition.y = mouseEvent.y - rect.top;
		$this._tempPosition.x *= +element.width / (+element.style.width.replace('px', ''));
		$this._tempPosition.y *= +element.height / (+element.style.height.replace('px', ''));
	}));
};

$__jsx_extend([Mouse], Pointing);
Mouse.prototype.update$ = function () {
	this.last = this.press;
	this.press = this.button;
	this.down = (this.press ^ this.last) & this.press;
	this.up = (this.press ^ this.last) & this.last;
	this.deltaPosition.sub$LVector2$1$LVector2$1$(this._tempPosition, this.prevPosition);
	this.prevPosition.set$LVector2$1$(this.position);
	this.position.set$LVector2$1$(this._tempPosition);
};


Mouse.prototype.getPointing$ = function () {
	return this.getButton$S("left");
};


Mouse.prototype.getPointingStart$ = function () {
	return this.getButtonDown$S("left");
};


Mouse.prototype.getPointingEnd$ = function () {
	return this.getButtonUp$S("left");
};


Mouse.prototype.getButton$S = function (button) {
	return (this.press & (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[src/input/mouse.jsx:76:45] null access\n        return (this.press & Mouse.BUTTON_MAP[button]) != 0;\n                                             ^\n");
		}
		return v;
	}(Mouse.BUTTON_MAP[button]))) !== 0;
};


Mouse.prototype.getButtonDown$S = function (button) {
	return (this.down & (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[src/input/mouse.jsx:80:44] null access\n        return (this.down & Mouse.BUTTON_MAP[button]) != 0;\n                                            ^\n");
		}
		return v;
	}(Mouse.BUTTON_MAP[button]))) !== 0;
};


Mouse.prototype.getButtonUp$S = function (button) {
	return (this.up & (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[src/input/mouse.jsx:84:42] null access\n        return (this.up & Mouse.BUTTON_MAP[button]) != 0;\n                                          ^\n");
		}
		return v;
	}(Mouse.BUTTON_MAP[button]))) !== 0;
};


function Touch$0(elm) {
	var $this = this;
	Pointing.call(this, elm);
	this.touch = false;
	this.last = 0;
	this.now = 0;
	this.start = 0;
	this.end = 0;
	this.element.addEventListener("touchstart", (function (e) {
		var touchEvent;
		var element;
		var t;
		var r;
		touchEvent = (function ($v) {
			if (! ($v == null || $v instanceof TouchEvent)) {
				debugger;
				throw new Error("[src/input/touch.jsx:18:31] detected invalid cast, value is not an instance of the designated type or null\n            var touchEvent = e as TouchEvent;\n                               ^^\n");
			}
			return $v;
		}(e));
		element = (function ($v) {
			if (! ($v == null || $v instanceof HTMLElement)) {
				debugger;
				throw new Error("[src/input/touch.jsx:19:35] detected invalid cast, value is not an instance of the designated type or null\n            var element = e.target as HTMLElement;\n                                   ^^\n");
			}
			return $v;
		}(e.target));
		t = touchEvent.touches[0];
		r = element.getBoundingClientRect();
		$this._tempPosition.set$NN(t.clientX - r.left, t.clientY - r.top);
		$this._tempPosition.x *= +element.width / (+element.style.width.replace('px', ''));
		$this._tempPosition.y *= +element.height / (+element.style.height.replace('px', ''));
		$this.position.set$LVector2$1$($this._tempPosition);
		$this.prevPosition.set$LVector2$1$($this._tempPosition);
		$this.touch = true;
	}));
	this.element.addEventListener("touchend", (function (e) {
		$this.touch = false;
	}));
	this.element.addEventListener("touchmove", (function (e) {
		var touchEvent;
		var element;
		var t;
		var r;
		touchEvent = (function ($v) {
			if (! ($v == null || $v instanceof TouchEvent)) {
				debugger;
				throw new Error("[src/input/touch.jsx:36:31] detected invalid cast, value is not an instance of the designated type or null\n            var touchEvent = e as TouchEvent;\n                               ^^\n");
			}
			return $v;
		}(e));
		element = (function ($v) {
			if (! ($v == null || $v instanceof HTMLElement)) {
				debugger;
				throw new Error("[src/input/touch.jsx:37:35] detected invalid cast, value is not an instance of the designated type or null\n            var element = e.target as HTMLElement;\n                                   ^^\n");
			}
			return $v;
		}(e.target));
		t = touchEvent.touches[0];
		r = element.getBoundingClientRect();
		$this._tempPosition.set$NN(t.clientX - r.left, t.clientY - r.top);
		$this._tempPosition.x *= +element.width / (+element.style.width.replace('px', ''));
		$this._tempPosition.y *= +element.height / (+element.style.height.replace('px', ''));
	}));
};

$__jsx_extend([Touch$0], Pointing);
Touch$0.prototype.update$ = function () {
	this.last = this.now;
	this.now = ((this.touch ? 1 : 0) | 0);
	this.start = (this.now ^ this.last) & this.now;
	this.end = (this.now ^ this.last) & this.last;
	this.deltaPosition.sub$LVector2$1$LVector2$1$(this._tempPosition, this.prevPosition);
	this.prevPosition.set$LVector2$1$(this.position);
	this.position.set$LVector2$1$(this._tempPosition);
};


Touch$0.prototype.getPointing$ = function () {
	return this.getTouch$();
};


Touch$0.prototype.getPointingStart$ = function () {
	return this.getTouchStart$();
};


Touch$0.prototype.getPointingEnd$ = function () {
	return this.getTouchEnd$();
};


Touch$0.prototype.getTouch$ = function () {
	return this.now !== 0;
};


Touch$0.prototype.getTouchStart$ = function () {
	return this.start !== 0;
};


Touch$0.prototype.getTouchEnd$ = function () {
	return this.end !== 0;
};


function Flow(waits, callback) {
	this.counter = 0;
	this.args = ({  });
	this.waits = waits;
	this.callback = callback;
};

$__jsx_extend([Flow], Object);
Flow.prototype.pass$ = function () {
	++ this.counter;
	this._check$();
};


Flow.prototype.pass$SX = function (key, value) {
	++ this.counter;
	this.args[key] = value;
	this._check$();
};


Flow.prototype._check$ = function () {
	if (this.counter === this.waits) {
		this._dispatch$();
	}
};


Flow.prototype._dispatch$ = function () {
	if (this.callback) {
		this.callback(this.args);
		this.callback = null;
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
$__jsx_lazy_init(AssetManager, "assets", function () {
	return ({  });
});
$__jsx_lazy_init(Timer, "_requestAnimationFrame", function () {
	return Timer$_getRequestAnimationFrameImpl$B(true);
});
$__jsx_lazy_init(Timer, "_cancelAnimationFrame", function () {
	return Timer$_getCancelAnimationFrameImpl$B(true);
});
Mouse.BUTTON_LEFT = 0x1;
Mouse.BUTTON_MIDDLE = 0x2;
Mouse.BUTTON_RIGHT = 0x4;
$__jsx_lazy_init(Mouse, "BUTTON_MAP", function () {
	return ({ "left": Mouse.BUTTON_LEFT, "middle": Mouse.BUTTON_MIDDLE, "right": Mouse.BUTTON_RIGHT });
});

var $__jsx_classMap = {
	"system:lib/built-in.jsx": {
		StopIteration: StopIteration,
		StopIteration$: StopIteration
	},
	"examples/touchcolor/src/main.jsx": {
		_Main: _Main,
		_Main$: _Main,
		TouchColorApp: TouchColorApp,
		TouchColorApp$LHTMLCanvasElement$: TouchColorApp,
		Piece: Piece,
		Piece$N: Piece,
		GameScene: GameScene,
		GameScene$: GameScene
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
	"src/input/pointing.jsx": {
		Pointing: Pointing,
		Pointing$LHTMLElement$: Pointing
	},
	"src/app/baseapp.jsx": {
		BaseApp: BaseApp,
		BaseApp$LHTMLElement$: BaseApp
	},
	"src/display/canvasapp.jsx": {
		CanvasApp: CanvasApp,
		CanvasApp$LHTMLCanvasElement$: CanvasApp
	},
	"src/graphics/canvas.jsx": {
		Canvas: Canvas,
		Canvas$: Canvas,
		Canvas$LHTMLCanvasElement$: Canvas$0
	},
	"src/display/renderer.jsx": {
		Renderer: Renderer,
		Renderer$: Renderer
	},
	"src/asset/assetmanager.jsx": {
		AssetManager: AssetManager,
		AssetManager$: AssetManager
	},
	"src/util/util.jsx": {
		Util: Util,
		Util$: Util
	},
	"src/geom/Vector2.jsx": {
		Vector2: Vector2$1,
		Vector2$: Vector2$1,
		Vector2$NN: Vector2$2
	},
	"src/event/eventdispatcher.jsx": {
		Event: Event$0,
		Event$S: Event$0,
		EventDispatcher: EventDispatcher,
		EventDispatcher$: EventDispatcher
	},
	"src/app/element.jsx": {
		Element: Element$0,
		Element$: Element$0
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
	},
	"src/display/label.jsx": {
		Label: Label,
		Label$S: Label,
		Label$: Label$0
	},
	"src/display/shape.jsx": {
		Shape: Shape,
		Shape$NN: Shape,
		Shape$N: Shape$0,
		Shape$: Shape$1
	},
	"src/app/scene.jsx": {
		Scene: Scene,
		Scene$: Scene
	},
	"system:lib/js/timer.jsx": {
		Timer: Timer,
		Timer$: Timer,
		TimerHandle: TimerHandle
	},
	"src/input/mouse.jsx": {
		Mouse: Mouse,
		Mouse$LHTMLElement$: Mouse
	},
	"src/input/touch.jsx": {
		Touch: Touch$0,
		Touch$LHTMLElement$: Touch$0
	},
	"src/util/flow.jsx": {
		Flow: Flow,
		Flow$IF$HXV$: Flow
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
	JSX.runMain("examples/touchcolor/src/main.jsx", []);
}

window.addEventListener("load", $__jsx_onload);
document.addEventListener("DOMContentLoaded", $__jsx_onload);

})(JSX);
