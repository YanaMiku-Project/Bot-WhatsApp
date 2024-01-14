exports.run = {
   usage: ['runtime'],
   hidden: ['run'],
   category: 'bot info',
   async: async (m, { client, Func }) => {
      let _uptime = process.uptime(); // Waktu dalam detik
      let days = Math.floor(_uptime / (3600 * 24));
      let hours = Math.floor((_uptime % (3600 * 24)) / 3600);
      let minutes = Math.floor((_uptime % 3600) / 60);
      let seconds = Math.floor(_uptime % 60);

      let uptimeText = '';

      if (days > 0) uptimeText += days + ' hari ';
      if (hours > 0) uptimeText += hours + ' jam ';
      if (minutes > 0) uptimeText += minutes + ' menit ';
      if (seconds > 0) uptimeText += seconds + ' detik';

      client.reply(m.chat, Func.texted('bold', `Uptime: [ ${uptimeText} ]`), m);
   },
   error: false
}