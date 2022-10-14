// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. 
// For calculating the average point you may add your point to the given array!


function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let sum = 0;
    classPoints.forEach(value => {
        sum += value;
    });
    let average = sum / classPoints.length - 1;
    console.log(average);
    if (average > yourPoints) {
        return false;
    } else {
        return true;
    }
}

// const AR = [49, 33, 67, 98, 84, 11, 79, 83, 76, 6, 51, 38, 71, 8, 23, 13, 88, 51, 62, 26, 72, 37, 84,
//  10, 77, 99, 63, 10, 51, 33, 32, 96, 50, 8, 61, 79, 70, 71, 31, 68, 27, 92, 88, 52, 36, 66, 37, 52, 19, 49, 52];
// const point = 75;

// betterThanAverage(AR, point);

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) 
// that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

const min = function (list) {

    let result = list.reduce((prev, item) => {
        if (prev > item) {
            return item;
        } else {
            return prev;
        }
    });
    return result;
};


const max = function (list) {
    let result = list.reduce((prev, item) => {
        if (prev < item) {
            return item;
        } else {
            return prev;
        }
    });
    return result;
};


const min2 = (list) => Math.min(...list);
const max2 = (list) => Math.max(...list);

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
    if (number % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Your task is to make a function that can take any non-negative integer as
//  an argument and return it with its digits in descending 
// order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
    return Number(n.toString().split('').sort((a, b) => b - a).join(""));
}

function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''));
}

console.log(descendingOrder(500));