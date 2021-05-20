// 1  Дана строка.
//  Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.

let str = 'abcd';
str = str[0].toUpperCase() + str.substr(1);
console.log(str);

// var str = 'hello';
// str = str.split('');
// str[0] = str[0].toUpperCase();
// var result = str.join('');
// console.log(result);

//2 Дана строка, например, '123456'.
//  Переверните эту строку (сделайте из нее '654321') не используя цикл. 

let a = '123456';
let result = a.split('').reverse().join('');
console.log(result);

// 3  Проверьте, что строка начинается на http://

var b = 'http://phphtml';
if (b.substr(0, 7) == 'http://') {
	console.log('Да');
} else {
	console.log('Нет');
}