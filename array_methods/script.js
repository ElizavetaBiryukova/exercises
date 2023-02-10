'use strict';

//filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(name => {
    return name.length < 5;
});

console.log(shortNames);

//map

const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => {
//     return item.toLowerCase();
// });

const result = answers.map(item => item.toLowerCase());

console.log(result);

//every/some

const some = [4, 'ddf', 'fkfk'];

//проверяем есть ли у нас хоть одно число

// console.log(some.some(item => typeof(item) === 'number'));

console.log(some.every(item => typeof (item) === 'number'));


//reduce

const arr = [4, 5, 1, 3, 2, 6];

const res = arr.reduce((sum, current) => sum + current, 3);


// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArr = Object.entries(obj)
//     .filter(item => item[1] === 'persone')
//     .map(item => item[0]);

// console.log(newArr);



// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles[Math.floor((styles.length - 1) / 2)] = "Классика";
// alert( styles.shift() );
// styles.unshift("Рэп", "Регги");

// console.log(styles)

function likes(names) {
    let str = '';
    if (names.length > 3) {
        str = `${names.slice(0, 2).join(', ')} and ${names.slice(2).length} others`
    } else if (names.length === 3) {
        str = `${names.slice(0, 2).join(', ')} and ${names.slice(2, 3).join(',')}`
    } else if (names.length === 2) {
        str = `${names.join(' and ')}`
    } else if (names.length === 1) {
        str = `${names.join('')}`
    } else {
        str = 'no one'
    }

    return `${str} like this`
}

console.log(likes(["Alex", "Jacob", "Mark", "Max"]));


function toWeirdCase(string) {

    return string.split(' ').map((word) => {

        return word.split('').map((el, i) => {
            return (i == 0 || !(i % 2)) ? el.toUpperCase() : el.toLowerCase();

        }).join('');

    }).join(' ');
}

console.log(toWeirdCase("string fgf"))



function hexFormat(number) {
    return number.length < 2 ? '0' + number : number
}

function rgb(r, g, b) {
    const rgbArray = [r, g, b];
    let hex = '';

    for (let number of rgbArray) {
        if (number < 0) {
            number = 0
        } else if (number > 255) {
            number = 255
        }
        hex = hex + hexFormat(parseInt(number, 10).toString(16).toUpperCase())

    }
    console.log(hex)
    return hex
}

console.log(rgb(173,255,47))

