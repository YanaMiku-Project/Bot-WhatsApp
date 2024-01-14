exports.run = {
   usage: ['top5'],
   use: 'text', 
   category: 'utilities',
   async: async (m, { client, participants, text, Func, isPrefix, command }) => {
      try {
         if (participants.length < 5) {
            return client.reply(m.chat, '🚩 Terdapat kurang dari 5 anggota. Tidak dapat menentukan top 5.', m);
         }

         if (!text) {
            return client.reply(m.chat, `• Example : ${isPrefix + command} Orang Terpintar`, m);
         }

         let member = participants.map(u => u.id);
         let now = new Date() * 1;
         let topMembers = [];

         for (let i = 0; i < 5; i++) {
            let randomMember = member[Math.floor(member.length * Math.random())];
            topMembers.push(`@${randomMember.replace(/@.+/, '')}`);
         }

         client.reply(m.chat, `Berikut Adalah Top 5 *${text}*

○ ${topMembers.join('\n○ ')}`, m);
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m);
      }
   },
   group: true
};
