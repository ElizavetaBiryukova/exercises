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