const meheraz = 56;
const noman = 95;

if(meheraz > noman) {
    console.log("meheraz is greater than noman");
}
else{
    console.log("noman is greater than meheraz");
}

// inside a function
function getMax(num1, num2) {
    if(num1 > num2) {
        return num1;
    }
    else{
        return num2;
    }
}

const max1 = getMax(56, 79);
const max2 = getMax(56, 96);
const ultimateMax = getMax(max1, max2);

console.log("Max of two is : ", max1);
console.log("Max of two is : ", max2);
console.log("Max of two is : ", ultimateMax);

