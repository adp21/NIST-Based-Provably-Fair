const { default: axios } = require("axios");
const Discord = require('discord.js');
const client = new Discord.Client();
var possibleItems = [];

client.on('message', message => {
    if (message.content.startsWith('>') && message.channel.id == 810262568240676905) {
        console.log("Interpreting a message");
        var arg = message.content.split(/\s+/);
        if(arg[0] == ">schedule"){
            if(arg.length < 3 || arg.length > 3){
                message.channel.send('Please use correct formart: >schedule [UNIX Time (Minutes)] [Ticker List, seperated by commas (ie. BTC,ETH,LTC)]');
            }else{
                possibleItems = arg[2].split(',');
                var timeToGenerate = arg[1];  //Insert unix time you want to generate the token at
                //(https://www.epochconverter.com/ is a good site to get these times)

                var delay = timeToGenerate * 1000 - Date.now() //Set delay
                var pumpID = timeToGenerate.toString(16);
                message.channel.send("Scheduled a pump with ID: " + pumpID + " in " + Math.round(delay/1000) + " seconds.");
                console.log(delay);

                setTimeout(function(){
                    console.log("running");
                    axios.get("https://beacon.nist.gov/beacon/2.0/pulse/last")
                        .then(function (response) {
                            var pulse = response.data.pulse.uri;
                            var tick = generateItem(response.data.pulse.localRandomValue, possibleItems.length);
                            message.channel.send("Pump ID: " +  + pumpID + " finished, the result was: " + tick + ".  The pulse's localRandomValue was: " + response.data.pulse.localRandomValue + " and can be viewed here: " + pulse);
                        })
                }, delay);
            }
        }
    }
  });

  client.login('ODA5OTAyNTc2MjgzNDE4NjU0.YCb2jQ.hz-SrmzkrLTMbK9ZQ4WwP6iMHWY');

function generateItem(localRandomValue, totalItems){
    var firstTen = localRandomValue.substring(0, 10); 
    var choosenNumber = parseInt(firstTen, 16) % (totalItems);
    return(possibleItems[choosenNumber]);
}