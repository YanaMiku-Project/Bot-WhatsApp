exports.run = {
  usage: ['ultah'],
  category: 'utilities', 
  async: async (m, { client }) => {
    try {
      const now = new Date();
      const targetDate = new Date(now.getFullYear(), 1, 13, 0, 0, 0, 0); // February 13 of this year at 00:00:00

      // If the target date has passed for this year, set it to next year
      if (now > targetDate) {
        targetDate.setFullYear(now.getFullYear() + 1);
      }

      const timeDifference = targetDate - now;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      const reply = `🎂 *Birthday Countdown* 🎂\n\n${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds left until your birthday!`;

      client.reply(m.chat, reply, m);
    } catch (e) {
      return client.reply(m.chat, `❌ Error: ${e.message}`, m);
    }
  },
  error: false,
  location: __filename
};