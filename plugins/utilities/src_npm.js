exports.run = {
   usage: ['searchnpm'],
   hidden: ['npm'],
   use: 'query',
   category: 'utilities',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      Func
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'queue'), m)
         client.sendReact(m.chat, '🕒', m.key)
         let old = new Date()
         const json = await Api.neoxr('/npm', {
            q: Func.ttFixed(args[0])
         })
         if (!json.status || !json.data) return client.reply(m.chat, Func.jsonFormat(json), m)
         let caption = `彡  *S E A R C H - N P M*\n\n`
         json.data.forEach((item, index) => {
            caption += `   ┌──\n`
            caption += `   │ *Name* : ${item.name}\n`
            caption += `   │ *Version* : ${item.version}\n`
            caption += `   │ *Description* : ${item.description}\n`
            if (item.keywords) caption += `   │ *Keywords* : ${item.keywords.join(', ')}\n`
            caption += `   │ *Date* : ${item.date}\n`
            caption += `   │ *Publisher* : ${item.publisher.username} (${item.publisher.email})\n`
            caption += `   │ *Links* :\n`
            caption += `   │    ❍ *NPM* : ${item.links.npm}\n`
            caption += `   │    ❍ *Homepage* : ${item.links.homepage}\n`
            caption += `   │    ❍ *Repository* : ${item.links.repository}\n`
            caption += `   │    ❍ *Bugs* : ${item.links.bugs}\n`
            caption += `   └──\n`
         })
         caption += `\n   ●  *Fetching* : ${((new Date - old) * 1)} ms\n\n`
         client.sendMessageModify(m.chat, caption + global.footer, m, {
               ads: false,
               largeThumb: true,
               thumbnail: await Func.fetchBuffer('https://telegra.ph/file/9aab1b0e6f4fbed787276.jpg')
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