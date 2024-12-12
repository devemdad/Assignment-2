// 1 No Question
function calculateDifference(p, q) {
    return p - q;
}
console.log(calculateDifference(10, 5));


// 2 No Question
function isOdd(x){
    if(x % 2 !==0){
        return true;
    }else{
        return false;
    }
}
console.log(isOdd(11));


// 3 No Question
function findMin(num){
    let min = num[0];
    for(let i = 0; i < num.length; i++){
        let element = num[i];
        if(element < min){
            min = element;
        }
    }
    return min;
}
console.log(findMin([20, 3, 12, 25, 2, 18]));


// 4 No Question
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

const numbersArray = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbersArray);
console.log(evenNumbers);


// 5 No Question
function sortArrayDescending(numbers) {
    return numbers.slice().sort((a, b) => b - a);
}

const numbersArray1 = [5, 3, 8, 1, 2];
const sortedArray = sortArrayDescending(numbersArray1);
console.log(sortedArray);


// 6 No Question
function lowercaseFirstLetter(str) {
    if (!str) {
        return str;
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
}

console.log(lowercaseFirstLetter("TIPU"));


// 7 No Question
function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

const arr = [10, 20, 30, 40, 50];
const average = findAverage(arr);
console.log("Average:", average);