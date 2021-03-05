const discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    
    let embed = new discord.RichEmbed()
                .addField("❓ `*?`", "Položíš Kardinalovi otázku.")
                .addField("🎶 `*dj`", "Příkazy pro DJ bota. Hrajeme na vaše pčání.")
                .addField("💊 `*spec`", "Zobrazí guidy ma classy a specy")
                .addField("🗑 `*delete xx`", "Smaže předchozí zprávi xx - počet zpráv")
                .addField("🔰 `*ali`", "Ukaže banner alliance")
                .addField("🔰 `*hord`", "Ukaže banner hordy")
                .addField("☯ `*ikon`", "Ikonky pro channely")
                .setColor(0xDE1212)
                .setFooter("📌                                         Naslouchám ti můj synu.                                             📌")
                .setTitle("https://raw.githubusercontent.com/Santa36low/KardinalRichelieu/master/obr%C3%A1zky/black-sword-icon-0.jpg", "✅Zvládl jsi to zde jsou příkazy!✅") 
                .setAuthor("Vyber charakter a spec.")
                .setThumbnail("https://raw.githubusercontent.com/Santa36low/KardinalRichelieu/master/obr%C3%A1zky/black-sword-icon-0.jpg")
    message.channel.send(embed);

};

module.exports.help = {
    name: "help",
    aliases: ["pomoc", "příkazy", "příkazy", "prikaz", "prikazy"]
};
