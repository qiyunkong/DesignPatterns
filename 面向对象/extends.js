//人类
class People {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    say(){
        console.log(this.name + '我会说话');
    }
}
//学生类 继承 人类
class Students extends People{
    //构造器
    constructor(name,age,number) {
        super(name,age);
        this.number = number;
    }
    study(){
        console.log(this.name+"我会学！我是学号"+this.number)
    }
}
let stu  = new Students("Rex",28,"A001")
stu.study();


/*
* 继承
*   优点：抽离公共部分
*   缺点：会破坏封装的特点
*
* */