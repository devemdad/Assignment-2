// 1 No Question
function calculateDifference(a, b) {
    return a - b;
}
console.log(calculateDifference(10, 5));

// 2 No Question
function isOdd(x){
    if(x % 2 !==0){
        console.log(x, "is a odd number.");
    }else{
        console.log(x, "is not a odd number.");
    }
}
isOdd(12);


// 3 No Question
// function findMin(num) {
//     if (num.length === 0) {
//         throw new Error("Array cannot be empty");
//     }
//     return Math.min(...num);
// }

// console.log(findMin([17, 10, 35, 8, 25]));


// Or
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
console.log(findMin([20, 3, 12, 25, 18]));



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