const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data:  new SlashCommandBuilder()
        .setName('charts')
        .setDescription('gives information about specific airport')
        .addStringOption(option =>
            option.setName('airport')
            .setDescription('The input to echo back')
            .setRequired(true)),
	async execute(interaction) {
		const airport = interaction.options.getString('airport')
    const response = await fetch(`https://metar.vatsim.net/metar.php?id=${airport}`);
    const body = await response.text();
    
    let chartsEmbed =
      {
        "type": "rich",
        "title": `Airport`,
        "description": `Information about ${airport.toUpperCase()}`,
        "color": 0X37B6FF,
        "fields": [
          {
            "name": `CHARTS (AirNav)`,
            "value": `https://www.airnav.com/airport/${airport}`
          },
          {
            "name": `METAR`,
            "value": body || "Not available"
          }
        ],
        "footer": {
          "text": `Made by The Pilot Club`
        }
      }
    
  
    interaction.reply({ embeds: [chartsEmbed] });
	},
};