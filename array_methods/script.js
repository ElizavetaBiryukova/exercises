'use strict';

//filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter((name) => {
    return name.length < 5;
});

console.log(shortNames);