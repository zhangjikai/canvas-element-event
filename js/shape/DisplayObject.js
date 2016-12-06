/**
 * Created by ZhangJikai on 2016/12/3.
 */

(function () {
    cce.DisplayObject = function () {
        cce.EventTarget.call(this);
        this.canvas = null;
        this.context = null;

    };

    cce.DisplayObject.prototype = Object.create(cce.EventTarget.prototype);
    cce.DisplayObject.prototype.constructor = cce.DisplayObject;

    cce.DisplayObject.prototype.compareTo = function (target) {
        return null;
    };

    cce.DisplayObject.prototype.comparePointX = function (point) {
        return null;
    };

    cce.DisplayObject.prototype.hasPoint = function (point) {
        return false;
    };

}());