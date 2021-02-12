const { default: axios } = require("axios");
var start = 0;
var possibleItems = [];
var timeToGenerate = 0;  //Insert unix time you want to generate the token at
//(https://www.epochconverter.com/ is a good site to get these times)

var delay = timeToGenerate * 1000 - Date.now() //Set delay

setTimeout(function(){
    axios.get("https://beacon.nist.gov/beacon/2.0/pulse/last")
        .then(function (response) {
            generateItem(response.data.pulse.localRandomValue, possibleItems.length);
        })
}, delay);

function generateItem(localRandomValue, totalItems){
    var firstTen = localRandomValue.substring(0, 10); 
    var choosenNumber = parseInt(firstTen, 16) % (totalItems);
    console.log("The item choosen was: " + possibleItems[choosenNumber]);
}