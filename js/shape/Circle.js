/**
 * Created by ZhangJikai on 2016/12/5.
 */
(function () {
    cce.Circle = function (x, y, radius) {
        cce.DisplayObject.call(this);
        this.x = x || -1;
        this.y = y || -1;
        this.radius = radius || 0;
        this.minX = this.x - this.radius;

    };

    cce.Circle.prototype = Object.create(cce.DisplayObject.prototype);
    cce.Circle.prototype.constructor = cce.Circle;

    cce.Circle.prototype.draw = function () {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, 0);
        this.context.stroke();
        this.context.closePath();
    };

    cce.Circle.prototype.compareTo = function (target) {
        if (target.minX == null) {
            return null;
        }
        if (this.minX < target.minX) {
            return -1;
        }
        if (this.minX == target.minX) {
            return 0;
        }
        if (this.minX > target.minX) {
            return 1;
        }
        return null;
    };

    cce.Circle.prototype.comparePointX = function (point) {
        if (point.x == null) {
            return null;
        }
        if (this.minX < point.x) {
            return -1;
        }
        if (this.minX == point.x) {
            return 0;
        }
        if (this.minX > point.x) {
            return 1;
        }
        return null;
    };

    cce.Circle.prototype.hasPoint = function (point) {

        if (point.x == null || point.y == null) {
            return false;
        }

        var distance = Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2) - Math.pow(this.radius, 2);

        if (distance < 0) {
            return true;
        } else {
            return false;
        }
    };

}());