exports.run = {
   usage: ['getanime'],
   hidden: ['downloadanime'],
   use: 'url',
   category: 'anime',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      Func
   }) => {
      try {
         if (!args || !args.join(' ')) return client.reply(m.chat, Func.example(isPrefix, command, 'https://www.animebatch.id/digimon-adventure-tri-6-bokura-no-mirai-bd-subtitle-indonesia/'), m)
         if (!args[0].match('animebatch.id')) return client.reply(m.chat, global.status.invalid, m)
         client.sendReact(m.chat, '🕒', m.key)
         let old = new Date()
         const json = await Api.neoxr('/anime-get', {
            url: Func.ttFixed(args.join(' '))
         })
         if (!json.status || !json.data) return client.reply(m.chat, Func.jsonFormat(json), m)
         let caption = `彡  *G E T - A N I M E*\n\n`
         caption += `    ◦  *Title* : ${json.data.title}\n`
         caption += `    ◦  *Status* : ${json.data.status}\n`
         caption += `    ◦  *Type* : ${json.data.type}\n`
         caption += `    ◦  *Release* : ${json.data.release}\n`
         caption += `    ◦  *Studio* : ${json.data.studio}\n`
         caption += `    ◦  *Duration* : ${json.data.duration}\n`
         caption += `    ◦  *Genre* : ${json.data.genre}\n`
         caption += `    ◦  *Score* : ${json.data.score}\n`
         caption += `    ◦  *Views* : ${json.data.views}\n`
         caption += `    ◦  *Description* : ${json.data.description}\n\n`
         caption += `    ◦  *Episodes* : \n`
         json.data.episode.forEach(episode => {
            caption += `      ❍ *${episode.episode}*\n`
            episode.link.forEach(link => {
               caption += `        ◦  *Quality* : ${link.quality}\n`
               link.url.forEach(url => {
                  caption += `            ❍ *Server* : ${url.server}\n`
                  caption += `               • [Download](${url.url})\n`
               })
            })
         })
         caption += `\n    ◦  *Fetching* : ${((new Date - old) * 1)} ms\n\n`
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