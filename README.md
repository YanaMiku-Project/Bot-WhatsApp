# Semua Hak Dilindungi Lisensi

 Proyek ini dilindungi oleh All Rights Reserved License.

 ## Syarat dan Ketentuan

 1. **Dilarang Didistribusikan:**
    - Anda secara tegas dilarang mengunggah, membagikan, atau mendistribusikan proyek ini atau bagian mana pun dari proyek ini dalam bentuk apa pun atau melalui media apa pun, termasuk namun tidak terbatas pada GitHub, repositori publik, atau platform online lainnya.

 2. **Dilarang Modifikasi:**
    - Anda tidak diperbolehkan memodifikasi, mengadaptasi, atau membuat karya turunan berdasarkan proyek ini.

 3. **Dilarang Penggunaan Komersial:**
    - Dilarang keras menggunakan proyek ini atau komponennya secara komersial.  Hal ini terdimasuk, namun tidak terbatas pada, penjualan, pemberian lisensi, atau segala bentuk keuntungan moneter.

 4. **Kepemilikan dan Hak:**
    - Semua hak, termasuk hak kekayaan intelektual, dimiliki oleh pemilik proyek.  Penggunaan, reproduksi, atau distribusi yang tidak sah sangat dilarang
 ## Penegakan Lisensi

 Pelanggaran terhadap syarat dan ketentuan lisensi ini dapat mengakibatkan tindakan hukum.

 ## Kontak

 Untuk pertanyaan apa pun mengenai perizinan atau penggunaan, silakan hubungi pemilik proyek
 - [ Email ](mailto:support@yanamiku.shop).
 - [ WhatsApp ](https://wa.me/6285793589243?text=Hallo). 
 - [ WhatsApp Cs ](https://wa.me/6285775616873=text?Hallo). 
 - [ Group ](https://chat.whatsapp.com/HzaF888SGaMJhEq24wP29B). 

 Dengan menggunakan atau berinteraksi dengan proyek ini, Anda setuju untuk terikat oleh syarat dan ketentuan lisensi ini.

 **Catatan:** Jika Anda melanggar aturan ini, akses Repository akan dihapus

## Donate Links

<b>QRIS</b>: <code>https://iili.io/JuQ2gqu.jpg</code></br>
**satu untuk semua, donasi kamu membuat admin senang ❤️**

 # Terimakasih

 ---

 ### Requirements

- [x] NodeJS >= 18
- [x] FFMPEG
- [x] Server vCPU/RAM 1/2GB (Min)

---

### Configuration

There are 2 configuration files namely ```.env``` and ```config.json```, adjust them before installing.

```Javascript
{
   "owner": "6285793589243", // nomor owner
   "owner_name": "Customer Service", // nama owner
   "database": "data", // nama database
   "limit": 100, // limit per hari
   "ram_limit": "500mb", // ram limit server
   "max_upload": 50, 
   "max_upload_free": 10,
   "cooldown": 3, // anti spam
   "timer": 180000, // waktu banned
   "timeout": 1800000, 
   "blocks": ["994", "91", "92"], // nomor auto block
   "evaluate_chars":  ["=>", "~>", "<", ">", "$"], // tidak boleh di ubah
   "pairing": {
      "state": true, // jika ingin code = true, jika ingin qr = false,
      "number": 62857935892434 // ubah menjadi nomor bot
   },
   "replit_url": ""
}
```

```.env
### Api : https://api.neoxr.my.id
API_ENDPOINT = 'https://api.neoxr.my.id/api'
API_KEY = 'yAnaG1'

### Api : https://api.betabotz.org
BETABOTZ_API = ''

### Api : https://api.lolhuman.xyz
LOLHUMAN_API = ''

### Database : https://www.mongodb.com/
DATABASE_URL = ''

### Timezone (Important)
TZ = 'Asia/Jakarta'

### Stabled Diffusion : https://stablediffusionapi.com/dashboard/apikeys
STABLED_DIFF = ''

### Cloud Storage
CS_DOMAIN = 'http://4.neoxr.eu'
CS_KEYPASS = 'damn'

### Clovyr : https://clovyr.io/
CLOVYR_APPNAME = ''
CLOVYR_URL = ''
CLOVYR_COOKIE = ''

### Imagine : https://platform.imagine.art/dashboard
IMAGINE_API = ''

### Anti Porn : https://api.sightengine.com
API_USER = '1829583249'
API_SECRET = 'YccFrcybsExviEeMmhvv'

### Email (Gmail)
USER_EMAIL_PROVIDER = 'gmail'
USER_NAME = ''
USER_EMAIL = ''
USER_APP_PASSWORD = ''

### Twilio : www.twilio.com
TWILIO_AUTH_TOKEN = '' 
TWILIO_ACCOUNT_SID = '' 
TWILIO_PHONE_NUMBER = ''
TWILIO_MESSAGE_SERVICE_SID = ''

### Vipayment : https://vip-reseller.co.id
VIPA_API_ID = ''
VIPA_API_KEY = ''
VIPA_SIGN = ''

### Apigames
APIGAMES_SECRET_KEY = ''
APIGAMES_MERCHANT_ID = ''

### https://console.firebase.google.com
FIREBASE_PROJECT_ID = ''
FIREBASE_BUCKET = ''

### Mediafire : https://mediafire.com
APIKEY_MF = ''
OAUTH_TOKEN_MF = ''
FOLDER_KEY_MF = ''

### https://api.itsrose.life or wa.me/6285261881362?text=.registrasi
APIKEY_ROSE = ''

### https://github.com/settings/tokens
TOKEN_GH = ''
TOKEN_GH2 = '' 

### Picsart https://console.picsart.io/
PICSART_API = '' 
```

**Notes** :
+ ```ram_limit``` : ram usage limit, for example you have a server with 1gb of ram set before the maximum capacity is 900mb.

+ ```API_KEY``` : some of the features in this script use apikey, especially the downloader feature, to get an apiKey you can get it on the [Neoxr Api's](https://api.neoxr.my.id) with prices that vary according to your needs.

+ ```DATABASE_URL``` : can be filled with mongo and postgresql URLs to use localdb just leave it blank and the data will be saved to the .json file.

> Localdb is only for development state, for production state you must use a cloud database (mongo / postgres)

---

### Run on Clovyr

Clovyr is a free cloud compute with vscode based for running bot with specifications of 2 CPU and 4GB RAM (idk storage size)

<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/879907dac646d1cb4c017.png" /></p>

with vscode it will be very easy to do recode and debugging scripts

<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/7e33c1e83a872f4f8d363.png" /></p>

**Notes** :
+ ```CLOVYR_APPNAME``` : application name on your clovyr

> Specifically for the 2 configurations below, you must carry out an inspect element using a computer to get cookies and keep-alive links

+ ```CLOVYR_URL``` : keep-alive link

+ ```CLOVYR_COOKIE``` : cookie from clovyr

---

### Pairing Code

Connecting account without qr scan but using pairing code.

<p align="center"><img align="center" width="100%" src="https://iili.io/JA6yGAQ.jpg" /></p>

```Javascript
{
   "pairing": {
      "state": true, // "true" if you want to use the pairing code
      "number": 62xxxx // start number with country code
   }
}
```
---

### Installation & Run

Make sure the configuration and server meet the requirements so that there are no problems during installation or when this bot is running, type this on your console :

```
$ yarn
$ node .
```

or want to use pm2

```
$ yarn
$ npm i -g pm2
$ pm2 start index.js && pm2 save && pm2 logs
```
---

### Command Plugin

**Command Plugin** is a plugin that will run using the command.

```Javascript
exports.run = {
   usage: ['mediafire'],
   hidden: ['mf'],
   use: 'link',
   category: 'downloader',
   async: async (m, {
      client,
      args,
      text,
      isPrefix,
      command,
      env,
      Scraper,
      Func
   }) => {
      try {
         // do something
      } catch (e) {
         console.log(e)
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   limit: true,
   restrict: true,
   cache: true,
   location: __filename
}
```
---

#### Up Side Options :

+ ```usage``` : main command that will automatically appear in the menu list, use of usage can be in the form of arrays and strings.

+ ```hidden``` : commands that are hidden from the menu list, suitable for command aliases or hidden features.

+ ```use``` : this parameter is optionally used when the plugin / feature requires input such as link, query, amount, etc.

+ ```category``` : categories for each plugin that the command will be arranged by category when the menu is displayed.

+ ```m``` : parameters that contain chat object.

+ ```client``` : parameter which contains several messaging functions from [@neoxr/wb](https://www.npmjs.com/package/@neoxr/wb) and default functions from [Baileys](https://github.com/WhiskeySockets/Baileys).

+ ```args``` : nput given after command in the form of an array is usually found in downloader feature which uses links such as ig, youtube, fb, etc. Parsing based on index. (Example: args[1], args[2], args[3], ....)

+ ```text``` : input that is given after command in the form of a string is usually found in search features that use queries/keywords such as lyrics, chords, yts, etc.

+ ```isPrefix``` : prefix used, if noprefix mode is active this parameter will be blank (it's no problem).

+ ```command``` : commands used can be used in an if else or switch case conditional when creating 1 plugin with several commands in it.

+ ```env``` : parameters that contain the configuration from the config.json file.

+ ```Scraper``` : parameter containing some of the scraper functions of [@neoxr/wb](https://www.npmjs.com/package/@neoxr/wb) module.

+ ```Func``` : parameter containing some of the utilites functions of [@neoxr/wb](https://www.npmjs.com/package/@neoxr/wb) module.

---

#### Down Side Options

+ ```error``` : not very useful :v

+ ```limit``` : limit the use of features with limits, to set the number of limits give integer data and for default is boolean true for 1.

+ ```premium``` : to create special features for premium users.

+ ```restrict``` : limit input, restricted input is in the form of badwords in db.setting.toxic.

+ ```cache``` : option to auto update when done recode.

+ ```__filename``` : file path for auto update

**Other** :
```Javascript
cmd.async(m, { client, args, text, isPrefix: prefix, prefixes, command, groupMetadata, participants, users, chats, groupSet, setting, isOwner, isAdmin, isBotAdmin, plugins, blockList, env, ctx, Func, Scraper })
```
---

### Event Plugin

**Event Plugin** is a plugin that runs automatically without using the command.

```Javascript
exports.run = {
   async: async (m, {
      client,
      body,
      prefixes
   }) => {
      try {
         // do something
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   cache: true,
   location: __filename
}
```

+ ```body``` : chat in the form of text or emoticons, this plugin is usually used for auto response or group protectors such as anti-links, anti-toxic etc.

+ ```prefixes``` : parameter which contains all prefixes in the form of an array, to use them parse based on index. (Example: prefixes[0]).

**Other** :
```Javascript
event.async(m, { client, body, prefixes, groupMetadata, participants, users, chats, groupSet, setting, isOwner, isAdmin, isBotAdmin, plugins, blockList, env, ctx, Func, Scraper })
```

Others please learn by yourself from other plugins.

Check this repository regularly to get updates because the progress base is not 100% yet, if you find an error, please make an issue. Thanks.

---

# Tutorial
**Get Api Picsart** :
- [Picsart Api](https://console.picsart.io)
- [Tutorial](https://telegra.ph/GET-API-PICSART-12-23)

**Get Url MongoDb**
- [MongoDb](https://account.mongodb.com/account)
- [Tutorial](https://youtu.be/HhHzCfrqsoE?si=vRE2RoaAtfMlkPzH)

---

<p align="center"><img src="https://iili.io/JA6P9Pp.jpg" alt="setip_setcode"></p>

<h1 align="center">SETIP & SETCODE</h1>
<em><h5>setip = berfungsi untuk mendapatkan akses script agar dapat terhubung ke ip server tempat run</h5></em>
<em><h5>setcode = berfungsi untuk mengubah code verifikasi</h5></em>

- [ SETIP ](https://wa.me/62857935892434?text=setip+username|ip)
- [ SETCODE ](https://wa.me/62857935892434?text=setcode+username|code)

---

<p align="center"><img src="https://iili.io/JA6tFJ2.jpg" alt="connecting"></p>

<h1 align="center">SETIP & SETCODE</h1>
<em><h5>Saat Run, Masukkan Username - Ip Script - Code Verifikasi</h5></em>

---

# Terimakasih Kepada
<p><img src="https://iili.io/JAtMHiX.jpg" width="70px" height="70px" alt="neoxr"></p>
<p><img src="https://iili.io/JAtOCPV.jpg" width="70px" height="70px" alt="github"></p>
