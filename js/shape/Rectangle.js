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
    };

    cce.Rectangle.prototype = Object.create(cce.DisplayObject.prototype);
    cce.Rectangle.prototype.constructor = cce.Rectangle;

    cce.Rectangle.prototype.draw = function () {
        this.context.strokeRect(this.x, this.y, this.width, this.height);
        this.context.stroke();
    };

    cce.Rectangle.prototype.compareTo = function (target) {
        if (target.x == null) {
            return null;
        }
        if (this.x < target.x) {
            return -1;
        }
        if (this.x == target.x) {
            return 0;
        }
        if (this.x > target.x) {
            return 1;
        }
        return null;
    };

    cce.DisplayObject.prototype.comparePointX = function (point) {
        return this.compareTo(point);
    };

    cce.Rectangle.prototype.hasPoint = function (target) {
        if (this.x == null || this.y == null || this.width == null || this.height == null) {
            return false;
        }
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