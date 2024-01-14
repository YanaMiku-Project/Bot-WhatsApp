exports.run = {
   usage: ['anime'],
   use: 'judul',
   category: 'anime',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      Func
   }) => {
      try {
         if (!args || !args.join(' ')) return client.reply(m.chat, Func.example(isPrefix, command, 'Digimon'), m)
         client.sendReact(m.chat, '🕒', m.key)
         let old = new Date()
         const json = await Api.neoxr('/anime', {
            q: Func.ttFixed(args.join(' '))
         })
         if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)

         // Mengubah data dari JSON ke dalam bentuk array
         const apkList = json.data;

         let caption = `彡  *A N I M E - L I S T*\n\n`;

         // Loop untuk setiap item dalam daftar apkList
         for (const apk of apkList) {
            caption += `    ◦  *Judul* : ${apk.title}\n`;
            caption += `    ◦  *Rating* : ${apk.score}🌟\n`;
            caption += `    ◦  *Status* : ${apk.type}\n`;
            caption += `    ◦  *Url* : ${apk.url}\n`;
            caption += '\n';
         }

         caption += `    ◦  *Fetching* : ${((new Date - old) * 1)} ms\n`;
         caption += global.footer;

         // Kirim pesan dengan daftar apk
         client.reply(m.chat, caption, m);

      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}