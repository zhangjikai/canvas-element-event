/**
 * Created by ZhangJikai on 2016/12/3.
 */
(function () {
    cce.SortArray = function () {
        this._data = [];
        this.selectedElements = [];
        this.unSelectedElements = [];
    };

    cce.SortArray.prototype = {

        add: function (ele) {
            if (ele == null) {
                return;
            }

            var i, data, index, result;

            for (i = 0, index = 0; i < this._data.length; i++) {
                data = this._data[i];
                result = ele.compareTo(data);
                if (result == null) {
                    return;
                }
                if (result > 0) {
                    index++;
                } else {
                    break;
                }
            }

            for (i = this._data.length; i > index; i--) {
                this._data[i] = this._data[i - 1];
            }

            this._data[index] = ele;
        },

        contains: function (ele) {
            if (ele == null) {
                return false;
            }


            var i, low, mid, high;
            low = 0;
            high = this._data.length - 1;
            while (low <= high) {
                mid = parseInt((low + high) / 2);

                if (this._data[mid] == ele) {
                    return true;
                }

                if (this._data[mid].compareTo(ele) < 0) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }

            return false;
        },

        search: function (point) {
            var d;
            this.selectedElements.length = 0;
            this.unSelectedElements.length = 0;


            for (var i = 0; i < this._data.length; i++) {
                d = this._data[i];
                if (d.comparePointX(point) > 0) {
                    break;
                }

                if (d.hasPoint(point)) {
                    this.selectedElements.push(d);
                } else {
                    this.unSelectedElements.push(d);
                }
            }

            for (; i < this._data.length; i++) {
                d = this._data[i];
                this.unSelectedElements.push(d);
            }
        },

        print: function () {
            this._data.forEach(function (data) {
                console.log(data);
            })
        },

        delete: function (ele) {
            var index = -1;
            for (var i = 0; i < this._data.length; i++) {
                if (ele === this._data[i]) {
                    index = i;
                    break;
                }
            }
            this._data.splice(index, 1);
        },

        reset: function () {
            this._data.length = 0;
            this.selectedElements.length = 0;
            this.unSelectedElements.length = 0;
        }


    };
}());