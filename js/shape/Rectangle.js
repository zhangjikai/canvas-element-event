/**
 * Created by ZhangJikai on 2016/12/3.
 */
(function () {
    cce.Rectangle = function (x, y, width, height) {
        cce.DisplayObject.call(this);
        this.x = x || -1;
        this.y = y || -1;
        this.width = width || 0;
        this.height = height || 0;
        this.minX = this.x;
    };

    cce.Rectangle.prototype = Object.create(cce.DisplayObject.prototype);
    cce.Rectangle.prototype.constructor = cce.Rectangle;

    cce.Rectangle.prototype.draw = function () {
        this.context.strokeRect(this.x, this.y, this.width, this.height);
        this.context.stroke();
    };

    cce.Rectangle.prototype.compareTo = function (target) {
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

    cce.DisplayObject.prototype.comparePointX = function (point) {
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

    cce.Rectangle.prototype.hasPoint = function (target) {

        if (target.x == null || target.y == null) {
            return false;
        }
        if (this.x + this.width >= target.x && this.y <= target.y && this.y + this.height >= target.y) {
            return true;
        } else {
            return false;
        }
    };

}());