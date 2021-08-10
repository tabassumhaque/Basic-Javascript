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