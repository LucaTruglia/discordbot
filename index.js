const Discord = require('discord.js');
const bot = new Discord.Client();

const token='NjkwODg1Nzc4NjQ1MDU3NTY3.XnYN6A.kdxIP6qhCeRsxCU3Pn8TiHL8SNQ'

bot.on('ready', () =>{
    console.log('Il signor truglia è online!');
    
})



bot.login(token);