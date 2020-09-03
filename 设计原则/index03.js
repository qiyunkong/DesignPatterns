//会跑的动物实现接口
var RunAnimal = /** @class */ (function () {
    function RunAnimal() {
    }
    RunAnimal.prototype.eat = function () {
        console.log("我会吃！");
    };
    RunAnimal.prototype.sleep = function () {
        console.log("我会睡觉！");
    };
    RunAnimal.prototype.run = function () {
        console.log("我会跑！");
    };
    return RunAnimal;
}());
var rabit = new RunAnimal();
rabit.eat();
rabit.sleep();
rabit.run();
