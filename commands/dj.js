const discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    
    let embed = new discord.RichEmbed()
                .addField("▶ `!play`", "Přehraje playlist z Youtube.com, soundcloud.com ...")
                .addField("⏯ `!resume`", "Pausne a znovu pustí hudbu.")
                .addField("📀 `!join`", "Připojí Rythm bota na hlasový kanál.")
                .addField("💿 `!disconnect`", "Odpojíš Rythm bota od hlasového kanálu.")
                .addField("⏸ `!np`", "Ukaže co pravě hraje.")
                .addField("⏭ `!skip`", "Přeskočí aktualní skladbu.")
                .addField("🔂 `!replay`", "Opakovani aktualní skladby.")
                .addField("🔁 `!loopqueue`", "Opakuje celý playlist.")
                .addField("⏹ `!clear`", "Vymaže playlist.")
                .addField("📶 `!ping`", "Zjisti odezvu bota na Discordu.")
                .setColor(0x0000FF)
                .setFooter("📌                                         Co my necháš zahrát?                                         📌")
                .setTitle("🎚                     ✅Zvládl jsi to zde jsou příkazy!                   🎚")
                .setThumbnail('http://imgWorld.cz/s3/WNTKewOsPE.png')
    message.channel.send(embed);

};

module.exports.help = {
    name: "dj",
    aliases: ['music']
};
