//单一职责原则
class T{
    run(animal){
        console.log(animal + "地上炮！")
    }
    breath(animal){
        //可以在这里进行判断
        console.log(animal+"呼吸空气！")
    }
}
class T1{
    run(animal){
        console.log(animal+"水里游!");
    }
    breath(animal){
        console.log(animal+"呼吸水!");
    }
}
let animal = new T();
let animal1 = new T1();
animal.breath("牛");
animal.breath("狗");

animal1.breath("鱼");
