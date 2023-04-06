//const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');

require('dotenv').config();

const { Client, IntentsBitField} = require('discord.js');
const sqlite3 = require('sqlite3').verbose();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildMembers
  ]
});

// Open the SQLite database
const db = new sqlite3.Database('hosts/inventory.db');

// When the bot is ready, log to console
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// When a message is received, check if it's a !info command
client.on('messageCreate', message => {
  //if (message.content.endsWith('/info')){
   if (message.content.endsWith('/info')){
   message.channel.send('Please specify a hostname. Usage: `/info hostname.example.com`');
  }else if (message.content.startsWith('/info')) {
    // Extract the hostname from the message
    const hostname = message.content.slice(6);

    // Query the database for the host information
    db.get('SELECT * FROM hosts WHERE hostname = ?', [hostname], (err, row) => {
      if (err) {
        console.error(err);
        message.reply('An error occurred while retrieving the host information.');
      } else if (row) {
        // If the hostname is found in the database, send a message with the host information
        //const embed = new Discord.MessageEmbed()

        const { MessageEmbed } = require('discord.js');
        const embed = new EmbedBuilder()
          .setTitle(row.hostname)
          .addFields(
            { name: 'OS', value: row.os },
            { name: 'IP Address', value: row.ip_address },
            { name: 'Location', value: row.location },
          )
          //.setColor('GREEN');
  
        message.channel.send({ embeds: [embed] });

      } else {
        // If the hostname is not found in the database, send an error message
        message.reply(`Host "${hostname}" not found in the inventory.`);
      }
    });
  }
});

// Log in to Discord with your bot token
client.login(process.env.TOKEN);
