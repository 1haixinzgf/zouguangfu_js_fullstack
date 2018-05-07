// es6 class关键字新增
//+ 可以number化 toString能够转化成字符串
//es6 中可以给参数默认值
//try catch 容错
class RandomHongBao{
    constructor(num){
        // check
        this.num=this.getNum(num);
        // 得到一确定的小数的位数

        try{
            this.multiple = this.num.toString().split(".")[1].length;//添加属性
            
        }catch(e){
            this.multiple = 0;
        }
        //将小数放大指数倍成整数，小数的个数
        this.calcNum = this.num*Math.pow(10,this.multiple);
        // console.log(this.num.toString().split("."));
    }
    split(n, precision) {
        // this.num 原金额
        // this.calcNum 如果小数，就放大的金额
        // 总金额先偷偷的等分一下
        // n 人数 []{n} this.calcNum/n
        let arr = this.average(n,precision);
        // console.log(arr)
        // console.log(arr);
        // 随机性   三人为一单位 产生几次随机 把钱分给左右的人，环 数据结构 链表
        let arrResult=arr;
        console.log(arrResult)
        for(let i=0;i<arr.length;i++){
            let item =arr[i];
            // console.log(item)
            let num = Math.floor(Math.random()*item);
            // console.log(num)
            let numLeft = Math.floor(Math.random()*num)
            console.log(numLeft)
            let numRight=num-numLeft;
            console.log(num, numLeft, numRight)
            arrResult[i] -= num;
            let iLeft=i===0?(arr.length-1):i-1;
            let iRight =(i===arr.length-1)?0:i+1;
            arrResult[iLeft]+=numLeft;
            arrResult[iRight]+=numRight;
        }
        return arrResult;
    }
    getNum(num,defaultNum=0) {//参数默认值
        return this.isNumber(num)?num:defaultNum;//三元预算符
    }
    average(n,precision){
        let avg=Math.floor(this.calcNum / n);

        let rest=this.calcNum % n;//求余
        // console.log(rest); rest +avg*num=this.calcNum
        let result=  Array(n).fill(avg);
        //多余的钱填充的间隔问题  多少个人发一次一块
        let gap =Math.round((n-rest)/rest)+1;
        let index = 0; 
        while(rest>0){
            index=(--rest)*gap;
            result[index>=n?(n-1):index]++;
        }
        //怎么将剩下的rest平分给数组
        // 把多的钱 一块块的去分    rest--
        // 放大后，分的平均值，回到放大前
        // 放大完的所有值，回到放大前，金额没问题
        return result.map((item)=>{
            return (item / Math.pow(10,this.multiple));
        })
    }
    isNumber(num){
        //排除各种可能出问题的，
        let number= +num;//(number 化）  +num的意义
        if((number - num)!==0){
            return false;
        }
        if(number === num){
            return true;
        }
        // console.log(typeof number); Nan的typeof是number
        if (typeof num == 'string'){
            return false;
        
        }
        
        return true;
    }

}

// 200=>总金额
// split 分 26 人数 红包金额的精确值2
const hongbao= new RandomHongBao(100.22);
// hongbao.split(26,2);
console.log(hongbao.split(10,2))



