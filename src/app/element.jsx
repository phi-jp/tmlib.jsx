/*
 *
 */

import "../event/eventdispatcher.jsx" into tm;

/**
 * element class
 */
class Element extends tm.EventDispatcher {
    var parent = null: Element;
    var children: Element[];
//    var update = null: function(app: variant): void;
    
    /**
     * constructor
     */
    function constructor() {
        this.children = []: Element[];
    }
    
    function addChild(child: Element): Element {
        this.children.push(child);

        child.parent = this;

        return this;
    }

    function addChildTo(parent: Element): Element {
        parent.addChild(this);

        return this;
    }

    function remove(): Element {
        this.parent.removeChild(this);

        return this;
    }

    function removeChild(child: Element): Element {
        var index = this.children.indexOf(child);

        if (index != -1) {
            this.children.splice(index, 1);
            child.parent = null;
        }
        
        return this;
    }
    
    function update(app: variant): void {
        
    }
    
    function _update(app: variant): void {
        this.update(app);

        if (this.contains("enterframe")) {
            var e = new tm.Event("enterframe");
            this.fire(e);
        }

        if (this.children.length > 0) {
            this.children.forEach((elm) -> {
                elm._update(app);
            });
        }
    }
}

