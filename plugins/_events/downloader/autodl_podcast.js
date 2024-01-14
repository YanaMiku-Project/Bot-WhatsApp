exports.run = {
   regex: /^(?:https?:\/\/)?(?:podcasts\.)?(?:google\.com\/)(?:feed\/)(?:\S+)?$/,
   async: async (m, {
      client,
      body,
      users,
      setting,
      env,
      Func,
      Scraper
   }) => {
      try {
         const regex = /^(?:https?:\/\/)?(?:podcasts\.)?(?:google\.com\/)(?:feed\/)(?:\S+)?$/
         const extract = body ? Func.generateLink(body) : null
         if (extract) {
            const links = extract.filter(v => v.match(regex))
            if (links.length != 0) {
               if (users.limit > 0) {
                  let limit = 1
                  if (users.limit >= limit) {
                     users.limit -= limit
                  } else return client.reply(m.chat, Func.texted('bold', `🚩 Your limit is not enough to use this feature.`), m)
               }
               client.sendReact(m.chat, '🕒', m.key)
               Func.hitstat('podcast', m.sender)
               links.map(async link => {
                  const json = await Api.neoxr('/podcast', {
                  	url: link
                  })
                  if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
                  let teks = `乂  *P O D C A S T*\n\n`
                  teks += `	◦  *Title* : ${json.data.title}\n`
                  teks += `	◦  *Author* : ${json.data.author}\n`
                  teks += `	◦  *Duration* : ${json.data.duration}\n\n`
                  teks += global.footer
                  const size = await Func.getSize(json.data.audio)
                  const chSize = Func.sizeLimit(size, users.premium ? env.max_upload : env.max_upload_free)
                  const isOver = users.premium ? `💀 File size (${size}) exceeds the maximum limit, download it by yourself via this link : ${await (await Scraper.shorten(json.data.audio)).data.url}` : `⚠️ File size (${size}), you can only download files with a maximum size of ${env.max_upload_free} MB and for premium users a maximum of ${env.max_upload} MB.`
                  if (chSize.oversize) return client.reply(m.chat, isOver, m)
                  client.sendMessageModify(m.chat, teks, m, {
                     ads: false,
                     largeThumb: true,
                     thumbnail: await Func.fetchBuffer('https://telegra.ph/file/92be727e349c3cf78c98a.jpg')
                  }).then(() => {
                     client.sendFile(m.chat, json.data.audio, json.data.title + '.mp3', '', m, {
                        document: true
                     })
                  })
               })
            }
         }
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   limit: true,
   download: true
}