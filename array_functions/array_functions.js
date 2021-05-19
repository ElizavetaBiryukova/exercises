//1 Задача. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

let a = ['a', 'b', 'c'],
    b = [1, 2, 3];
console.log(a.concat(b));

// 2  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

var arr = ['a', 'b', 'c'];
arr.push(1, 2, 3);
console.log(arr);

// 3 Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

let array = [1, 2, 3];
array.reverse();
console.log(array);

// 4 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6

let d = [1, 2, 3];
d.push(4, 5, 6);
console.log(d);


// 5 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

let e = [1, 2, 3];
e.unshift(4, 5, 6);
console.log(e);

// 6  Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

let f = ['js', 'css', 'jq'];
const el = f.shift();
console.log(el);

// 7 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

const g = f.pop();
console.log(g);

// 8 Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

let arrEl = [1, 2, 3, 4, 5];
const h = arrEl.slice(0, 3);
console.log(h);

// 9 Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

const i = arrEl.slice(3, 5);
console.log(i);

// 10 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

let arrayEl = ['1', '2', '3', '4', '5'];
arrayEl.splice(1, 2);
console.log(arrayEl);

//  11 Дан массив [1, 2, 3, 4, 5].
// С помощью метода splice запишите в новый массив элементы [2, 3, 4]

let arrayElement = ['1', '2', '3', '4', '5'];
let newArr = arrayElement.splice(1, 3);
console.log(newArr);

// 12 Дан массив [1, 2, 3, 4, 5].
//  С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]

let arraySplice = ['1', '2', '3', '4', '5'];
arraySplice.splice(3, 0, 'a', 'b', 'c');
console.log(arraySplice);

// 13 Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

const arraySort = [3, 4, 1, 2, 7];
arraySort.sort();
console.log(arraySort);

// 14  Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

var obj = {js:'test', jq: 'hello', css: 'world'};
console.log(Object.keys(obj));