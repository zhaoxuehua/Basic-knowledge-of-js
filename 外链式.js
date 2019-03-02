//输出信息的五种方法
alert("在页面弹出一个对话框");
confirm("在页面弹出对话框，多了取消按钮");
console.log("将消息打印到控制台");
prompt("弹出对话框，用于接收用户的消息");
document.write("在页面输出消息，对html标签也起作用");

//交换两个变量a b步骤
//1、定义中间变量var temp，先把a存储到中间变量中去temp=a;
//2、把b付给a
//3、中间变量付给b;
var a = 1;
var b = 2;
console.log(a);
console.log(b);
var temp;
temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);

//交换两个数值型变量a b，不可以用中间变量
//步骤  求两个数的和，然后减去其中一个交换给另一个
var a = 10;
var b = 20;
alert("a:" + a + "---" + "b:" + b);
a = a + b;
b = a - b;
a = a - b;//减去ab都可以，因为此时ab放的都是a的值
alert("a:" + a + "---" + "b:" + b);

//数据类型学习
var str = "abc";//string类型,单双引号都可以，单引里面允许放双引，双引里面可以放单引
var num = 112; //number类型
var bool = true;//boolean类型
var bbb = null;//变量未引用
var aaa;//undefined类型
console.log("\\" + typeof (str));//对于字符串来说+是连接符
console.log(typeof (num));
console.log(typeof (bbb));
console.log(typeof (aaa));
console.log(typeof (bool));

//数据类型的转换 
//1、数字类型转字符串
var n1 = 2;
var n2 = String(n1);//或n2=n1.toString();
console.log(n2);
console.log(typeof (n2));
//字符串转换成数字类型 Number   parstInt一遇非数字就识别了，值为识别的数字值，非数字开头NaN,取整 parstFloat小数也可识别保留
var n3 = "123";
var n4 = Number(n3);
console.log(n4);
console.log(typeof (n4));
//转Boolean类型 数字字符串转换后boolean的值为true，undefinde/null转换后值为flase
var n5 = 67;
var n6 = Boolean(n5);
console.log(n6);
console.log(typeof (n6));
//隐式数据转换，在运算过程中转换

//选择结构if switch 练习
//一、需求，输入名人，弹出他所参演的电视剧
//1 页面输出，后台获取
//2 判断输出的人物是谁，并给出电视剧
//3 如果没有这个人，弹框警示
var str = prompt("请输入一位名人：");
if (str == "陈道明") {
    alert("陈老师参演的电视有《康熙王朝》《》");
}
else if (str = "杨幂") {
    alert("杨幂参演过得电视有：《宫》《古剑奇谭》");

}
else if (str = "钟汉良") {
    alert("钟汉良参演过得电视有《来不及说我爱你》《凉生，可不可以不忧伤》");

}
else {
    alert("没有这个人");

}

//二、需求:弹框显示今天是星期几（大写的）
var date = new Date();
alert(date.getDay());//礼拜日给我们的值将是0
var numb = date.getDay();
switch (numb) {
    case 1:
        alert("星期一");
        break;
    case 2:
        alert("星期二");
        break;
    case 3:
        alert("星期三");
        break;
    case 4:
        alert("星期四");
        break;
    case 5:
        alert("星期五");
        break;
    case 6:
        alert("星期六");
        break;
    case 0:
        alert("星期日");
        break;
}

//三、把百分制转化成优良中可差
//思路1：获取值，然后判断在那个范围之间
//思路2（）难点：获取值，然后除以10取整==10满分  ==9优秀 ......
var numc = prompt("请输入百分制成绩");
var numd = parseInt(numc / 10);
switch (numd) {
    case 10:
        alert("满分");
        break;
    case 9:
        alert("优秀");
        break;
    case 8:
        alert("良");
        break;
    case 7:
        alert("中");
        break;
    case 6:
        alert("可");
        break;
    default:
        alert("差");
}

//循环结构练习
//for循环案例
//1、打印1-100
for (var i = 1; i <= 100; i++) {
    console.log(i);
}
//2、打印1-100的和
var sum = 0;
for (var j = 1; j <= 100; j++) {
    sum = sum + j;
}
console.log(sum);
var avg = sum / 100;
console.log(avg);
//3、求1-100之间所有偶数的和，所有奇数的和
var sumOdd = 0;
var sumEven = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) { sumEven += i; }
    else { sumOdd += i; }
}
console.log(sumOdd);
console.log(sumEven);
//本金10000元存入银行，年利率是千分之三，每过一年，将本金和利率相加作为新的本金，计算5年后的本息和。
var money = 10000;
for (var i = 1; i <= 5; i++) {
    money = money + money * 0.003;
}
console.log(money);
//有人想知道，一年之内一对兔子能繁殖多少对？于是就把一对兔子用围墙围了起来！已知每对兔子每个月可以生一对小兔子，而
//一对兔子从出生后3个月起每月生一对小兔子，假如一年内没有发生死亡现象，那么一对兔子一年内（12月）能繁殖多少对
//兔子的规律为数列1,1,2,3,5,8,13，21
//需求：求菲波那切数列的第12项是多少
var n1 = 1;
var n2 = 1;
var t = 0;
for (var i = 3; i <= 12; i++) {
    t = n2;//先把第二个值存起来
    n2 = n2 + n1;//每次跟新的新和值
    n1 = t;//新的n1值
    console.log(n2);
}
//利用table标签输入99乘法表，之前直接输出，利用tr td 不用换行
document.write("<table border=''1'>");
for (var i = 1; i <= 9; i++) {
    document.write("<tr>");
    for (var j = 1; j <= i; j++) {
        document.write("<td>");
        document.write(j + "*" + i + "=" + j * i);//td里面输出值
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

//死循环案例 程序员求婚.点击取消一直弹框
do {
    var bool = confirm("求求你了，嫁给我了，我很丑，但很温柔");
    if (bool) {
        alert("我们去三亚拍结婚照把");
    }
    //如果点击取消bool值为flase,为了让他进去下次循环，把它变为true继续循环
}
while (!bool)


//数组的定义//方法一
var array = [1, 2, 3];
//方法二，对象创建
var array1 = new Array();//空数组
console.log(array1);

//数组的遍历
var array3 = ["h", "f", "i", "y"];
for (var i = 0; i <= 3; i++) {
    alert(array3[i]);
}

//将字符串用|或其他字符分割
var arr = ["吕超", "赵云", "关羽", "张飞", "马超"];
var str = arr[0]; //为了避免第一个名字有竖线，第一个单独给
for (var i = 1; i < arr.length; i++) {
    str += "|" + arr[i];
}
console.log(str);

//翻转数组
//法一：思路将旧的数组倒序赋值给新数组
var arr = [1, 2, 3, 4, 5];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    newArr[newArr.length] = arr[arr.length - 1 - i];
}
console.log(newArr);
//法二：将原数组第一位与最后一位互换，依次类推
var arr = ["zhao", "ma", "li", "wang"];
for (var i = 0; i < arr.length / 2; i++) {//需改掉循环次数，否则又会换回来，执行一半即可
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];//前面项和对应的后面项交换位置
    arr[arr.length - 1 - i] = temp;
}
console.log(arr);


//求圆的周长和面积，面积的话直接pi*r*r
var pi = 3.1415;
function long(r) {
    return 2 * pi * r;
}
alert(long(5));
//求两个数中的最大值  也可以使用三元运算符
function max(a, b) {
    if (a < b) {
        a = b;
    }
    else { }
    return a;
}
console.log(max(4, 5));
//求三个数中的最大值可以用三元运算符,需要一个中间变量  d=a>b?a:b; return d>c?d:c;
function aMax(a, b, c) {
    if (a > b) {
        if (a > c) {
            return a;
        }
        else {
            return c;
        }
    }
    else {
        if (b > c) {
            return b;
        }
        else {
            return c;
        }
    }
}
console.log(aMax(1, 5, 9));

//创建函数学习
//求一组数中的最大值最小值
var shuZu = [-3, -2, -1, 0, 1, 2, 3];
function getMax(array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max)
            max = array[i];
    }
    return max;
}
alert(getMax(shuZu));

var shuZumMin = [-3, -2, -1, 0, 1, 2, 3];
function getMin(array) {
    var min = array[0];//把数组中的第一位默认为最小值
    for (var i = 1; i < array.length; i++) {
        if (array[i] < min)
            min = array[i];
    }
    return min;
}
alert(getMin(shuZumMin));

//求阶乘
function getJC(num) {
    var sumJC = 1;
    for (var i = 1; i <= num; i++) {
        sumJC *= i;
    }
    return sumJC;
}
console.log(getJC(100));
//求各个阶乘的和，调用刚写的阶乘函数 sum+=getJC(i);
function getJCH(number) {
    var sum = 0;
    for (var i = 1; i <= number; i++) {
        sum += getJC(i)
    }
    return sum;
}
console.log(getJCH(3));
//判断一个数是否为素数
function isPrime(num) {
    //不用去除1和它本身
    for (var i = 2; i < num; i++) {
        if (num % i == 0) { return "flase"; }//只要有一个可以被整除就可以判断出不是素数  
        else { }
    }
    return "true";//一定写在外面，让除所有i之后再给出结论
}
alert(isPrime);//可以打印整个函数体


function hanShu(m) {
    var sum0 = 111;//局部变量，外面访问不到
}


// var vrr = [8, 6, 7, 1, 0, 5];
// var temp;
// for (var i = 0; i < vrr.length - 1; i++) {
//     for (var j = 0; j < vrr.length - 1; j++) {
//         if (vrr[j] > vrr[j + 1]) {
//             temp = vrr[j];
//             vrr[j] = vrr[j + 1];
//             vrr[j + 1] = temp;
//         }
//     }
// }
// console.log(vrr);

//输入某年某月某日，判断这一天是这一年的第几天（注意闰年平年）
//步骤1 判断是不是闰年
function isRN(year) {
    if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) { return true; }
    else { return flase; }//有返回值是为了后面判断是不是闰年
}
//步骤1 求天数（把每月天数组成数组，不是闰年。 如果是闰年且超过2月，直接天数加1 ）
//因为年月日是变化的，所以将其变成参数
function getDays(year, month, day) {
    var arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //把输入的月份之前的天数放到day中，不包括本月 下面把月份当成索引值，所以减一
    //算天数
    for (var i = 0; i < month - 1; i++) {
        day = day + arr[i];
    }
    //若闰年且超过2月则算好的天数加一
    if (month > 2 && isRN(year)) {
        day += 1;
    }
    return day;//算好的天数返回外部使用
}
console.log(getDays(2016, 3, 8));

//函数高级学习
//匿名函数,加小括号
(function () {
    console.log(1);
})
    //匿名函数调用
    //法一直接调用
    (function () {
        console.log(1);
    })();
//法二事件绑定
document.onclick = function () { alert(1); }
//法三定时器
setInterval(function () { console.log(); });

//定义单个对象
var student = new object();
student.name = "张三";
student.sayhi = function () {
    console.log(this.name + "说：大家好！");
}
//用函数定义多个对象,对不同的name 都可以调用
function createstudent(name) {
    var student = new object();
    student.name = name;
    student.sayhi = function () {
        console.log(this.name + "说：大家好！");
    }
}
//用递归法求1-100的和
alert(getSum(100));
function getSum(n) {
    //递归必须有跳出条件，否则就是死循环
    if (n < 1) {
        return 0;
    }
    return n + getSum(n - 1);
}
//回调函数，函数最为参数进行传递和使用
//对象字面量.用{}，里面的属性和方法一：形式表现
//案例练习，制作一个案例然后遍历
var json = {};
for (i = 1; i < 10; i++) {

}

//数组加强学习
//数组的翻转与排序
var arr = ["d", "c", "b", "a"];
console.log(arr.reverse());
//数组的排序
console.log(arr.sort());
//数组的连接,返回新的数组
var arr1 = [1, 2, 3];
var arr2 = ["a", "b"];
var arr3 = arr1.concat(arr2);
//数组的截取
var arr5 = arr1.slice(1);//从哪个索引值开始截取
//数组的替换splice()
//给元素查索引 indexOf()

//数组的迭代方法 function(item,index,array)
//every()他的返回值是布尔类型，所有参数都满足条件，返回值才是true，否则为flase
var arr7=[1,5,7,7];
var arr8=arr7.every(function(item,index,array){
    //条件元素都满足则为true
});
//some()有一项为true，结果就为true
//filter()返回值是一个新数组
//map()返回该函数结果组成的新数组
//forEach()遍历数组，无返回值
