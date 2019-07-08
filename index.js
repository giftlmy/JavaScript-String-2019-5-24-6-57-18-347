// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
name=name.toUpperCase()
alert(name);
// TODO write your code here...


// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
function test1(){
var sentence = 'good afternoon, mr mike.';
var arr = sentence.split(' ');
var arr1 ='';
for(var i=0;i<arr.length;i++){
  var s = arr[i].slice(0,1).toUpperCase(); 
  var h = arr[i].slice(1);
  arr[i]=s+h;
  arr1=arr1+' '+arr[i];
}
 alert(arr1);
}
//TODO write your code here...


// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
var money1 = money.substring(1);  
alert(money1);
//TODO write your code here...
