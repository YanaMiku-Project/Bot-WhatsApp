exports.run = {
   usage: ['top'],
   use: 'jumlah | text',
   category: 'utilities',
   async: async (m, { client, participants, text, Func, isPrefix, command }) => {
      try {
         const [jumlah, customText] = text.split`|`;
         const topCount = parseInt(jumlah);

         if (isNaN(topCount) || !customText) {
            return client.reply(m.chat, `• Example : ${isPrefix + command} 5|Orang Terpintar`, m);
         }

         if (participants.length < topCount) {
            return client.reply(m.chat, `🚩 Terdapat kurang dari ${topCount} anggota. Tidak dapat menentukan top ${topCount}`, m);
         }

         let member = participants.map(u => u.id);
         let now = new Date() * 1;
         let topMembers = [];

         for (let i = 0; i < topCount; i++) {
            let randomMember = member[Math.floor(member.length * Math.random())];
            topMembers.push(`@${randomMember.replace(/@.+/, '')}`);
         }

         client.reply(m.chat, `Berikut Adalah Top ${topCount} *${customText}*

○ ${topMembers.join('\n○ ')}`, m);
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m);
      }
   },
   group: true
};
