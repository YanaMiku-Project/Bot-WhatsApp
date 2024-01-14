exports.run = {
   usage: ['getdrakor'],
   use: 'link',
   category: 'drakor menu',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      Func
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://drakorasia.us/nodrakor-the-k2/'), m)
         if (!args[0].match('drakorasia.us')) return client.reply(m.chat, global.status.invalid, m)
         client.sendReact(m.chat, '🕒', m.key)
         let old = new Date()
         const json = await Api.neoxr('/drakor-get', {
            url: Func.ttFixed(args[0])
         })
         if (!json.status || !json.data.thumbnail) return client.reply(m.chat, Func.jsonFormat(json), m)
         let caption = `彡  *D R A K O R  - G E T*\n\n`
         caption += `    ◦  *Title* : ${json.data.title}\n`
         caption += `    ◦  *Episode* : ${json.data.episode}\n`
         caption += `    ◦  *Release* : ${json.data.release}\n`
         caption += `    ◦  *Genre* : ${json.data.genre.join(', ')}\n`
         caption += `    ◦  *Duration* : ${json.data.duration}\n`
         caption += `    ◦  *Channel* : ${json.data.channel}\n`
         caption += `    ◦  *Cast* : ${json.data.cast.join(', ')}\n`
         caption += `    ◦  *Sinopsis* : ${json.data.sinopsis}\n\n`

         if (json.data.episodes && json.data.episodes.length > 0) {
            json.data.episodes.forEach((episode, index) => {
               caption += `\n*Episode ${index + 1}:* ${episode.episode}\n`
               episode.urls.forEach(url => {
                  caption += `\n    ◦ *Provider:* ${url.provider}\n`
                  caption += `    ◦ *Download Link:* ${url.url}\n\n`
               })
            })
         }
         caption += global.footer
         if (json.data.thumbnail) {
            client.sendFile(m.chat, json.data.thumbnail, 'thumbnail.jpg', caption, m)
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