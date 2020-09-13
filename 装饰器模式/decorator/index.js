//1.类的装饰器
//@名字 是装饰器 装饰器不一定是一个
@testDecrator
class ClassA{
    fn(){
        console.log("1111");
    }

}


//装饰器函数 target是对象
function testDecrator(target){
    target.adder = "我是一个静态属性！";
    target.prototype.test = "我是实例属性";
    //会覆盖实例的方法
    target.prototype.fn = function () {
        console.log("我是一个方法");
    }
}
console.log(ClassA.adder)
let a = new ClassA();
console.log(a.test);
a.fn();

@mainDecrator("'类class")
class ClassB{}
function  mainDecrator(parm) {
    //构成一个闭包
    return function (target) {
        target.adder = "我是一个静态属性！";
        target.prototype.test = parm;
        target.prototype.fn = function () {
            console.log(parm + "我是一个方法");
        }
    }
}
console.log(ClassA.adder);
let a = new ClassA();
console.log(a.test);
a.fn();

//修饰类的方法
class ClassC{
    @descriptor
    fn(){
        console.log("我是一个方法");
    }
}
//target 对象  name 名称 decriptor 是否描述
function readonly(target,name,descriptor) {
    //默认对象
    // descriptor = {
    //     value:'hello',
    //     writable:true,
    //     enumerable:true,
    //     configurable:true
    // }
    descriptor.writable = true
    return descriptor;
}

let b = new ClassC();
b.fn = function () {
    console.log("22222")
}
b.fn();
