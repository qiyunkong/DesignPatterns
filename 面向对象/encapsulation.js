var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var People = /** @class */ (function () {
    function People(name, age) {
        // 实例属性
        this.name = name;
        this.age = age;
    }
    People.prototype.say = function () {
        //void 没有返回值
        console.log("我会说话！");
    };
    return People;
}());
// 子类继承父类
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, num) {
        var _this = _super.call(this, name, age) || this;
        _this.num = num;
        return _this;
    }
    Student.prototype.study = function () {
        console.log("\u6211\u7684\u540D\u5B57\u53EB" + this.name + ",\u5E74\u9F84\u662F" + this.age);
    };
    return Student;
}(People));
var stuA = new Student("李强", 5, "A1");
stuA.study();
console.log(stuA.num);
