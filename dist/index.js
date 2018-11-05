"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClassTest = function () {
    function ClassTest() {
        _classCallCheck(this, ClassTest);

        console.log("我创建啦");
    }

    _createClass(ClassTest, [{
        key: "fun1",
        value: function fun1() {
            console.log("test");
        }
    }], [{
        key: "fun2",
        value: function fun2() {
            console.log("fun3");
        }
    }]);

    return ClassTest;
}();

new ClassTest().fun1();
ClassTest.fun2();
//# sourceMappingURL=index.js.map