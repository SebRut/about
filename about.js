var friends = require("../../core/friends");
//var logger = require('../../core/logger.js');
var fs = require("fs");

exports.handle = function(input, source) {
    var input = input.split(" ");

    if(input[0] == "about") {
        var about = "BOT\n=====\n";

        if(fs.existsSync("package.json"))
        {
            var package = JSON.parse(fs.readFileSync("package.json"));
            about += package["name"] + " v" + package["version"] + "\n";
        }

        if(friends.getAllFriends().length < 0) about += "No";
        else about += friends.getAllFriends().length;
        about += " friend(s) added\n";
        about += friends.getBlacklist().length + " user(s) blacklisted\n";

        friends.messageUser(source, about);
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
