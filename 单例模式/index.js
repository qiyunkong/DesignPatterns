//声明一个对象 （也是单例模式）
let Tool = {
    name:"xx工具",
    getType:function () {
        console.log("111")
    }
}
//调用一个对象的方法
Tool.getType();

//减少不必要的内存开销
//ES5 强制单例模式
function Demo() {
    //这个this 是实例对象的
    console.log(this);
    //Demo.unique 静态属性 不需要new 直接就可以使用
    if(Demo.unique !== undefined){
        return Demo.unique
    }
    this.name = "云空";
    this.age = "18";
    Demo.unique = this; //静态属性 保持实例对象

}
//   //静态方法
//   Demo.fn2 = function () {
//     console.log("222222222");
//   };
//   //实例方法
//   Demo.prototype.fn3 = function () {
//     console.log("33333333333333");
//   };

//实例化
var p1 = new Demo();
var p2 = new Demo();
console.log(p1===p2); //true

//ES6
class Instance{
    constructor(name, age){
        this.name = "WE";
        this.age = "28";
    }
    //静态方法
    static getInstance(){
        if(!this.instance){
            this.instance = new Instance();
        }
        return this.instance;
    }
}

let obj1 = Instance.getInstance();
let obj2 = Instance.getInstance();

console.log(obj1 === obj2);
console.log(obj2.name);