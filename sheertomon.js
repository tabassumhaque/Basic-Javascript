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