/**
 * Created by ZhangJikai on 2016/12/3.
 */
(function () {
    cce.Event = function (x, y, type, target) {
        this.x = x || -1;
        this.y = y || -1;
        this.type = type || null;
        this.target = target || null;
    };
}());

