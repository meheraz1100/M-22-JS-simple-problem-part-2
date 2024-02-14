/**
 * chair --> 3 CFT --> Cubic Feet
 * table --> 10 CFT
 * bed --> 50 CFT
 */

function woodQuantity(chairQuantity, table, bed){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = table * perTableWood;
    const bedTotalWood = bed * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}

const wood = woodQuantity(1, 1, 4);
console.log('Wood Needed : ', wood);

/**
 * Task : 
 * shirt price --> 500 tk
 * pant price --> 300tk
 * shoes price --> 900tk
 */