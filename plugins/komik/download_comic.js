const fetch = require('node-fetch');
const fs = require('fs');
const pdf = require('html-pdf');

exports.run = {
   usage: ['getkomik'],
   use: 'url',
   category: 'komik',
   async: async (m, { client, args, isPrefix, command, Func }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://komikcast.io/chapter/tensei-kizoku-no-isekai-boukenroku-jichou-wo-shiranai-kamigami-no-shit-chapter-53-1-bahasa-indonesia/'), m)
         if (!args[0].match('komikcast.io')) return client.reply(m.chat, global.status.invalid, m)
         client.sendReact(m.chat, '🕒', m.key)
         
         const json = await Api.neoxr('/comic-render', {
            url: Func.ttFixed(args[0])
         });

         if (!json.status || !json.data) return client.reply(m.chat, Func.jsonFormat(json), m);

         const htmlContent = json.data.map(url => `<img src="${url}" style="max-width:100%;" />`);
         const html = `<html><body>${htmlContent.join('')}</body></html>`;
         const fileName = args[0].split('/').pop();
         const pdfPath = `./${fileName}.pdf`;
         const options = { format: 'A4' };

         pdf.create(html, options).toFile(pdfPath, (err, res) => {
            if (err) throw err;
            const pdfBuffer = fs.readFileSync(pdfPath);
            client.sendFile(m.chat, pdfBuffer, `${fileName}.pdf`, `Here is the PDF file for ${fileName}`, m);
            fs.unlinkSync(pdfPath); // Delete the temporary PDF file
         });
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m);
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
};

