class Parent{
    constructor(a,b) {
       this.a = a;
       this.b = b;

    }
    add(){
        console.log(this.a + this.b); //加法
    }
    other(){
        console.log("我是一个抽象方法")
    }

}

class Child extends Parent{
    constructor(a,b) {
        super(a,b); //引用父类的属性
    }
    sub(){
        console.log(this.a - this.b); //减法
    }
    other(){
        console.log(this.a * this.b); //乘法
    }
}
let child = new Child(5,4);
child.sub();