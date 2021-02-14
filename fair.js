//How to verify numbers generated are legit

var localRandomValue = "6C858F2667876A660F3521F39ABCD264AB85EB77CFD77F884C4FE9DCEFD97E6B11B7BEF79955A6A270CFA8B5772899301C9985F7C32CBD7ECBF272EA886E580C" //Replace x with flocalRandomValue from nist at the given time
var totalItems = 7; //Replace this value with the total number of items to choose from


generateItem(localRandomValue, totalItems);
function generateItem(localRandomValue, totalItems){
    var firstTen = localRandomValue.substring(0, 10); // Only use first 10 characters, otherwise we get an extremely large number that causes issues
    var choosenNumber = parseInt(firstTen, 16) % (totalItems); //Convert the given hexadecimal to a decimal number
    console.log("The number choosen was: " + choosenNumber);
}