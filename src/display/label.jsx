
import "console.jsx";
import "js/web.jsx";

import "../util/util.jsx";

import "canvaselement.jsx";

/**
 * Scene class
 */
class Label extends CanvasElement {
    var text = "";
    var align = "center";
    var baseline = "middle";
    var fontColor = "black";

    var _fontWeight = "";
    var _fontSize = 24;
    var _fontFamily = "'Consolas', 'Monaco', 'ＭＳ ゴシック'";
    var _fontStyle = "";

    /**
     * constructor
     */
    function constructor(text: string = "") {
        super();

        this.text = text;
        this._updateFontStyle();
    }

    function setFontWeight(weight: string): Label {
        this._fontWeight = weight;
        this._updateFontStyle();
        return this;
    }

    function setFontSize(size: number): Label {
        this._fontSize = size;
        this._updateFontStyle();
        return this;
    }

    function setFontFamily(family: string): Label {
        this._fontFamily = family;
        this._updateFontStyle();
        return this;
    }

    function _updateFontStyle(): Label {
        this._fontStyle = Util.format("{_fontWeight} {_fontSize}px {_fontFamily}", (this as variant) as Map.<variant>);

        return this;
    }
}

