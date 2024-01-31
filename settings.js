//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "No YT Channel" //ur yt chanel name
global.socialm = "GitHub:Sudipto122005" //ur github or insta name
global.location = "Mayureswar, Birbhum"//ur locationar

//new
global.botname = '░▒▓█►─𝕯𝕯 𝕮𝖍𝖊𝖊𝖒𝖘 𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕 𝕭𝕺𝕿─◄█▓▒░' //ur bot name
global.ownernumber = '919339619072' //ur owner number
global.ownername = '꧁☬༺𝕯𝖊𝖇𝖆𝖘𝖍𝖎𝖘༻☬꧂'//ur owner name
global.websitex = "https://www.facebook.com/sipra.dey.56863"
global.wagc = "https://chat.whatsapp.com/C4NU6KefgoLL9W8vpbhbEY"
global.themeemoji = '📌'
global.wm = "Debashis WA Bot"
global.botscript = 'https://github.com/Debashis121212/CheemsBot-MD10' //script link
global.packname = "Sticker By"
global.author = "👑 𝕯𝖊𝖇𝖆𝖘𝖍𝖎𝖘 👑\n\n"
global.creator = "919339619072@s.whatsapp.net"
global.xprefix = ''
global.premium = ["919339619072"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = true //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})