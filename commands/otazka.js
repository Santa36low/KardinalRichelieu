const discord = require("discord.js");

var fortunes = [
    "Ano i to je možnost",
    "Ne a nezkoušej moji trpělivost",
    "Doufám že jsem zle slyšel!!!",
    "Zeptej se Milady de Winter",
    "Opravdu?",
    "Nikdy",
    "Na mém nazoru nezáleží!!",
    "A dost! Už mě dale neotravuj",
    "Mám lepší věci na práci...",
    "Zasraní Pušketýři!",
    "To zní zajímavě",
    "Pověz my o tom víc",
    "No konečně zajimavá otázka!",
    "Hurá do toho!!",
];

module.exports.run = async (bot, message, args) => {

if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Naslouchám, polož svoji otázku");

};

module.exports.help = {
  name: "?",
  aliases: ['otazka', 'otázka']
};
