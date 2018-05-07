
// 不限定数量

// function sum(...args){//形参前面...代表可以接受多个的参数
//     // console.log(args);
//     let total =0;
//     args.forEach(i=>{
//         total += i;
//     })
//     return total;

// }
function sum(){
    // this 自动生成 函数执行的方式决定
    // arguments 所有参数
    // console.log(arguments.length);
    // 类数组，js生成的怪胎
    // Array.prototype.forEach
    let total =0;
    Array.from(arguments).forEach(i=>{//Array.form将类数组转化成一个真正的数组
        total+=i;
    })
    // for(let i=0;i<arguments.length;i++){
    //     total+=arguments[i];
    // }
    // let total =0;
    // args.forEach(i=>{
    //     total += i;
    // })
    return total;
}

console.log(sum(1,2,3,4,5,6,7,8,9));