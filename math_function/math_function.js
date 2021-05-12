// 1 Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b

const a = 10;
const b = 3;
let c = a % b;
console.log(c);

// 2 Даны переменные a и b. Проверьте, что a делится без остатка на b. 
// Если это так - выведите 'Делится' и результат деления, иначе выведите 
// 'Делится с остатком' и остаток от деления

if (c == 0) {
    console.log('Делится');
} else {
    console.log('Делится с отстком');
}

//3 Возведите 2 в 10 степень. Результат запишите в переменную st
const d = 2;
console.log(Math.pow(d, a));

// 4 Найдите квадратный корень из 245
console.log(Math.sqrt(245));

// 5 Дан массив с элементами 4, 2, 5, 19, 13, 0, 10.
//  Найдите квадратный корень из суммы кубов его элементов.
//   Для решения воспользуйтесь циклом for.
let result = 0;
const arr = [4, 2, 5, 19, 13, 0, 10];
for (i = 0; i < arr.length; i++) {
    result += Math.pow(arr[i], 3);

}
console.log(Math.sqrt(result));

// 6 Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
const e = Math.sqrt(379);
console.log(Math.round(e));
console.log(e.toFixed(2));
console.log(e.toFixed(3));

// 7 Найдите квадратный корень из 587. 
// Округлите результат в большую и меньшую стороны, 
// запишите результаты округления в объект с ключами 'floor' и c
const f = Math.sqrt(587);
const obj = {
    'floor': Math.ceil(f),
    'ceil': Math.floor(f),
};
console.log(obj);

// 8 Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

// 9 Выведите на экран случайное целое число от 1 до 100

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100));

// 10 Заполните массив 10-ю случайными целыми числами. 
const array = [];
for (i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}
console.log(array);

// 11 Даны переменные a и b. Найдите найдите модуль разности a и b.
//  Проверьте работу скрипта самостоятельно для различных a и b.
const g = 10;
const h = 15;
const difference = (g - h);
console.log(Math.abs(difference));

// 12 Дан массив arr. Найдите среднее арифметическое его элементов.
//  Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79
const numbers = [12, 15, 20, 25, 59, 79];
let sum = 0;
for (i =0; i<numbers.length; i++) {
    sum += numbers[i];
    resultNum = sum/ numbers.length;
}
console.log(resultNum);




