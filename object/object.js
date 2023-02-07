// const user = {};
// user.name = "John";
// user["surname"] = "Smith";
// user.name = "Pete";
// delete user.name;
// console.log(user);


// let schedule = {};

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false
//     }
//     return true
// }

// console.log(isEmpty(schedule))

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function getSumm(obj) {
    let sum = 0;
    for (let key in obj) {

        sum += obj[key];
    }

    return sum;

}

getSumm(salaries)


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {

    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }

};

multiplyNumeric(menu);
console.log(menu)