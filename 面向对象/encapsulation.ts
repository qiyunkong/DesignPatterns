class People {
    //protected 是受保护的 对象是非法访问的
    protected name: string;
    //默认为 public 公开的
    age: number;
    // ES6通过constructor()方法 ,构造器来实现
    constructor(name: string, age: number) {
        // 实例属性
        this.name = name;
        this.age = age;
    }
    say(): void {
        //void 没有返回值
        console.log("我会说话！");
    }
}
// 子类继承父类
class Student extends People {
    public num: string;
    constructor(name: string, age: number, num: string) {
        super(name, age);
        this.num = num;
    }
    study(): void {
        console.log(`我的名字叫${this.name},年龄是${this.age}`);
    }
}

const stuA = new Student("李强", 5, "A1");
stuA.study();
console.log("学号："+stuA.num);
console.log("年龄:"+stuA.age);
