var obj1 = {
    name: 'sven'
}
var obj2 = {
    name: 'anne'
}

// window.name = 'window';
var getName = function() {
    //每一个函数都有一个this  函数this 由运行时的决定  运行时的函数调用方式来决定
    console.log(`hi I am ${this.name}`);
}
// 普通函数
// this可以被指定
getName.call(obj1);
getName.apply(obj1);

//args的reset
// var func = function(a,b,c) {
//     console.log([a,b,c]);
// }
// func.apply(null,[1,2,3]);
// func.call(null,1,2,3);
