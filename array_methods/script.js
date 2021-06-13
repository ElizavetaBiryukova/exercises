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

console.log(some.every(item => typeof(item) === 'number'));
