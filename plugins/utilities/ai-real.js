exports.run = {
   usage: ['ai-real'],
   use: 'query',
   category: 'utilities',
   async: async (m, { client, text, Func }) => {
      try {
         if (!text) return client.reply(m.chat, '• Example : cat on the fire', m);
         client.sendReact(m.chat, '🕒', m.key) 
         const json = await Api.neoxr('/ai-real', {
            q: text
         });

         if (!json.status) return m.reply(Func.jsonFormat(json));
         await Func.delay(1000)
         await client.sendReact(m.chat, '✅', m.key) 
         client.sendFile(m.chat, json.data.url, 'image.jpg', `✨ This Result From ${text}`, m);
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m);
      }
   },
   error: false,
   limit: true,
   premium: false,
   cache: true,
   location: __filename
};