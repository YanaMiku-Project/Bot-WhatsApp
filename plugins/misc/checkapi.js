exports.run = {
   usage: ['checkapi'],
   category: 'bot info',
   async: async (m, { client, Func }) => {
      try {
         let json = await Api.neoxr('/check')
         let caption = `📊 *API STATUS* 📊\n\n`;
         caption += `   ◦ *Name*: ${json.data.name}\n`;
         caption += `   ◦ *Limit*: ${json.data.limit}\n`;
         caption += `   ◦ *Total*: ${json.data.total}\n`;
         caption += `   ◦ *Premium*: ${json.data.premium ? 'Yes' : 'No'}\n`;
         caption += `   ◦ *Expired At*: ${json.data.expired_at}\n`;

         await client.reply(m.chat, caption, m);
      } catch (e) {
         client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   cache: true,
   location: __filename
}