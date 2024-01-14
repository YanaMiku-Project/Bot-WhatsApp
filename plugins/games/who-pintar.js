exports.run = {
   usage: ['who-pintar'],
   category: 'fun games',
   async: async (m, {
      client,
      participants
   }) => {
      let member = participants.map(u => u.id)
      let now = new Date * 1
      var tag1 = member[Math.floor(member.length * Math.random())]
      var tag2 = member[Math.floor(member.length * Math.random())]
      if (tag1 == tag2) {
         for (let i = 0; i < 5; i++) {
            var tag1 = member[Math.floor(member.length * Math.random())]
            var tag2 = member[Math.floor(member.length * Math.random())]
            if (tag1 != tag2) {
               break
            }
         }
      }
      client.reply(m.chat, `@${tag1.replace(/@.+/, '')} Orang Pintar`)
   },
   group: true
}

/*
╎  ➻  ᴡʜᴏ-ᴛᴏʟʟᴏʟ
╎  ➻  ᴡʜᴏ-ɢᴏʙʟᴏᴋ
╎  ➻  ᴡʜᴏ-ᴡɪʙᴜ
╎  ➻  ᴡʜᴏ-ᴊᴇʟᴇᴋ
╎  ➻  ᴡʜᴏ-ɢᴀɴᴛᴇɴɢ
╎  ➻  ᴡʜᴏ-ᴘɪɴᴛᴀʀ
╎  ➻  ᴡʜᴏ-sᴛᴜᴘɪᴅ
╎  ➻  ᴡʜᴏ-sᴛʀᴇss
*/