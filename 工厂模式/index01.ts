// 工厂方法模式 --多态工厂模式 所有的工厂具体都有同一抽象父类
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

//抽象工厂类 也可以是接口
interface TVFactory {
    creatTV(): any;
}

// 海尔工厂具体实现类
class HaierTVFactory implements TVFactory {
    creatTV(): any {
        return new HaierTV();
    }
}
//海信工厂具体实现类
class HisenseTVFactory implements TVFactory {
    creatTV(): any {
        return new HisenseTV();
    }
}

let haier = new HaierTVFactory();
haier.creatTV().play();

let hisense = new HisenseTVFactory();
hisense.creatTV().play();

// 这个和简单工厂有区别，简单工厂模式只有一个工厂，工厂方法模式对每一个产品都有相应的工厂，
// 当产品种类非常多时，会出现大量的与之对应的工厂对象，这不是我们所希望的。

// 好处：1.增加一个产品类，只需要增加产品类和相对应的工厂，两个类，不需要修改工厂类。（复合开闭原则）
//      2. 使用者只需要关心所需要产品的工厂，无需要创建的一些细节
// 缺点：1.添加新产品时。需要编写新的具体产品类，还需要提供对应的具体工厂类，系统类成倍
//       增加，在一定的程度上增加了系统的复杂度，也给系统带来了额外的开销。
