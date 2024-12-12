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


