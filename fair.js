//How to verify numbers generated are legit

var localRandomValue = "" //Replace x with flocalRandomValue from nist at the given time
var totalItems = 0; //Replace this value with the total number of items to choose from


generateItem(localRandomValue, totalItems);
function generateItem(localRandomValue, totalItems){
    var firstTen = localRandomValue.substring(0, 10); // Only use first 10 characters, otherwise we get an extremely large number that causes issues
    var choosenNumber = parseInt(firstTen, 16) % (totalItems); //Convert the given hexadecimal to a decimal number
    console.log("The number choosen was: " + choosenNumber);
}