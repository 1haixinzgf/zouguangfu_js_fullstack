function Person(){}
Person.prototype.name='xiaoming';
Person.prototype.city='nanchang';

Person.prototype.sayname=function(){
    console.log(this.name);
}

var 