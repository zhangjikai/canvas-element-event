/**
 * Created by ZhangJikai on 2016/12/3.
 */
(function () {
    cce.Container = function (canvas) {
        if (canvas == null) {
            throw Error("canvas can't be null");
        }
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");

        this._childs = [];

    };


    cce.Container.prototype = {
        constructor: cce.Container,

        addChild: function (displayObject) {
            displayObject.canvas = this.canvas;
            displayObject.context = this.context;
            this._childs.push(displayObject);
        },

        draw: function () {
            this._childs.forEach(function (child) {
                //console.log(child);
                child.draw();
            })
        },

        enableMouse: function () {
            var self = this;
            this.canvas.addEventListener("mousemove", function (event) {
                self._handleMouseMove(event, self);
            }, false);
        },

        enableClick: function () {
            var self = this;
            this.canvas.addEventListener("click", function (event) {
                self._handleClick(event, self);
            }, false);
        },

        _handleMouseMove: function (event, container) {
            // 这里传入container 主要是为了使用 _windowToCanvas函数
            var point = container._windowToCanvas(event.clientX, event.clientY);

            var array = cce.EventManager.getTargets("mouse");

            if (array != null) {
                array.search(point);
                // 鼠标所在的元素
                var selectedElements = array.selectedElements;
                // 鼠标不在的元素
                var unSelectedElements = array.unSelectedElements;
                selectedElements.forEach(function (ele) {
                    if (ele.hasListener("mousemove")) {
                        var event = new cce.Event(point.x, point.y, "mousemove", ele);
                        ele.fire("mousemove", event);
                    }

                    if (!ele.inBounds) {
                        ele.inBounds = true;
                        if (ele.hasListener("mouseover")) {
                            var event = new cce.Event(point.x, point.y, "mouseover", ele);
                            ele.fire("mouseover", event);
                        }
                    }
                });

                unSelectedElements.forEach(function (ele) {
                    if (ele.inBounds) {
                        ele.inBounds = false;
                        if (ele.hasListener("mouseout")) {
                            var event = new cce.Event(point.x, point.y, "mouseout", ele);
                            ele.fire("mouseout", event);
                        }
                    }
                });
            }
        },


        _handleClick: function (event, target) {
            var point = target._windowToCanvas(event.clientX, event.clientY);

            var array = cce.EventManager.getTargets("click");
            if (array != null) {
                array.search(point);
                var selectedElements = array.selectedElements;
                selectedElements.forEach(function (ele) {
                    if (ele.hasListener("click")) {
                        var event = new cce.Event(point.x, point.y, "click", ele);
                        ele.fire("click", event);
                    }
                });

            }
        },

        _windowToCanvas: function (x, y) {
            var bbox = this.canvas.getBoundingClientRect();
            return {
                x: x - bbox.left,
                y: y - bbox.top
            }
        }
    }
}());