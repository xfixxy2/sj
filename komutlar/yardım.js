const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('BLACK') 
.addField(`İnfinityCode --- İnfinityCode`,
 `\n
-**gif-ara** Yazdığınız Kelime Hakkında Gif Aratır!
-**man-gif** Rastgele Erkek Gifi Atar!
-**woman-gif** Rastgele Kadın Gifi Atar!
-**couple-gif** Rastgele Sevgili Gifi Atar!
-**baby-gif** Rastgele Bebek Gifi Atar!
-**animal-gif** Rastgele Hayvan Gifi Atar!


**Linkler**

[Botun Destek Sunucusuna Gitmek İçin Tıkla](İnfinityCode)    
`)
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'], // İnfinityCode
permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'İnfinityCode',
  usage: 'yardım'
};