// 吃的抽象类
class Eat {
    go() {
        console.log("吃了一个什么");
    }
}
//实现类（细节）
class Apple extends Eat {
    go() {
        return "吃了一个苹果";
    }
}

class Banana extends Eat {
    go() {
        return "吃了一个香蕉";
    }
}

class BigApple extends Eat {
    go() {
        return "吃了十个苹果";
    }
}

//人类
class People {
    constructor(name) {
        this.name = name;
    }
    gotoEat(food) {
        console.log(this.name, food.go());
    }
}

apple = new Apple();
banana = new Banana();
bigApple = new BigApple();

peopleA = new People("小明");
peopleB = new People("很饿的大明");

peopleA.gotoEat(apple);
peopleA.gotoEat(banana);
peopleB.gotoEat(bigApple);