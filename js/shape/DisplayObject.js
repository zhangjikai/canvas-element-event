/**
 * Created by ZhangJikai on 2016/12/3.
 */

(function () {
    cce.DisplayObject = function () {
        cce.EventTarget.call(this);
        //console.log(2222)
        this.canvas = null;
        this.context = null;


    };

    cce.DisplayObject.prototype = Object.create(cce.EventTarget.prototype);
    cce.DisplayObject.prototype.constructor = cce.DisplayObject;

    cce.DisplayObject.prototype.compareToKey = function (target) {
        if (this.x == null || target.x == null) {
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

    cce.DisplayObject.prototype.compareTo = function (target) {
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
    //console.log(cce.DisplayObject.prototype.constructor === cce.DisplayObject)
}());