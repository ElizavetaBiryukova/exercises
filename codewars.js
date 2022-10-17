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

// console.log(descendingOrder(500));

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, 
// neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    let string = str.replaceAll(/[aeiou]/gi, "");
    return string;
}

// console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));

// Complete the solution so that it returns true if the first argument(string)
//  passed in ends with the 2nd argument (also a string).
function solution(str, ending) {
    return str.endsWith(ending);

}

// console.log(solution('kgkg', 'g'));

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwo
// rk has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0;
    } else {
        return n * m;
    }
}

// You are going to be given a word. Your job is to 
// return the middle character of the word. If the word's 
// length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
    let number = s.length / 2;
    let res;
    if (s.length % 2 == 0) {
        res = s.slice(number - 1, number + 1);
        return res;
    } else {
        res = s.slice(Math.floor(number), Math.floor(number) + 1);
        return res;
    }
}

// console.log(getMiddle("middle"));

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    let numbersArr = x.map((e) => Number(e));
    
    numbersArr.forEach;
    }

    console.log(sumMix([9, 3, '7', '3']));