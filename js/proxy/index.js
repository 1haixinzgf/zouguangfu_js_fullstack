// 小明表白的故事
// 小明 talk in js
// js具有强大的表现力
// js是弱类型语言 Java静态强类型语言
// js 基础类型 字符串 数字 
// 对象{}  array function``
// bool 布尔值 false null 为空  undefined
// 六大基本类型   1个复杂类型

var xiaoming={
    name:'小明',
    age:21,
    hasGirlFriend:false,
    job:null,
    city:undefined,
    // 方法 行为
    sendFlower: function(target){
       // 1 买花

       var Flower = function(type){
    this.type=type || '玫瑰'
}
xiaoming.sendFlower(xiaoxue);

        var flower =new Flower('满天星');
        if(typeof target.receiveFlower == 'function')
        target.receiveFlower(flower,this.name);
        else
        console.log('拿到名企前是不可能谈恋爱的');
    }
}

// 具有详述性，创造简单的对象
var xiaomei={
    name:'小梅',
    room:'9栋2201',
    hometown:'九江',
    age:10,
    hasBoyFriend:true,
    job:null,
    city:'beijing',

    receiveFlower: function(flower,name){
        console.log('收到'+name+'送到'+flower.type);
    },

// 监听好心情
/*
  *  功能：提供心情监听
  * 参数： fn 类型函数
  * 在一段时间后，心情好了，将fn执行
*/
    listenGoodMood: function(fn){
        setTimeout(function(){
            fn();
        },10000)
    //    typeof fn==='function'
    //     fn();
    }

}
// 空的对象字面量
var xueba={

}
 var xiaoxue={
     name:'小雪',
     age:12,
     receiveFlower:function(flower,name){
         if(name=='小明'){
             xiaomei.listenGoodMood(function(){
            xiaomei.receiveFlower(flower,name);
             })// 匿名函数
        //      console.log('让我们在一起吧')
        //  }
        //  else{
        // 
        //  实现的同样的收花方法， receiveFlower是接口 interface
        //  小雪，小梅都实现了同样的方法，实现了相同的接口
        //  实现了相同的接口，就可以互换对象
         
     }
    }}
// 类大写 对象小写
var Flower = function(type){
    this.type=type || '玫瑰'
}
xiaoming.sendFlower(xiaoxue);
