//不支持开放封闭原则 ES5
console.log("不支持开放封闭原则 ES5");
var makeSound = function (animal) {
    //判断对象的实例 当每次增加一个动物都需要修改
    if(animal instanceof  Duck){
        console.log("嘎嘎嘎")
    }else if(animal instanceof  Chicken){
        console.log("咯咯咯")
    }else if(animal instanceof  Dog){
        console.log("汪汪汪")
    }
}

var Duck = function () {}

var Chicken = function () {}

var Dog = function(){}

makeSound(new Duck())
makeSound(new Chicken())

//通过原型的开放封闭原则 ES5
console.log("通过原型的开放封闭原则ES5");
var speak = function (people) {
    people.sound();
}
//学生
var Student = function () {}
Student.prototype.sound = function () {
    console.log("老师好");
}
//老师
var Teacher = function () {}
Teacher.prototype.sound = function () {
    console.log("学生好");
}
speak(new Student());
//支持开放封闭原则 ES6
console.log("支持开放封闭原则 ES6");
class Animal{
    makeSound(){
        console.log("这个一个抽象方法")
    }
}
class Tiger extends Animal{
    makeSound(){
        console.log("老虎叫")
    }
}
class Pig extends Animal{
    makeSound(){
        console.log("猪叫")
    }
}
class Cat extends Animal{
    makeSound(){
        console.log("猫叫")
    }
}
let cat =  new Cat();
cat.makeSound();