//interface 定义一个接口
interface Animal {
    eat(): void;
    sleep(): void;
}
//爬
interface Crawl {
    crawl(): void;
}
//跑
interface Run {
    run(): void;
}

//会跑的动物实现接口
class RunAnimal implements Animal, Run {
    eat(): void {
        console.log("我会吃！");
    }
    sleep(): void {
        console.log("我会睡觉！");
    }
    run(): void {
        console.log("我会跑！");
    }
}
let rabit = new RunAnimal();
rabit.eat();
rabit.sleep();
rabit.run();