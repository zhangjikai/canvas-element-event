/**
 * Created by ZhangJikai on 2016/12/5.
 */

(function () {
        cce.Polygon = function (points) {
            cce.DisplayObject.call(this);
            this.points = points || null;
            this.minX = 0;
            if (points != null) {
                this.minX = points[0].x;
                for (var i = 0; i < points.length; i++) {
                    if (this.minX > points[i].x) {
                        this.minX = points[i].x;
                    }
                }
            }
        };

        cce.Polygon.prototype = Object.create(cce.DisplayObject.prototype);
        cce.Polygon.prototype.constructor = cce.Polygon;

        cce.Polygon.prototype.draw = function () {
            if (this.points == null) {
                return;
            }

            var i = 0;
            this.context.beginPath();

            this.context.moveTo(this.points[0].x, this.points[0].y);
            for (i = 1; i < this.points.length; i++) {

                this.context.lineTo(this.points[i].x, this.points[i].y);
            }

            this.context.closePath();
            this.context.stroke();
        };

        cce.Polygon.prototype.compareTo = function (target) {

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

        cce.Polygon.prototype.comparePointX = function (point) {

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
        }


        cce.Polygon.prototype.hasPoint = function (target) {
            if (target.x == null || target.y == null) {
                return false;
            }
            var isIn = false;

            this.context.save();
            this.context.beginPath();

            //console.log(this.points);
            this.context.moveTo(this.points[0].x, this.points[0].y);

            for (var i = 1; i < this.points.length; i++) {
                this.context.lineTo(this.points[i].x, this.points[i].y);
            }

            if (this.context.isPointInPath(target.x, target.y)) {
                isIn = true;
            }
            this.context.closePath();
            this.context.restore();
            return isIn;

        };


    }()
)
;