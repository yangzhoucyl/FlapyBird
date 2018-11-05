'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Main = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //游戏入口,初始化游戏


var _ResourcesLoader = require('./js/base/ResourcesLoader.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = exports.Main = function () {
    function Main() {
        var _this = this;

        _classCallCheck(this, Main);

        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        var loader = _ResourcesLoader.ResourcesLoader.create();
        loader.onLoad(function (map) {
            return _this.onResourcesFirstLoaded(map);
        });
    }

    _createClass(Main, [{
        key: 'onResourcesFirstLoaded',
        value: function onResourcesFirstLoaded(map) {
            console.log(map);
        }
    }]);

    return Main;
}();
//# sourceMappingURL=Main.js.map