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
global.ytname = "YT: Nickson" //ur yt chanel name
global.socialm = "GitHub:Robystis" //ur github or insta name
global.location = "Nairobi,Kenya"//ur locationar

//new
global.botname = '░▒▓█►n͜͡önesence ×◄█▓▒░' //ur bot name
global.ownernumber = '254718382875' //ur owner number
global.ownername = '░▒▓█►亗『ＧＥＥ』亗◄█▓▒░'//ur owner name
global.websitex = "https://www.facebook.com/gee.mkuu"
global.wagc = "https://chat.whatsapp.com/C4NU6KefgoLL9W8vpbhbEY"
global.themeemoji = '🚮'
global.wm = "gee WA Bot"
global.botscript = 'https://github.com/geemkuu/CheemsBot-MD10' //script link
global.packname = "Sticker By"
global.author = "👑 geemkuu 👑\n\n"
global.creator = "254718382875@s.whatsapp.net"
global.xprefix = ''
global.premium =["254718382875"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v4' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
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
