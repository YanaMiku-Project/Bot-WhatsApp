function getTotalUsage(plugins) {
    let totalUsage = 0;

    for (let name in plugins) {
        const obj = plugins[name].run;

        if (obj.usage) {
            switch (obj.usage.constructor.name) {
                case 'Array':
                    totalUsage += obj.usage.length;
                    break;
                case 'String':
                    totalUsage++;
                    break;
            }
        }
    }

    return totalUsage;
}

exports.run = {
   usage: ['totalfitur'],
   hidden: ['fitur'], 
   category: 'bot info',
   async: async (m, { client, args, Func, command, plugins }) => {
      try {
         const totalUsage = getTotalUsage(plugins);
         const message = `• Total Fitur : ${totalUsage} fitur.`;

         client.reply(m.chat, message, m);
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m);
      }
   },
   error: false,
   location: __filename
}
