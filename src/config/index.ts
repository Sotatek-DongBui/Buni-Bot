const { GOOGLE_CHAT_BOT, PORT, HOST } = process.env;

export const configs = {
  googleChatBotUrl: GOOGLE_CHAT_BOT,
  port: PORT,
  globalPath: '/buni-bot',
  currentPath: process.cwd(),
  host: HOST,
};
