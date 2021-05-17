//Методы дат
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date
// https://learn.javascript.ru/date


const now = new Date();


console.log(now.getFullYear());
console.log(now.getMonth());

console.log(now.getDate());
console.log(now.getDay());

console.log(now.getHours());
console.log(now.getUTCHours());

console.log(now.getTimezoneOffset());
console.log(now.getTime());

console.log(now.setHours(18));
console.log(now);

console.log(now.setHours(18, 40));
console.log(now.setHours( 40));
console.log(now);


let start = new Date();
for(let i = 0; i <10000; i++) {
    let some = i ** 5;
}

let end = new Date();

console.log(`Цикл отработал за ${end - start} миллисекуд`);