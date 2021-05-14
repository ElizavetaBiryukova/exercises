// 1 Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.

var str = 'aaa@bbb@ccc';
alert(str.replace('@', '!')); //получим 'aaa!bbb@ccc'
var str = 'aaa@bbb@ccc';
alert(str.replace(/@/g, '!')); //получим 'aaa!bbb!ccc'