const height = [65, 79, 66, 68, 72, 78, 60, 65, 66];

function getMax(numbers) {
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const max = getMax(height)
console.log('Max value is : ', max);

// home work : find the min value of the height array

