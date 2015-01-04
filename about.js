var friends = require("../../core/friends");
//var logger = require('../../core/logger.js');
var fs = require("fs");
var readline = require("readline");

exports.handle = function(input, source) {
    var input = input.split(" ");

    if(input[0] == "about") {
        var about = "";
        if(fs.existsSync("../../package.json"))
        {
            var package = JSON.parse(fs.readFileSync("../../package.json"));
            about += package["name"] + " v" + package["version"] + "\n";
        }



        friends.messageuser(source, about);

        return true;
    }

    return false;
}

//exports.onExit() {
//
//}

exports.getHelp = function() {
  return "ABOUT\nabout - shows informations about this bot\n";
}
