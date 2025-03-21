const express = require('express');
const path = require('path');
const TelegramBot = require('node-telegram-bot-api');

// Telegram bot setup
const token = '7787112427:AAGuUiiHdWkpHQHuyij7DJMMUmaYLY2Dk-4';
const bot = new TelegramBot(token, { polling: { autoStart: true } });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hello World');
});

// Express server setup
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from React frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Fallback route to serve React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});