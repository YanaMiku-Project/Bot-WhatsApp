exports.run = {
   usage: ['apk'],
   use: 'name apk',
   category: 'utilities',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      Func
   }) => {
      try {
         if (!args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'vpn'), m)
         client.sendReact(m.chat, '🔍', m.key)
         let old = new Date()
         const json = await Api.neoxr('/apk', {
            q: args.join(' ')
         })
         if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)

         const result = json.data;

         let caption = `🔍  *S E A R C H   R E S U L T*\n\n`;
         result.forEach((res, i) => {
            caption += `    *${i+1}.* ${res.name}\n`;
            caption += `        ◦ *Size*: ${res.size}\n`;
            caption += `        ◦ *Version*: ${res.version}\n`;
            caption += `        ◦ *Download*: (${res.url})\n\n`;
         });

            caption += `    ◦  *Fetching* : ${((new Date - old) * 1)} ms\n`;
            caption += `    ◦  *Download Apk* : ${isPrefix}getapk ${args[0]} nomor\n`;
            caption += `    ◦  *Example* : ${isPrefix}getapk ${args[0]}  1\n\n`;
            client.sendMessageModify(m.chat, caption + global.footer, m, {
               ads: false,
               largeThumb: true,
               thumbnail: await Func.fetchBuffer('https://telegra.ph/file/5c4b43dd3c0f5d3439916.jpg')
            })

      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}
