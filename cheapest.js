const mobiles = [
    {name : 'Samsung', price: 20000, color : 'black', camera : '12mp'},
    {name : 'Xaomi', price: 18000, color : 'black', camera : '12mp'},
    {name : 'oppo', price: 30000, color : 'black', camera : '12mp'},
    {name : 'Iphone', price: 100000, color : 'black', camera : '12mp'},
    {name : 'Walton', price: 31000, color : 'black', camera : '12mp'},
    {name : 'HTC', price: 27000, color : 'black', camera : '12mp'},
]

function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }    
    }
    return min;
}

const cheap = getCheapestPhone(mobiles);
console.log('Cheapest Phone : ', cheap);

/**
 * task : 
 * find the highest price phone
 */