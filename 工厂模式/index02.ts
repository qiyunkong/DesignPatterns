// 海尔工厂 有海尔TV 海尔空调
// 海信工厂 有海信TV 海信空调

// 抽象产品类TV 也可以是接口
interface TV {
    play(): void;
}

// 具体产品类 HaierTV
class HaierTV implements TV {
    play(): void {
        console.log("海尔电视机播放中。。。。。");
    }
}
// 具体产品类 HisenseTV
class HisenseTV implements TV {
    play(): void {
        console.log("海信电视机播放中。。。。。");
    }
}

// 抽象产品类Air(空调类) 也可以是接口
interface Air {
    change(): void;
}
// 具体产品类 HaierTV
class HaierAir implements Air {
    change(): void {
        console.log("海尔空调温度改变中。。。。。");
    }
}
// 具体产品类 HisenseTV
class HisenseAir implements Air {
    change(): void {
        console.log("海信空调温度改变中。。。。。");
    }
}

//抽象工厂类EFactory 电器类  抽象 ----》 电器抽象工厂
interface EFactory {
    creatTV(): any;
    creatAir(): any;
}

// 海尔工厂具体实现类
class HaierFactory implements EFactory {
    creatTV() {
        return new HaierTV();
    }
    creatAir() {
        return new HaierAir();
    }
}
//海信工厂具体实现类
class HisenseFactory implements EFactory {
    creatTV() {
        return new HisenseTV();
    }
    creatAir() {
        return new HisenseAir();
    }
}

let Haier = new HaierFactory();
let haier_tv = Haier.creatTV();
let haier_air = Haier.creatAir();
haier_tv.play();
haier_air.change();
// 优点
// 1.当一个产品族中的多个对象被设计成一起工作时，它能够保证客户端始终只使用同一个产品族中的对象。
// 这对一些需要根据当前环境来决定其行为的软件系统来说，是一种非常实用的设计模式。
// 2.增加新的具体工厂和产品族很方便，无须修改已有系统，符合“开闭原则”。

// 缺点
// 1.在添加新的产品对象时，难以扩展抽象工厂来生产新种类的产品，这是因为在抽象工厂角色中规定了所有可能被创建的产品集合，
// 要支持新种类的产品就意味着要对该接口进行扩展，而这将涉及到对抽象工厂角色及其所有子类的修改，显然会带来较大的不便。
// 2.开闭原则的倾斜性（增加新的工厂和产品族容易，增加新的产品等级结构麻烦）