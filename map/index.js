const dogs = new Map();//对象集合 
dogs.set('Snickers',3);
dogs.set('Sunny',2);
dogs.set('Hugo',10);
dogs.set('Hugo',11);

dogs.forEach((val,key) => console.log(val,key));


// 可以迭代的都可以使用for of
for( const [key,val] of dogs) {
    console.log(key,val);
}

let a =1;
let b =2;
//解构
[a,b] = [b,a];
console.log(a,b);