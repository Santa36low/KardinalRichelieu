const Discord = require('discord.js')
const client = new Discord.Client()

const PREFIX = "*"
const TOKEN = "NjUwNjY3MTE3NjMyNDIxODkw.XeQLXQ.N8X2Fc2ScEjD5gRxrbLXhbdmOlo"
const ID = "650642909863084093"

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

client.on('ready', () => {
    // List serveru kam se muže připojit
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)

        // Vypíše list chanlu a jejich ID
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })
});
    // co napiše při připokeni
client.on('ready', () => {
    var generalChannel = client.channels.get(ID)
    generalChannel.send("✝ Váš Kardinal pravě dorazil. Pokloň se!! ✝") 
});

// příkazy bot aby odpověděl a prefix
client.on("message", (message)=>{
    if (message.author.equals(client.user)) return;

    if (!message.content.startsWith(PREFIX)) return;
    
    if(message.content.startsWith(PREFIX + "delete")){
        let args = message.content.split(" ").slice(1);
        let author = message.member;
        let role = message.guild.roles.find('name', "Moderator");
        if(message.member.roles.has(role.id)){
            if(!args[0]){
                message.delete();
                message.author.send("Chybí číslo od 2 do 100 - počet zpráv kolik smažu");
                return;
            }
            if(args[0] > 100){
                message.delete();
                message.author.send("Maximum je 100");
                return;
            }
            message.delete();
            message.channel.bulkDelete(args[0]);
            message.author.send("✅ Hotovo smazáno" + args[0] + " messages");
            return;
        
        }
    }

    var args = message.content.substring(PREFIX.length).split(" ");

    // příkazy
    switch (args[0].toLowerCase()) {
        case "ikon":
            message.channel.sendMessage("☯ https://www.prosettings.com/emoji-list/#av-symbol ☯");
            break;
        case "?":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Naslouchám, polož svoji otázku");
            break;
        case "help":
            var help = new Discord.RichEmbed()
                .addField("❓ `*?`", "Položíš Kardinalovi otázku.")
                .addField("🎶 `*dj`", "Příkazy pro DJ bota. Hrajeme na vaše pčání.")
                .addField("💊 `*spec`", "Zobrazí guidy ma classy a specy")
                .addField("🗑 `*delete xx`", "Smaže předchozí zprávi xx - počet zpráv")
                .addField("☯ `*ikon`", "Ikonky pro channely")
                
                .setColor(0xDE1212)
                .setFooter("📌                                         Naslouchám ti můj synu.                                             📌")
                .setTitle("🎚                     ✅Zvládl jsi to zde jsou příkazy!                   🎚") 
                .setThumbnail('http://imgWorld.cz/s3/WNTKewOsPE.png')         
            message.channel.sendMessage(help);
            break;

        case "spec":
            var spec = new Discord.RichEmbed()
                .addField("`*hpala`", "Talenty na holy paladina")
                .addField("`*ppala`", "Talenty na protection paladina")
                .addField("`*rpala`", "Talenty na retri paladina")
                .setColor(0xDE1212)
                .setFooter("📌                                Naslouchám ti můj synu. Zvol si spec.                             📌")
                .setTitle("🎚                     ✅Zvládl jsi to zde jsou příkazy!                   🎚")
                .setThumbnail('http://imgWorld.cz/s3/WNTKewOsPE.png')          
            message.channel.sendMessage(spec);
            break;
        case "rpala":
                message.channel.send ("Talenty na Retri Paladina")
                message.channel.send ("http://db.excalibur.ws/?talent#sxZxGzZVf0tbcuiIot", {files: ["./obrázky/rpala.jpg"]});
            break;
        
        case "dj":
            var dj = new Discord.RichEmbed()
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
            message.channel.sendMessage(dj);
            break;

        default:
            message.channel.sendMessage("❌ Nevím co máš na mysli zkus`*help`❗");
    }
});

client.login(process.env.TOKEN)
