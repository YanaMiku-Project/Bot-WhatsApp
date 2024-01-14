exports.run = {
   usage: ['getpp'],
   use: 'mention or reply',
   category: 'utilities',
   async : async (m, {
   client,
   text,
   prefix,
   command,
   Func
}) => {
   try {
      let number = isNaN(text) ? (text.startsWith('+') ? text.replace(/[()+\s-]/g, '') : (text).split`@` [1]) : text
      if (!text && !m.quoted) return client.reply(m.chat, Func.texted('bold', `🚩 Mention or reply chat target.`), m)
      if (isNaN(number)) return client.reply(m.chat, Func.texted('bold', `🚩 Invalid number.`), m)
      if (number.length > 15) return client.reply(m.chat, Func.texted('bold', `🚩 Invalid format.`), m)
      try {
         if (text) {
            var user = number + '@s.whatsapp.net'
         } else if (m.quoted.sender) {
            var user = m.quoted.sender
         } else if (m.mentionedJid) {
            var user = number + '@s.whatsapp.net'
         }
      } catch (e) {} finally {
         let pic = false
         try {
            client.sendReact(m.chat, '🕒', m.key) 
            pic = await client.profilePictureUrl(user, 'image')
         } catch {} finally {
            if (!pic) return client.reply(m.chat, Func.texted('bold', `🚩 He/She didn't put a profile picture.`), m)
            client.sendFile(m.chat, pic, '', 'Ini Dia Kak, Foto Profil Nya✨', m)
            await Func.delay(1500)
            client.sendReact(m.chat, '✅', m.key) 
         }
      }
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
},
   error: false,
   limit: true,
   cache: true,
   location: __filename
}