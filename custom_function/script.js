// Сделайте функцию, которая возвращает куб числа. Число передается параметром.\

function cube(num) {
    return num * num * num;
}


// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

function square(num) {
    return num * num;
}

// Сделайте функцию, которая возвращает сумму двух чисел.

function sum(num1, num2) {
    return num1 + num2;
}

// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

function numbers(num1, num2, num3) {
    return (num1 - num2) / num3;
}

// Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели на русском языке.

function week(day) {
    switch (day) {
        case 1:
            return ('Понедельник');
        case 2:
            return ('Вторник');

        case 3:
            return ('Среда');

        case 4:
            return ('Четверг');

        case 5:
            return ('Пятница');

        case 6:
            return ('Суббота');

        case 7:
            return ('Воскресенье');

        default:
            return ('неверно');

    }

}

console.log(week(3));


// Сделайте функцию, которая параметрами принимает 2 числа.
//  Если эти числа равны - пусть функция вернет true, а если не равны - false.

function num(number1, number2) {
    if (number1 === number2) {
        return true;
    } else {
        return false;
    }
}

console.log(num(2, 3));

// Сделайте функцию, которая параметрами принимает 2 числа. 
// Если их сумма больше 10 - пусть функция вернет true, а если нет - false.

function numbers(number1, number2) {
    if ((number1 + number2) > 10) {
        return true;
    } else {
        return false;
    }
}

console.log(numbers(12, 3));

// Сделайте функцию, которая параметром принимает число и проверяет - 
// отрицательное оно или нет. Если отрицательное - пусть функция вернет true,
//  а если нет - false.

function number(num) {
    if (num < 0) {
        return true;
    } else {
        return false;
    }
}

console.log(number(-12));

// С помощью цикла for сформируйте строку 
// '123456789' и запишите ее в переменную str.

let str = '';
for (let i = 1; i < 10; i++) {
    str = str + i;
}
console.log(str);

// С помощью цикла for сформируйте строку 
// '987654321' и запишите ее в переменную string.

let string = '';
for (let i = 9; i > 0; i--) {
    string = string + i;
}
console.log(string);

// С помощью цикла for сформируйте строку
//  '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.
var str2 = '';
for (var i = 1; i < 10; i++) {
    str2 = str2 + i + '-';
}
console.log(str2);