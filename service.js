/**
 * Created by wo646 on 2016/7/3.
 */
var app = angular.module('myApp',[]);

app.service('hex',function () {
    this.c = function (x) {
        return x.toString(16);
    }
})