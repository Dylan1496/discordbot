const {SlashCommandBuilder} = require('discord.js');
const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('charters-join')
        .setDescription('Use this command if you would like to join TPC Charters'),
    async execute(interaction) {
        const modal  = new ModalBuilder()
            .setCustomId('join-charters')
            .setTitle('Join TPC Charters')
        const airlinecode = new TextInputBuilder()
            .setCustomId('airlinecode')
            .setLabel('What is your Airline Code?')
            .setStyle(TextInputStyle.Short)
        const homebase = new TextInputBuilder()
            .setCustomId('homebase')
            .setLabel('What is your home base?')
            .setStyle(TextInputStyle.Short)
        const aircraft = new TextInputBuilder()
            .setCustomId('aircraft')
            .setLabel('What is the aircraft type you would like?')
            .setStyle(TextInputStyle.Short)
        const seating = new TextInputBuilder()
            .setCustomId('seating')
            .setLabel('What is the Seating Config you would like?')
            .setStyle(TextInputStyle.Short)
        const actionrow1 = new ActionRowBuilder().addComponents(airlinecode)
        const actionrow2 = new ActionRowBuilder().addComponents(homebase)
        const actionrow3 = new ActionRowBuilder().addComponents(aircraft)
        const actionrow4 = new ActionRowBuilder().addComponents(seating)

        modal.addComponents(actionrow1,actionrow2,actionrow3,actionrow4)

        await interaction.showModal(modal);
    },
};

