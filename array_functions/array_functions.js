// //1 Задача. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

// let a = ['a', 'b', 'c'],
//     b = [1, 2, 3];
// console.log(a.concat(b));

// // 2  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

// var arr = ['a', 'b', 'c'];
// arr.push(1, 2, 3);
// console.log(arr);

// // 3 Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

// let array = [1, 2, 3];
// array.reverse();
// console.log(array);

// // 4 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6

// let d = [1, 2, 3];
// d.push(4, 5, 6);
// console.log(d);


// // 5 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// let e = [1, 2, 3];
// e.unshift(4, 5, 6);
// console.log(e);

// // 6  Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

// let f = ['js', 'css', 'jq'];
// const el = f.shift();
// console.log(el);

// // 7 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

// const g = f.pop();
// console.log(g);

// // 8 Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

// let arrEl = [1, 2, 3, 4, 5];
// const h = arrEl.slice(0, 3);
// console.log(h);

// // 9 Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

// const i = arrEl.slice(3, 5);
// console.log(i);

// // 10 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// let arrayEl = ['1', '2', '3', '4', '5'];
// arrayEl.splice(1, 2);
// console.log(arrayEl);

// //  11 Дан массив [1, 2, 3, 4, 5].
// // С помощью метода splice запишите в новый массив элементы [2, 3, 4]

// let arrayElement = ['1', '2', '3', '4', '5'];
// let newArr = arrayElement.splice(1, 3);
// console.log(newArr);

// // 12 Дан массив [1, 2, 3, 4, 5].
// //  С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]

// let arraySplice = ['1', '2', '3', '4', '5'];
// arraySplice.splice(3, 0, 'a', 'b', 'c');
// console.log(arraySplice);

// // 13 Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

// const arraySort = [3, 4, 1, 2, 7];
// arraySort.sort();
// console.log(arraySort);

// // 14  Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

// var obj = {js:'test', jq: 'hello', css: 'world'};
// console.log(Object.keys(obj));

// function dataReverse(data) {
//     let size = 8; //размер подмассива
//     let subarray = []; //массив в который будет выведен результат.
//     for (let i = 0; i <Math.ceil(data.length/size); i++){
//         subarray[i] = data.slice((i*size), (i*size) + size);
//     }
//     return subarray.reverse().flat()
//     }

//     // function dataReverse(data) {
//     //     return new Array(data.length/8).fill("").map((_, i) => data.slice(i*8, (i+1)*8)).reverse().flat()
//     //     }

//     console.log(dataReverse([1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0]));

// let questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];

// const fu =(questions) => {
//     return questions.map((el) => {
//         el
//     })
// }

// console.log(fu(questions))
// var array = [["white", "goodness"]]
// const colourAssociation = array => array.map(([a,b]) => ({[a]: b}))




// console.log(colourAssociation(array));


// function strCount(obj) {
//     let arr = Object.values(obj).flat();
//     let arr2 = [];
//     arr.map((el) => {
//         if (typeof (el) == 'string') {
//             arr2.push(el);
//             // console.log(arr2)
//             return arr2.length
//         }
//     })
//     return arr2.length
// }

// function strCount(obj) {
//     if (Array.isArray(obj)) {
//         return obj.filter(i => i.constructor.name == "String").length;
//     } else {
//         let st = 0;
//         for (let subarr of Object.values(obj)) {
//             console.log(st = strCount(subarr).length)
//             // st += strCount(subarr);
//         }
//         return console.log(st);
//     }
// }

// console.log(strCount({
//     first: "1",
//     second: "2",
//     third: false,
//     fourth: ["anytime", 2, 3, 4],
//     fifth: null
// }))

// let company = { // тот же самый объект, сжатый для краткости
//     sales: [{
//         name: 'John',
//         salary: 1000
//     }, {
//         name: 'Alice',
//         salary: 600
//     }],
//     development: {
//         sites: [{
//             name: 'Peter',
//             salary: 2000
//         }, {
//             name: 'Alex',
//             salary: 1800
//         }],
//         internals: [{
//             name: 'Jack',
//             salary: 1300
//         }]
//     }
// };

// // Функция для подсчёта суммы зарплат
// function sumSalaries(department) {
//     if (Array.isArray(department)) { // случай (1)
//         return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
//     } else { // случай (2)
//         let sum = 0;
//         for (let subdep of Object.values(department)) {
//             sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
//         }
//         return sum;
//     }
// }

// console.log(sumSalaries(company)); // 6700

function strCount(obj) {
    if (obj === undefined || typeof obj != "object") return;

    let i = 0;

    for (let key of obj) {
        let c = obj[key];
       
        switch (typeof c) {
            case "object":
                i += strCount(c);
                break;
            case "string":
                i++;
                break;
        }

    }
    return i;
}



console.log(strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null
}))