exports.run = {
   usage: ['komik'],
   hidden: ['comic'], 
   use: 'judul',
   category: 'komik',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      Func
   }) => {
      try {
         if (!args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'tensei'), m)
         client.sendReact(m.chat, '🔍', m.key)
         let old = new Date()
         const json = await Api.neoxr('/comic', {
            q: args.join(' ')
         })
         if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)

         const result = json.data;

         let caption = `彡  *K O M I K C A S T*\n\n`;
         result.forEach((res, i) => {
            caption += `    *${i+1}.* ${res.title}\n`;
            caption += `        ◦ *Type*: ${res.type}\n`;
            caption += `        ◦ *Chapter*: ${res.chapter}\n`;
            caption += `        ◦ *Score*: ${res.score}\n\n`;
            caption += `        ◦ *Url*: ${res.url}\n\n`;
         });

            caption += `    ◦  *Fetching* : ${((new Date - old) * 1)} ms\n`;
            caption += `    ◦  *Open Chapter* : ${isPrefix}cekkomik *url*\n`;
            caption += `    ◦  *Download Komik* : ${isPrefix}getkomik *url*\n\n`;
            client.sendMessageModify(m.chat, caption + global.footer, m, {
               ads: false,
               largeThumb: true,
               thumbnail: await Func.fetchBuffer('https://telegra.ph/file/f6804500968fd634788d3.jpg')
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
