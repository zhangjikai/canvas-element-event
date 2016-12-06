/**
 * Created by ZhangJikai on 2016/12/3.
 */
(function () {
    cce.EventManager = new function () {
        this._targets = {};

        this.getTargets = function (type) {
            if (type == null) {
                return;
            }
            type = this._getPrefix(type);
            return this._targets[type];
        };


        this.addTarget = function (type, target) {

            if (type == null) {
                return;
            }

            type = this._getPrefix(type);

            if (!this._targets.hasOwnProperty(type)) {
                this._targets[type] = new cce.SortArray();
            }
            var array = this._targets[type];
            if (!array.contains(target)) {
                array.add(target);
            }

        };

        this.removeTarget = function (type, target) {

            if (type == null) {
                return;
            }

            type = this._getPrefix(type);

            if (!this._targets.hasOwnProperty(type)) {
                return;
            }
            var array = this._targets[type];
            array.delete(target);
        };

        // 将事件分为 mouse 和 click 两类
        this._getPrefix = function (type) {
            if (type.indexOf("mouse") != -1) {
                return "mouse";
            }

            if (type.indexOf("click") != -1) {
                return "click";
            }
            return type;
        }
    };
}());