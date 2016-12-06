/**
 * Created by ZhangJikai on 2016/12/3.
 */
(function () {
    cce.EventTarget = function () {

        this._listeners = {};
        this.inBounds = false;

    };

    cce.EventTarget.prototype = {
        constructor: cce.EventTarget,

        // 查看某个事件是否有监听
        hasListener: function (type) {
            if (this._listeners.hasOwnProperty(type)) {
                return true;
            } else {
                return false;
            }
        },

        // 为事件添加监听函数
        addListener: function (type, listener) {
            if (!this._listeners.hasOwnProperty(type)) {
                this._listeners[type] = [];
            }

            this._listeners[type].push(listener);
            cce.EventManager.addTarget(type, this);
        },

        // 触发事件
        fire: function (type, event) {
            if (event == null || event.type == null) {
                return;
            }

            if (this._listeners[event.type] instanceof Array) {
                var listeners = this._listeners[event.type];
                for (var i = 0, len = listeners.length; i < len; i++) {
                    listeners[i].call(this, event);
                }
            }
        },

        // 如果listener 为null，则清除当前事件下的全部事件监听
        removeListener: function (type, listener) {
            if (listener == null) {
                if (this._listeners.hasOwnProperty(type)) {
                    this._listeners[type] = [];
                    cce.EventManager.removeTarget(type, this);
                }
            }

            if (this._listeners[type] instanceof Array) {
                var listeners = this._listeners[type];
                for (var i = 0, len = listeners.length; i < len; i++) {
                    if (listeners[i] === listener) {
                        listeners.splice(i, 1);
                        if (listeners.length == 0)
                            cce.EventManager.removeTarget(type, this);
                        break;
                    }
                }
            }

        }
    };
}());