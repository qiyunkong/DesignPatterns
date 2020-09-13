class ClassA{
    fn(){
        console.log("我是ClassA的方法")

    }
}

ClassA.prototype.fn = function () {
    console.log("我是prototype的方法")
}

let a = new ClassA();
a.fn();