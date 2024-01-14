exports.run = {
   usage: ['apkmod'],
   use: 'nama apk',
   category: 'utilities',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      Func
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'Vpn'), m)
         client.sendReact(m.chat, '🕒', m.key)
         let old = new Date()
         const json = await Api.neoxr('/apkmod', {
            q: Func.ttFixed(args[0])
         })
         if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)

         // Mengubah data dari JSON ke dalam bentuk array
         const apkList = json.data;

         let caption = `彡  *A P K - M O D*\n\n`;

         // Loop untuk setiap item dalam daftar apkList
         for (const apk of apkList) {
            caption += `*No* : ${apk.no}\n`;
            caption += `    ◦  *Name* : ${apk.name}\n`;
            caption += `    ◦  *Version* : ${apk.version}\n`;
            caption += `    ◦  *Mod* : ${apk.mod}\n`;
            caption += `    ◦  *Url* : ${apk.url}\n`;
            caption += '\n';
         }

         caption += `    ◦  *Fetching* : ${((new Date - old) * 1)} ms\n`;
         caption += `    ◦  *Download Apk* : ${isPrefix}getapkmod ${args[0]} nomor\n`;
         caption += `    ◦  *Example* : ${isPrefix}getapkmod ${args[0]}  1\n\n`;
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