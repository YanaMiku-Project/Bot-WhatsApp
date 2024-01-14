exports.run = {
   usage: ['whatanime'],
   use: 'reply image',
   category: 'anime',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      Scraper, 
      Func
   }) => {
      try {
         let q = m.quoted ? m.quoted : m
         let mime = (q.msg || q).mimetype || ''
         if (!/image/.test(mime)) return client.reply(m.chat, Func.texted('bold', `🚩 Image not found.`), m)
         client.sendReact(m.chat, '🕒', m.key)
         let img = await q.download()
         if (!img) return client.reply(m.chat, global.status.wrong, m)
         let link = await Scraper.uploadImage(img)
         if (!link.status) return m.reply(Func.jsonFormat(link))
         let image = link.data.url
         const json = await Api.neoxr('/whatanime', {
            url: image
         })
         if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)

         const result = json.data;

         let caption = `彡  *W H A T - A N I M E*\n\n`;
         caption += `    ◦  *Anilist*: ${result.anilist}\n`;
         caption += `    ◦  *Eps*: ${result.episode}\n`;
         caption += `    ◦  *From*: ${result.from}\n`;
         caption += `    ◦  *To*: ${result.to}\n`;
         caption += `    ◦  *Similarity*: ${result.similarity}\n`;
         caption += `    ◦  *File Name*: ${result.filename}\n\n`;

         client.reply(m.chat, caption + global.footer, m)
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}