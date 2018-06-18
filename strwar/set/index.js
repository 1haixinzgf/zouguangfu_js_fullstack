let mySet = new Set();//值的集合，不重复
mySet.add(1);
mySet.add(5);
mySet.add(5);

for(const num of mySet) {//循环
    console.log(num);
}
mySet.has(3);//has查看集合内是否具有某个返回值 false
console.log(mySet.has(Math.sqrt(25)));//true
console.log(mySet.size);//集合的容量
mySet.delete(5);
mySet.has(5);
onsole.log(mySet.size);
