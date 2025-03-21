# Telegram Mini App

This project is a simple Telegram mini app built with React for the frontend and Node.js for the backend. It displays "Hello World" upon opening and connects to a Telegram bot.

## Project Structure

```
telegram-mini-app
├── src
│   ├── frontend
│   │   ├── components
│   │   │   └── App.jsx
│   │   ├── index.html
│   │   ├── index.jsx
│   │   └── styles.css
│   └── backend
│       ├── bot.js
│       └── server.js
├── package.json
├── .babelrc
├── .eslintrc.json
├── webpack.config.js
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd telegram-mini-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a Telegram Bot:**
   - Use the BotFather on Telegram to create a new bot and obtain the bot token.

4. **Configure the Bot:**
   - Open `src/backend/bot.js` and replace the placeholder with your bot token.

5. **Set Up the Server:**
   - In `src/backend/server.js`, set up a webhook to listen for updates from your Telegram bot.

6. **Run the Application:**
   - Start the backend server:
     ```bash
     node src/backend/server.js
     ```
   - Build and serve the frontend:
     ```bash
     npm run build
     npm start
     ```

## Connecting to the Telegram Bot

1. **Initialize the Bot:**
   - In `src/backend/bot.js`, use the bot token to initialize the Telegram bot.

2. **Set Up Webhook:**
   - In `src/backend/server.js`, configure an Express server to handle incoming webhook requests from Telegram.

3. **Deploy the Backend:**
   - Deploy your backend server to a platform that supports HTTPS (e.g., Heroku, Vercel) since Telegram requires a secure connection for webhooks.

4. **Interact with Users:**
   - Use the Telegram API in `bot.js` to send messages or interact with users based on the bot's logic.

## Usage

When you open the mini app, you will see "Hello World" displayed on the screen. You can then interact with your Telegram bot as per the logic defined in your backend files.