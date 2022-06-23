const { GOOGLE_CHAT_BOT, PORT_BOT, HOST } = process.env;

export const configs = {
  googleChatBotUrl: GOOGLE_CHAT_BOT,
  port: PORT_BOT,
  globalPath: '/buni-bot',
  currentPath: process.cwd(),
  host: HOST,
};
