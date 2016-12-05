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
        this.canvas = null;
        this.context = null;

    };

    cce.Rectangle.prototype = Object.create(cce.DisplayObject.prototype);
    cce.Rectangle.prototype.constructor = cce.Rectangle;

    cce.Rectangle.prototype.draw = function () {
        this.context.fillRect(this.x, this.y, this.width, this.height);
    };


}());