// var o = {};//空对象字面量
// o.step = 1;

// Object.defineProperty(o, 'a', {
//     get: function() {
//         console.log('get');
//         return bValue;
//     },
//     set: function(val){
//         console.log('设置了新的值')
//         bValue = val;
//     },

// });//定义属性
// //设置值的时候触发set 得到值是触发get
// o.a = 2
// console.log(o.a);








// (function(){
//     // use strict 声明以下启用严格模式
//     'use strict';
//     // console.log(this);
//     var o = {};

// Object.defineProperty(o, 'a', {
//     value: 7,
//     // get: function() {
//     //     return 7
//     // },
//     writable: false //不可写，改变值无用
// });

// console.log(o.a);
// // o.a = 25;
// // console.log(o.a)
// })()








// var o = {};
// Object.defineProperty(o, 'a', {
//     value: 1,
//     enumerable: true//是否可枚举
// });

// Object.defineProperty(o, 'b', {
//     value: 2,
//     enumerable: false//是否可枚举
// });

// Object.defineProperty(o, 'c', {
//     value: 3,//默认设置enumerable为false
// });

// o.d = 4;
// console.log(Object.keys(o));//拿到一个对象上所有的keys
// for(let key in o) {
//     console.log(key, o[key])
// }
// console.log(o.b);
// console.log(o.c);
// console.log(o.propertyIsEnumerable('b'));//检验是否可枚举




'use strict'
var o = {};
Object.defineProperty(o, 'a',{
    configurable: false,//配置成为对象属性是否可以被删除
    get: function() {
        return 1;
    }
})
console.log(o.a);
// delete 删除运算符
// delete o.a;
console.log(o.a);







function Archiver() {
    var temperature = null;
    var archive = [];

    Object.defineProperty(this, 'temperature', {
        get: function () {
            console.log('get!');
            return temperature;
        },
        set: function (value) {
            console.log('set!')
            temperature = value;
        }
    })
    // var data = {
    //     age: 18,
    //     name: '海心',
    // }
    // for(let key in data) {
    //     Object.defineProperty(data, key, {
    //         get: function() {
    //             console.log('get!');
    //             return data[key];
    //         },
    //         set: function(newVal) {
    //             console.log('set!')
    //             // data[key] = newVal;
    //         }
    //     })
    // }
    // data.age = 20;
}

var arc = new Archiver();
arc.temperature = 35;
console.log(arc.temperature);
arc.temperature = 38;
console.log(arc.temperature);
