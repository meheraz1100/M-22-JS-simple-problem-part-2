/**
 *  below 100 : ----> each price is 100
 * more than 101-200 : ----> each price is 90
 * more than 200 : ----> each price is 70
 */

function discountPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    else{
        const total = quantity * 70;
        return total;
    }       
}

