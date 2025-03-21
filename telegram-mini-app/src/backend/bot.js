const TelegramBot = require('node-telegram-bot-api');

// Replace with your own token from BotFather
const token = '7787112427:AAGuUiiHdWkpHQHuyij7DJMMUmaYLY2Dk-4';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: { autoStart: true } });

// Listen for any incoming messages
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    // Send back a message to the user
    bot.sendMessage(chatId, 'Hello World');
});