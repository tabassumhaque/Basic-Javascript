// Problem 1: Sheer to Mon

function seerToMon(sheer){
    // error case conditions
    if(typeof sheer != 'number')
    {
        return 'Please give a Number!'; 
    }
    else if(sheer <= 0)
    {
        return 'Please give a Positive Number which is greater than zero!';
    }
    // function calculation
    const mon = sheer * 0.025;
    return mon;
}
// call the function to show output
const calculatedMon = seerToMon(90);
console.log(calculatedMon);




// Problem 2: Total Sales determine

function totalSales(shirtQuantity, pantQuantity, shoeQuantity){
    // error case conditions
    if (typeof shirtQuantity != 'number' || typeof pantQuantity != 'number' || typeof shoeQuantity != 'number'){
        return "Please give all three input as Numbers!";
    }
    else if (shirtQuantity <0 || pantQuantity <0 || shoeQuantity <0){
        return "You have given a negative value. This is undefined!";
    }
    // total sale calculation
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;
    const shirtSales = shirtPrice * shirtQuantity;
    const pantSales = pantPrice * pantQuantity;
    const shoeSales = shoePrice * shoeQuantity;
    const total = shirtSales + pantSales + shoeSales;
    return total;
}
// call the function to show output
const todayTotalSale = totalSales(7, 6, 4);
console.log(todayTotalSale);



// Problem 3: Determine delivery Cost

function deliveryCost(tshirtDeliveryQuantity){
    // error case conditions
    if(tshirtDeliveryQuantity <= 0)
    {
        return 'Please give a Positive Number which is greater than zero!';
    }
    else if(typeof tshirtDeliveryQuantity != 'number')
    {
        return 'Please give a Number!'; 
    }
    // total delivery cost calculation
    const deliveryRange1 = 100;
    const deliveryRange2 = 80;
    const deliveryRange3 = 50;

    // For shirt quantity between 1 to 100: delivery cost is 100tk
    if(tshirtDeliveryQuantity <= 100){
        const case1DeliveryCost = deliveryRange1 * tshirtDeliveryQuantity;
        return case1DeliveryCost;
    }
    // For shirt quantity between 101 to 200: delivery cost is 80tk
    else if(tshirtDeliveryQuantity <= 200){
        const cost1 = 100 * deliveryRange1;
        const tshirtDifference1 = tshirtDeliveryQuantity - 100;
        const cost2 = tshirtDifference1 * deliveryRange2;
        const case2DeliveryCost = cost1 + cost2;
        return case2DeliveryCost;
    }
    // For shirt quantity greater the 200: delivery cost is 50tk
    else{
        const costBetween100 = 100 * deliveryRange1;
        const costBetween200 = 100 * deliveryRange2;
        const tshirtDifference2 = tshirtDeliveryQuantity - 200;
        const cost3 = tshirtDifference2 * deliveryRange3;
        const case3DeliveryCost = costBetween100 + costBetween200 + cost3;
        return case3DeliveryCost;
    }
}
// call the function to show output
const tshirtDeliveryCost = deliveryCost(150);
console.log(tshirtDeliveryCost);



// Problem 4: Show Perfect Friend as a String

// An array of friends name
const names = ['Khirunnesa', 'Rayna', 'Nadiba', 'Muntaha', 'Tanni', 'Rose', 'Rupa', 'Tania', 'Faria', 'Salma'];

function perfectFriend(names){
    // error case conditions
    if (typeof names != 'object'){
        return "You've given a wrong input. Please Give a list of names!";
    }
    // function to show 5 character name as string
    const fiveCharacterName = [];
    for(const element of names){
        if(element.length == 5){
            fiveCharacterName.push(element);
            const requiredName = fiveCharacterName.toString();
            return requiredName;
        }
    }
}
// call the function to show output
const fiveCharRequiredName = perfectFriend(names);
console.log(fiveCharRequiredName);
