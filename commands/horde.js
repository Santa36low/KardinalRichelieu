const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

            message.channel.send ("Za Hordu !!!")
            message.channel.send ({files: ["https://raw.githubusercontent.com/Santa36low/KardinalRichelieu/master/obr%C3%A1zky/hord.jpg"]});

};

module.exports.help = {
  name: "horde",
  aliases: ['horda', 'za hordu']
};
