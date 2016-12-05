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
                result = ele.compareToKey(data);
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

        search: function (point) {
            var d;
            this.selectedElements.length = 0;
            this.unSelectedElements.length = 0;


            for (var i = 0; i < this._data.length; i++) {
                d = this._data[i];
                if (d.compareToKey(point) > 0) {
                    //console.log(d);
                    //console.log(111);
                    break;
                }

                if (d.compareTo(point)) {
                    this.selectedElements.push(d);
                } else {
                    this.unSelectedElements.push(d);
                }
            }

            for (; i < this._data.length; i++) {
                d = this._data[i];
                this.unSelectedElements.push(d);
            }
            //return this.selected;
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
        }


    };
}());