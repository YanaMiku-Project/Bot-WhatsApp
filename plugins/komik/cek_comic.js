exports.run = {
   usage: ['cekkomik'],
   use: 'url',
   category: 'komik',
   async: async (m, { client, args, isPrefix, command, Func }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://komikcast.vip/komik/shijou-saikyou-no-mahou-kenshi-f-rank-boukensha-ni-tensei-suru-kensei-to-matei-2-tsu-no-zense-omotta-otoko-no-eiyuutan/'), m)
         if (!args[0].match('komikcast.io', 'komikcast.vip')) return client.reply(m.chat, global.status.invalid, m)
         client.sendReact(m.chat, '🕒', m.key)
         let old = new Date()
         const json = await Api.neoxr('/comic-get', { url: args[0] })
         if (!json.status || !json.data) return client.reply(m.chat, Func.jsonFormat(json), m)

         let caption = `彡  *I N F O - K O M I K*\n\n`
         caption += `    ◦  *Title* : ${json.data.title}\n`
         caption += `    ◦  *Author* : ${json.data.author}\n`
         caption += `    ◦  *Status* : ${json.data.status}\n`
         caption += `    ◦  *Score* : ${json.data.score}\n`
         caption += `    ◦  *Genre* : ${json.data.genre}\n`
         caption += `    ◦  *Updated* : ${json.data.updated}\n\n`
         caption += `    ◦  *Chapters* : \n`
         json.data.chapters.forEach(chapter => {
            caption += `      ❍ ${chapter.title}\n`
            caption += `         • *Release* : ${chapter.release}\n`
            if (chapter.url) {
               caption += `         • *Url* : (${chapter.url})\n`
            }
         })
         caption += `\n    ◦  *Fetching* : ${((new Date() - old) * 1)} ms\n\n`
         caption += global.footer

         if (json.data.thumbnail) {
            await client.sendFile(m.chat, json.data.thumbnail, 'thumbnail.jpg', caption, m)
         }
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}

