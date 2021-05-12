// 1 Выведите столбец чисел от 1 до 50.
let i = 1;
while (i <= 50) {
    console.log(i);
    i++;
}

// 2  Дан массив с элементами [1, 2, 3, 4, 5].
//  С помощью цикла for выведите все эти элементы на экран.

const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 3 Дан массив с элементами [2, 3, 4, 5].
//  С помощью цикла for найдите произведение элементов этого массива.
let result = 1;
const arrTwo = [2, 3, 4, 5];
for (let i = 0; i < arrTwo.length; i++) {
    result = result * arrTwo[i];
    // result *= arrTwo[i];
}
console.log(result);

// 4 Дан объект obj с ключами 'Минск', 'Москва', 'Киев'
//  с элементами 'Беларусь', 'Россия', 'Украина'. 
// С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'

const obj = {
    'Минск': 'Беларусь',
    'Москва': 'Россия',
    'Киев': 'Украина',
};

for (let key in obj) {
    console.log(key + ` - это ` + obj[key]);
}

// 5 Выведите столбец чисел от 1 до 100
while (i <= 100) {
    console.log(i);
    i++;
}

// 6 Выведите столбец чисел от 11 до 33.
let a = 11;
while (a <= 33) {
    console.log(a);
    a++;
}

// 7 Выведите столбец четных чисел в промежутке от 0 до 100

for (let i = 0; i <= 100; i += 2) {

    console.log(i);
}

// 8 С помощью цикла найдите сумму чисел от 1 до 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// 9  Дан массив с элементами [1, 2, 3, 4, 5].
//  С помощью цикла for выведите все эти элементы на экран.

const arrThird = [1, 2, 3, 4, 5];
for (let i = 0; i < arrThird.length; i++) {
    console.log(arrThird[i]);
}

// 10 Дан массив с элементами [1, 2, 3, 4, 5].
//  С помощью цикла for найдите сумму элементов этого массива.
//   Запишите ее в переменную result.
let resultSum = 0;
const arrFourth = [1, 2, 3, 4, 5];
for (let i = 0; i < arrFourth.length; i++) {
    resultSum += arrFourth[i];
}
console.log(resultSum);

// 11 Дан объект obj. С помощью цикла for-in
//  выведите на экран ключи и элементы этого объекта.

let object = {
    green: 'зеленый',
    red: 'красный',
    blue: 'голубой'
};

for (let key in object) {
    console.log(key);
}

// 12 Дан объект obj с ключами Коля, Вася, Петя с элементами 
// '200', '300', '400'. С помощью цикла for-in выведите на экран строки
//  такого формата: 'Коля - зарплата 200 долларов.'

let objectSalary = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
};

for (let key in objectSalary) {
    console.log(key + ` зарплата ` + objectSalary[key] + ` долларов`);
}

// 13  Дан массив с элементами 2, 5, 9, 15, 0, 4. 
// С помощью цикла for и оператора if выведите на экран столбец 
// тех элементов массива, которые больше 3-х, но меньше 10.

const elements = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < elements.length; i++) {
    if (elements[i] > 3 && elements[i] < 10) {
        console.log(elements[i]);
    }
}

// 14 Дан массив с числами. Числа могут быть положительными и отрицательными.
//  Найдите сумму положительных элементов массива.

let sumNumbers = 0;
const numbers = [-2, 5, -6, 20, 8];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        sumNumbers += numbers[i];
    }
}
console.log(sumNumbers);

// 15 Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. 
// С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением,
//  равным 4. Если есть - выведите на экран 'Есть!' 
// и выйдите из цикла. Если нет - ничего делать не надо.

const elementsNum = [1, 2, 5, 9, 4, 13, 4, 10];
for (let i = 0; i < elementsNum.length; i++) {
    if (elementsNum[i] == 4) {
        console.log('Есть!');
    }
}

// 16 Дан массив числами, например: [10, 20, 30, 50, 235, 3000].
//  Выведите на экран только те числа из массива,
//   которые начинаются на цифру 1, 2 или 5.

const numbersEl = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < numbersEl.length; i++) {
    if (String(numbersEl[i]).startsWith("1") || String(numbersEl[i]).startsWith("2") || String(numbersEl[i]).startsWith("5")) {
        console.log(numbersEl[i]);
    }
}

// 17 Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9.
//  С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arrayNumbers.length; i++) {
    let arrayString = '-' + arrayNumbers[i];
    arrayString.toString();
    console.log(arrayString);
}

// arrayNumbers.push('');
// arrayNumbers.unshift('');
// let arrayString = arrayNumbers.join('-');
// console.log(arrayString);

// 18 Составьте массив дней недели.
//  С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
let out = document.querySelector('.out');
const days = ['пон', 'вт', 'ср', 'чт', 'пт', 'сб', 'воскр'];
for (let i = 0; i < days.length; i++) {
    out.innerHTML = `${a.slice(0, 5)},<strong>${a.slice(5, 7)}</strong>`;
}