const discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    
    let embed = new discord.RichEmbed()
    .addField("`*hpala`", "Talenty na holy paladina")
    .addField("`*ppala`", "Talenty na protection paladina")
    .addField("`*rpala`", "Talenty na retri paladina")
    .setColor(0xDE1212)
    .setFooter("📌                                Naslouchám ti můj synu. Zvol si spec.                             📌")
    .setTitle("🎚                     ✅Zvládl jsi to zde jsou příkazy!                   🎚")
    .setThumbnail('https://raw.githubusercontent.com/Santa36low/pokus1/master/obr%C3%A1zky/sword logo 1.png')
    message.channel.send(embed);

};

module.exports.help = {
    name: 'spec',
    aliases: []
};
