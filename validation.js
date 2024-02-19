// function multiply(num1, num2) {
//     if(typeof num1 !== 'number' || typeof num2 !== 'number'){
//         return 'Please provide a number';
//     }
//     const mult = num1 * num2;
//     return mult;
// }

// const result = multiply(5, 'seven');

// console.log(result);

// function fullname(firstName, lastName) {
//     if(typeof firstName !== 'string'){
//         return 'firstname Should be a string';
//     }
//     else if(typeof lastName!== 'string'){
//         return 'Lastname Should be a string';
//     }
//     const full = firstName + ' ' + lastName;
//     return full;
// }

// const full = fullname('Mosaiyeb', 'Meheraz');
// // console.log(full);

// function getPrice(product){
//     if(typeof product !== 'object'){
//         return 'Please provide an object';
//     }
//     const price = product.price;
//     return price;
// }

// const price = getPrice({
//     name : 'Sulkanir dandi',
//     price: 100,
//     quantity : 2,
//     name : "Mosaiyeb Meheraz"
// });

// const price = getPrice()
//console.log(price);

function getSecond(numbers){
    if(Array.isArray(numbers) === false){
        return 
    }
    console.log(typeof numbers);
    const second = numbers[1];
    return second;
}

const second = getSecond([3]);
console.log(second);

//practice tasks 
// https://github.com/ProgrammingHero1/js-problems-part2-practice-tasks