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