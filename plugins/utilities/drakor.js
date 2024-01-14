const axios = require('axios');
const cheerio = require('cheerio');

exports.run = {
   usage: ['drakor'],
   use: 'search for Korean dramas',
   category: 'entertainment',
   async: async (m, { client, text, Func }) => {
      try {
         if (!text) return client.reply(m.chat, '• Example: drakor my demon', m);

         const query = encodeURIComponent(text.trim());
         const url = `https://drakorindo.cc/?s=${query}`;

         const response = await axios.get(url);
         const $ = cheerio.load(response.data);

         const results = [];
         $('.movies .movie-list').each((index, element) => {
            const title = $(element).find('.ml-item a').attr('title');
            const releaseDate = $(element).find('.ml-date .mli-eps').text();
            const rating = $(element).find('.ml-imdb .mli-rating').text();
            const studio = $(element).find('.ml-studio .mli-studio').text();
            const type = $(element).find('.ml-quality .mli-quality').text();
            const actors = $(element).find('.ml-actors .mli-actor').text();
            const synopsis = $(element).find('.ml-sinopsis .mli-content').text();
            const urlLink = $(element).find('.ml-item a').attr('href');

            const result = {
               title,
               releaseDate,
               rating,
               studio,
               type,
               actors,
               synopsis,
               urlLink,
            };

            results.push(result);
         });

         if (results.length > 0) {
            const message = results.map((result, index) => {
               return `• *${result.title}*\n\n` +
                  `• Judul: ${result.title}\n` +
                  `• Rilis: ${result.releaseDate}\n` +
                  `• Rating: ${result.rating}\n` +
                  `• Studio: ${result.studio}\n` +
                  `• Jenis: ${result.type}\n` +
                  `• Aktor: ${result.actors}\n` +
                  `• Sinopsis: ${result.synopsis}\n` +
                  `• URL Link: ${result.urlLink}\n\n`;
            }).join('\n');

            client.reply(m.chat, message, m);
         } else {
            client.reply(m.chat, 'No results found for the given query.', m);
         }
      } catch (e) {
         console.error(e);
         client.reply(m.chat, Func.texted('bold', '❌ An error occurred while processing your request. Please try again later.'), m);
      }
   },
   error: false,
   limit: true,
   location: __filename,
};