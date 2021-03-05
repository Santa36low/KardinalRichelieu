const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

            message.channel.send ("Za Allianci !!!")
            message.channel.send ({files: ["https://raw.githubusercontent.com/Santa36low/KardinalRichelieu/master/obr%C3%A1zky/Ali.png"]});

};

module.exports.help = {
  name: "ali",
  aliases: ['alliance', 'za alianci', 'ali', 'aliance']
};
