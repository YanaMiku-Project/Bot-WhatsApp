exports.run = {
  usage: ['newyear'],
  category: 'utilities', 
  async: async (m, { client }) => {
    try {
      const now = new Date();
      const targetDate = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0, 0); // January 1 of next year at 00:00:00

      const timeDifference = targetDate - now;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      const reply = `🎉 *New Year Countdown* 🎉\n\n${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds left until New Year's Day!`;

      client.reply(m.chat, reply, m);
    } catch (e) {
      return client.reply(m.chat, `❌ Error: ${e.message}`, m);
    }
  },
  error: false,
  location: __filename
};