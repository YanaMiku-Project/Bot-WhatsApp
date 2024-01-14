exports.run = {
   usage: ['getapk'],
   use: 'name no',
   category: 'utilities',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      Func
   }) => {
      try {
         if (!args || !args[0] || !args[1]) return client.reply(m.chat, Func.example(isPrefix, command, 'vpn 1'), m)
         client.sendReact(m.chat, '🕒', m.key)
         let old = new Date()
         const json = await Api.neoxr('/apk', {
            q: Func.ttFixed(args[0]), 
            no: Func.ttFixed(args[1])
         })
         if (!json.status || !json.file.url) return client.reply(m.chat, Func.jsonFormat(json), m)
         let caption = `彡  *G E T - A P K*\n\n`
         caption += `    ◦  *Name* : ${json.data.name}\n`
         caption += `    ◦  *Category* : ${json.data.category}\n`
         caption += `    ◦  *Size* : ${json.file.size}\n`
         caption += `    ◦  *Version* : ${json.data.version}\n`
         caption += `    ◦  *Publish* : ${json.data.publish}\n`
         caption += `    ◦  *Requirement* : ${json.data.requirement}\n`
         caption += `    ◦  *Developer* : ${json.data.developer}\n\n`
         caption += `    ◦  *Fetching* : ${((new Date - old) * 1)} ms\n\n`
         caption += global.footer

         if (json.data.thumbnail) {
            client.sendFile(m.chat, json.data.thumbnail, 'thumbnail.jpg', caption, m)
         }

         if (command == 'getapk') {
            if (json.file.url) {
               await client.sendFile(m.chat, json.file.url, json.file.filename || 'apk.apk', caption, m)
               client.sendReact(m.chat, '✅', m.key)
            }
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