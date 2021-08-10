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