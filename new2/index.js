function Otaku(name,age) {
    this.name = name;
    this.age = age;
    this.habit = 'Games';
}
Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function() {
    console.log('I am' +this.name);
}

// const person = new Otaku('haixin', 18);
// person.sayYourName();


// 1 要返回一个新的对象
// 2 访问到Otaku 构造函数的属性
// 3 访问到Otaku.prototype中的属性或方法

var person = objectFactory(Otaku, '鸠摩智', 50);
person.sayYourName();

// 参数一是类,后几个参数...
// js函数参数异常灵活，数量可以不定，甚至可以不给，还有... reset 运算符整合起来，都会跟arguments结合起来
function objectFactory() {
    // console.log(arguments);

    // 肢解动作？ 第一项，
    // 其余的就是参数
    // [] shift 方法将第一项弹出
    // var constructor = arguments[0];
    // var args = arguments.filter(function(x) {
    //    return x!==0;
    // })
    // console.log(constructor)
    // console.log(args)


    // const Constructor = Array.from(arguments);将伪数组转化成数组
    var Constructor = [].shift.call(arguments);
    console.log(Constructor,arguments);
    var obj = new Object();//构建一个新对象(空的)
    console.log(obj);
    obj.__proto__ = Constructor.prototype;
    // 2. 构造函数上this属性, 参数要传进去， 要赋值 this要指向当前对象
    // 在apply内部手动指定函数执行时的this
    Constructor.apply(obj, arguments)
    return obj;
    
}