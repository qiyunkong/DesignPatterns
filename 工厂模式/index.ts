//抽象产品类 TV 也可以是接口
//生产电视机工厂
//haier Hisense

//抽象产品类 TV
interface TV {
    play():void;
}
class HaierTv implements TV{
    play():void {
        console.log("海尔电视机播放！！！！。。。。")
    }
}
class HisenseTv implements TV{
    play():void {
        console.log("海信电视机播放！！！！。。。。")
    }
}

//工厂类
class TVFactory{
    //static 静态方法 any返回类型不确定
    static creatTV(type:string):any{
        switch (type) {
            case "Haier":
                return new HaierTv();
            case "Hisense":
                return new HisenseTv();
            default:
                break;
        }
    }
}

let haier = TVFactory.creatTV("Haier");
haier.play();

let hisense = TVFactory.creatTV("Hisense");
hisense.play();

//优点：1.使用者无需知道所创建的具体产品类的类名，只需要知道具体产品所对应的参数即可
// 对于一些复杂的类名，通过简单工厂模式可以减少使用者的记忆量
//缺点：1.工厂类的逻辑一旦不能正常的工作，整个系统都要受到影响。
// 2.简单工厂模式增加系统中类的个数，在一定程度上增加了系统的复杂度和理解难度
// 3. 如果添加了产品，就不得不修改工厂逻辑
// 4. 工厂类（静态方法）无法被继承