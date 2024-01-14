exports.run = {
   usage: ['setpp'],
   use: 'reply photo',
   category: 'owner',
   async: async (m, {
      client,
      Func,
      Scraper
   }) => {
      try {
     	let q = m.quoted ? m.quoted : m
         let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
         if (/image\/(jpe?g|png)/.test(mime)) {
            client.sendReact(m.chat, '🕒', m.key)
            const buffer = await q.download()
            await client.updateProfilePicture(client.user.id, buffer)
            await Func.delay(3000).then(() => client.reply(m.chat, Func.texted('bold', `🚩 Profile photo has been successfully changed.`), m))
         } else return client.reply(m.chat, Func.texted('bold', `🚩 Reply to the photo that will be made into the bot's profile photo.`), m)
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   owner: true,
   cache: true,
   location: __filename
}