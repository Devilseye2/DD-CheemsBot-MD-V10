//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Owner Menu 』
┆❏1${prefix}autoread 🅞
┆❏2${prefix}autobio 🅞
┆❏3${prefix}autotype 🅞
┆❏4${prefix}unavailable 🅞
┆❏5${prefix}autorecord 🅞
┆❏6${prefix}autorecordtype 🅞
┆❏7${prefix}autoswview 🅞
┆❏8${prefix}setautoblock 🅞
┆❏9${prefix}setantiforeign 🅞
┆❏10${prefix}autoblock 🅞
┆❏11${prefix}onlygc 🅞
┆❏12${prefix}onlypc 🅞
┆❏13${prefix}onlyindia 🅞
┆❏14${prefix}onlyindo 🅞
┆❏15${prefix}anticall 🅞
┆❏16${prefix}self 🅞
┆❏17${prefix}public 🅞
┆❏18${prefix}join 🅞
┆❏19${prefix}poll 🅞
┆❏20${prefix}bc 🅞
┆❏21${prefix}bcgroup 🅞
┆❏22${prefix}setmenu 🅞
┆❏23${prefix}setimgmenu 🅞
┆❏24${prefix}setvidmenu 🅞
┆❏25${prefix}setgifmenu 🅞
┆❏26${prefix}setreply 🅞
┆❏27${prefix}setprefix 🅞
┆❏28${prefix}addlimit 🅞
┆❏29${prefix}dellimit 🅞
┆❏30${prefix}resethit 🅞
┆❏31${prefix}resetuser 🅞
┆❏32${prefix}creategc 🅞
┆❏33${prefix}setexif 🅞
┆❏34${prefix}userjid 🅞
┆❏35${prefix}setbotbio 🅞
┆❏36${prefix}delppbot 🅞
┆❏37${prefix}shutdown 🅞
┆❏38${prefix}setppbot 🅞
┆❏39${prefix}addprem 🅞
┆❏40${prefix}delprem 🅞
┆❏41${prefix}addowner 🅞
┆❏42${prefix}delowner 🅞
┆❏43${prefix}addvn 🅞
┆❏44${prefix}addapk 🅞
┆❏45${prefix}addzip 🅞
┆❏46${prefix}addpdf 🅞
┆❏47${prefix}delapk 🅞
┆❏48${prefix}delzip 🅞
┆❏49${prefix}delpdf 🅞
┆❏50${prefix}delvn 🅞
┆❏51${prefix}addsticker 🅞
┆❏52${prefix}delsticker 🅞
┆❏53${prefix}addimage 🅞
┆❏54${prefix}delimage 🅞
┆❏55${prefix}addvideo 🅞
┆❏56${prefix}delvideo 🅞
┆❏57${prefix}addtitle 🅞
┆❏58${prefix}deltitle 🅞
┆❏59${prefix}upswtext 🅞
┆❏60${prefix}upswvideo 🅞
┆❏61${prefix}upswimage 🅞
┆❏62${prefix}upswaudio 🅞
┆❏63${prefix}block 🅞
┆❏64${prefix}unblock 🅞
┆❏65${prefix}leavegc 🅞
┆❏66${prefix}pushcontact 🅞
┆❏67${prefix}pushcontactv2 🅞
╰–––––––––––––––༓

╭––『 Group Menu 』
┆❏68${prefix}antibot 🅖
┆❏69${prefix}antiviewonce 🅖
┆❏70${prefix}welcome 🅖
┆❏71${prefix}adminevent 🅖
┆❏72${prefix}groupevent 🅖
┆❏73${prefix}antiforeign 🅖
┆❏74${prefix}antimedia 🅖
┆❏75${prefix}antiaudio 🅖
┆❏76${prefix}antivideo 🅖
┆❏77${prefix}antiimage 🅖
┆❏78${prefix}antidocument 🅖
┆❏79${prefix}antilocation 🅖
┆❏80${prefix}anticontact 🅖
┆❏81${prefix}antisticker 🅖
┆❏82${prefix}antipoll 🅖
┆❏83${prefix}antilink 🅖
┆❏84${prefix}antilinkgc 🅖
┆❏85${prefix}antivirtex 🅖
┆❏86${prefix}grouplink 🅖
┆❏87${prefix}listadmin 🅖
┆❏88${prefix}invite 🅖
┆❏89${prefix}ephemeral 🅖
┆❏90${prefix}delete 🅖
┆❏91${prefix}setppgroup 🅖
┆❏92${prefix}delppgroup 🅖
┆❏93${prefix}setnamegc 🅖
┆❏94${prefix}setdesc 🅖
┆❏95${prefix}add 🅖
┆❏96${prefix}kick 🅖
┆❏97${prefix}promote 🅖
┆❏98${prefix}demote 🅖
┆❏99${prefix}getcontact 🅞
┆❏100${prefix}savecontact 🅞
┆❏101${prefix}sendcontact 🅞
┆❏102${prefix}contactag 🅞
┆❏103${prefix}hidetag 🅖
┆❏104${prefix}totag 🅖
┆❏105${prefix}tagall 🅖
┆❏106${prefix}editinfo 🅖
┆❏107${prefix}opentime 🅖
┆❏108${prefix}closetime 🅖
┆❏109${prefix}resetlink 🅖
┆❏110${prefix}getbio 🅖
┆❏111${prefix}vote 🅖
┆❏112${prefix}upvote 🅖
┆❏113${prefix}downvote 🅖
┆❏114${prefix}checkvote 🅖
┆❏115${prefix}delvote 🅖
┆❏116${prefix}autostickergc 🅖
┆❏117${prefix}antivirus 🅖
┆❏118${prefix}antitoxic 🅖
┆❏119${prefix}nsfw 🅖
┆❏120${prefix}react 🅖
╰–––––––––––––––༓

╭––『 Download Menu 』
┆❏121${prefix}ytsearch 🅕
┆❏122${prefix}play 🅕
┆❏123${prefix}ytmp3 🅕
┆❏124${prefix}ytmp4 🅕
┆❏125${prefix}tiktokaudio 🅕
┆❏126${prefix}tiktok 🅕
┆❏127${prefix}igvideo 🅕
┆❏128${prefix}igimage 🅕
┆❏129${prefix}facebook 🅕
┆❏130${prefix}mediafire 🅕
┆❏131${prefix}google 🅕
┆❏132${prefix}imdb 🅕
┆❏133${prefix}weather 🅕
┆❏134${prefix}wanumber 🅕
┆❏135${prefix}spotify 🅟
┆❏136${prefix}gitclone 🅕
┆❏137${prefix}happymod 🅕
┆❏138${prefix}gdrive 🅕
┆❏139${prefix}pinterest 🅕
┆❏140${prefix}ringtone 🅕
╰–––––––––––––––༓

╭––『 Random Video 』
┆❏141${prefix}tiktokgirl 🅕
┆❏142${prefix}tiktoknukthy 🅕
┆❏143${prefix}tiktokkayes 🅕
┆❏144${prefix}tiktokpanrika 🅕
┆❏145${prefix}tiktoknotnot 🅕
┆❏146${prefix}tiktokghea 🅕
┆❏147${prefix}tiktoksantuy 🅕
┆❏148${prefix}tiktokbocil 🅕
╰–––––––––––––––༓

╭––『 Stalker 』
┆❏149${prefix}igstalk 🅕
┆❏150${prefix}tiktokstalk 🅕
┆❏151${prefix}mlstalk 🅕
┆❏152${prefix}npmstalk 🅕
┆❏153${prefix}ghstalk 🅕
╰–––––––––––––––༓

╭––『 OpenAI 』
┆❏154${prefix}openai 🅕
┆❏155${prefix}dalle 🅕
┆❏156${prefix}ai 🅕
┆❏157${prefix}remini 🅕
╰–––––––––––––––༓

╭––『 Fun Menu 』
┆❏158${prefix}define 🅕
┆❏159${prefix}lyrics 🅕
┆❏160${prefix}suit 🅕
┆❏161${prefix}math 🅕
┆❏162${prefix}tictactoe 🅕
┆❏163${prefix}fact 🅕
┆❏164${prefix}truth 🅕
┆❏165${prefix}dare 🅕
┆❏166${prefix}couple 🅕
┆❏167${prefix}soulmate 🅕
┆❏168${prefix}stupidcheck 🅕
┆❏169${prefix}handsomecheck 🅕
┆❏170${prefix}uncleancheck 🅕
┆❏171${prefix}hotcheck 🅕
┆❏172${prefix}smartcheck 🅕
┆❏173${prefix}greatcheck 🅕
┆❏174${prefix}evilcheck 🅕
┆❏175${prefix}dogcheck 🅕
┆❏176${prefix}coolcheck 🅕
┆❏177${prefix}waifucheck 🅕
┆❏178${prefix}awesomecheck 🅕
┆❏179${prefix}gaycheck 🅕
┆❏180${prefix}cutecheck 🅕
┆❏181${prefix}lesbiancheck 🅕
┆❏182${prefix}hornycheck 🅕
┆❏183${prefix}prettycheck 🅕
┆❏184${prefix}lovelycheck 🅕
┆❏185${prefix}uglycheck 🅕
┆❏186${prefix}pick 🅕
┆❏187${prefix}pickupline 🅕
┆❏188${prefix}quotes 🅕
┆❏189${prefix}can 🅕
┆❏190${prefix}is 🅕
┆❏191${prefix}when 🅕
┆❏192${prefix}where 🅕
┆❏193${prefix}what 🅕
┆❏194${prefix}how 🅕
┆❏195${prefix}rate 🅕
┆❏196${prefix}cry 🅕
┆❏197${prefix}kill 🅕
┆❏198${prefix}hug 🅕
┆❏199${prefix}pat 🅕
┆❏200${prefix}lick 🅕 
┆❏201${prefix}kiss 🅕
┆❏202${prefix}bite 🅕
┆❏203${prefix}yeet 🅕
┆❏204${prefix}bully 🅕
┆❏205${prefix}bonk 🅕
┆❏206${prefix}wink 🅕
┆❏207${prefix}poke 🅕
┆❏208${prefix}nom 🅕
┆❏209${prefix}slap 🅕
┆❏210${prefix}smile 🅕 
┆❏211${prefix}wave 🅕
┆❏212${prefix}awoo 🅕
┆❏213${prefix}blush 🅕
┆❏214${prefix}smug 🅕
┆❏215${prefix}glomp 🅕 
┆❏216${prefix}happy 🅕
┆❏217${prefix}dance 🅕
┆❏218${prefix}cringe 🅕
┆❏219${prefix}cuddle 🅕
┆❏220${prefix}highfive 🅕 
┆❏221${prefix}shinobu 🅕
┆❏222${prefix}handhold 🅕
┆❏223${prefix}spank 🅕
┆❏224${prefix}tickle 🅕
┆❏225${prefix}avatar 🅕
┆❏226${prefix}feed 🅕
┆❏227${prefix}fox_girl 🅕
┆❏228${prefix}gecg 🅕
┆❏229${prefix}checkme 🅕
┆❏230${prefix}sound1 - sound161 🅕
╰–––––––––––––––༓

╭––『 Random Photo 』
┆❏231${prefix}aesthetic 🅕
┆❏232${prefix}coffee 🅕
┆❏233${prefix}wikimedia 🅕
┆❏234${prefix}wallpaper 🅕
┆❏235${prefix}art 🅕
┆❏236${prefix}bts 🅕
┆❏237${prefix}dogwoof 🅕
┆❏238${prefix}catmeow 🅕
┆❏239${prefix}lizardpic 🅕
┆❏240${prefix}goosebird 🅕
┆❏241${prefix}8ballpool 🅕
┆❏242${prefix}cosplay 🅕
┆❏243${prefix}hacker 🅕
┆❏244${prefix}cyber 🅕
┆❏245${prefix}gamewallpaper 🅕
┆❏246${prefix}islamic 🅕
┆❏247${prefix}jennie 🅕
┆❏248${prefix}jiso 🅕
┆❏249${prefix}satanic 🅕
┆❏250${prefix}justina 🅕
┆❏251${prefix}cartoon 🅕
┆❏252${prefix}pentol 🅕
┆❏253${prefix}cat 🅕
┆❏254${prefix}kpop 🅕
┆❏255${prefix}exo 🅕
┆❏256${prefix}lisa 🅕
┆❏257${prefix}space 🅕
┆❏258${prefix}car 🅕
┆❏259${prefix}technology 🅕
┆❏260${prefix}bike 🅕
┆❏261${prefix}shortquote 🅕
┆❏262${prefix}antiwork 🅕
┆❏263${prefix}hacking 🅕
┆❏264${prefix}boneka 🅕
┆❏265${prefix}rose 🅕
┆❏266${prefix}ryujin 🅕
┆❏267${prefix}ulzzangboy 🅕
┆❏268${prefix}ulzzanggirl 🅕
┆❏269${prefix}wallml 🅕
┆❏270${prefix}wallphone 🅕
┆❏271${prefix}mountain 🅕
┆❏272${prefix}goose 🅕
┆❏273${prefix}profilepic 🅕
┆❏274${prefix}couplepp 🅕
┆❏275${prefix}programming 🅕
┆❏276${prefix}pubg 🅕
┆❏277${prefix}blackpink 🅕
┆❏278${prefix}randomboy 🅕  
┆❏279${prefix}randomgirl 🅕
┆❏280${prefix}hijab 🅕  
┆❏281${prefix}chinese 🅕
┆❏282${prefix}indo 🅕
┆❏283${prefix}japanese 🅕
┆❏284${prefix}korean 🅕
┆❏285${prefix}malay 🅕
┆❏286${prefix}thai 🅕
┆❏287${prefix}vietnamese 🅕
╰–––––––––––––––༓

╭––『 Sticker 』
┆❏288${prefix}goose 🅕
┆❏289${prefix}woof 🅕
┆❏290${prefix}8ball 🅕
┆❏291${prefix}lizard 🅕
┆❏292${prefix}meow 🅕
┆❏293${prefix}gura 🅕
┆❏294${prefix}doge 🅕
┆❏295${prefix}patrick 🅕
┆❏296${prefix}lovestick 🅕
┆❏297${prefix}telestick 🅕
╰–––––––––––––––༓

╭––『 Anime 』
┆❏298${prefix}akira 🅕
┆❏299${prefix}akiyama 🅕
┆❏300${prefix}ana 🅕
┆❏301${prefix}asuna 🅕
┆❏302${prefix}ayuzawa 🅕
┆❏303${prefix}boruto 🅕
┆❏304${prefix}chiho 🅕
┆❏305${prefix}chitoge 🅕
┆❏306${prefix}cosplayloli 🅕
┆❏307${prefix}deidara 🅕
┆❏308${prefix}doraemon 🅕
┆❏309${prefix}elaina 🅕
┆❏310${prefix}emilia 🅕
┆❏311${prefix}erza 🅕
┆❏312${prefix}gremory 🅕
┆❏313${prefix}hestia 🅕
┆❏314${prefix}husbu 🅕
┆❏315${prefix}inori 🅕
┆❏316${prefix}isuzu 🅕
┆❏317${prefix}itachi 🅕
┆❏318${prefix}itori 🅕
┆❏319${prefix}kaga 🅕
┆❏320${prefix}kagura 🅕
┆❏321${prefix}kakasih 🅕
┆❏322${prefix}kaori 🅕
┆❏323${prefix}keneki 🅕
┆❏324${prefix}kotori 🅕
┆❏325${prefix}kurumi 🅕
┆❏326${prefix}loli 🅕
┆❏327${prefix}madara 🅕
┆❏328${prefix}megumin 🅕
┆❏329${prefix}mikasa 🅕
┆❏330${prefix}mikey 🅕
┆❏331${prefix}miku 🅕
┆❏332${prefix}minato 🅕
┆❏333${prefix}naruto 🅕
┆❏334${prefix}neko 🅕
┆❏335${prefix}neko2 🅕
┆❏336${prefix}nekonime 🅕
┆❏337${prefix}nezuko 🅕
┆❏338${prefix}onepiece 🅕
┆❏339${prefix}pokemon 🅕
┆❏340${prefix}randomnime 🅕
┆❏341${prefix}randomnime2 🅕
┆❏342${prefix}rize 🅕
┆❏343${prefix}sagiri 🅕
┆❏344${prefix}sakura 🅕
┆❏345${prefix}sasuke 🅕
┆❏346${prefix}shina 🅕
┆❏347${prefix}shinka 🅕
┆❏348${prefix}shinomiya 🅕
┆❏349${prefix}shizuka 🅕
┆❏350${prefix}shota 🅕
┆❏351${prefix}tejina 🅕
┆❏352${prefix}toukachan 🅕
┆❏353${prefix}tsunade 🅕
┆❏354${prefix}waifu 🅕
┆❏355${prefix}animewall 🅕
┆❏356${prefix}yotsuba 🅕
┆❏357${prefix}yuki 🅕
┆❏358${prefix}yulibocil 🅕
┆❏359${prefix}yumeko 🅕
┆❏360${prefix}8ball 🅕
┆❏361${prefix}tickle 🅕
┆❏362${prefix}gecg 🅕
┆❏363${prefix}feed 🅕
┆❏364${prefix}animeawoo 🅕
┆❏365${prefix}animemegumin 🅕
┆❏366${prefix}animeshinobu 🅕
┆❏367${prefix}animehandhold 🅕
┆❏368${prefix}animehighfive 🅕
┆❏369${prefix}animecringe 🅕
┆❏370${prefix}animedance 🅕
┆❏371${prefix}animehappy 🅕
┆❏372${prefix}animeglomp 🅕
┆❏373${prefix}animeblush 🅕
┆❏374${prefix}animesmug 🅕
┆❏375${prefix}animewave 🅕
┆❏376${prefix}animesmille 🅕
┆❏377${prefix}animepoke 🅕
┆❏378${prefix}animewink 🅕
┆❏379${prefix}animebonk 🅕
┆❏380${prefix}animebully 🅕
┆❏381${prefix}animeyeet 🅕
┆❏382${prefix}animebite 🅕
┆❏383${prefix}animelick 🅕
┆❏384${prefix}animekill 🅕
┆❏385${prefix}animecry 🅕
┆❏386${prefix}animewlp 🅕
┆❏387${prefix}animekiss 🅕
┆❏388${prefix}animehug 🅕
┆❏389${prefix}animeneko 🅕
┆❏390${prefix}animepat 🅕
┆❏391${prefix}animeslap 🅕
┆❏392${prefix}animecuddle 🅕
┆❏393${prefix}animewaifu 🅕
┆❏394${prefix}animenom 🅕
┆❏395${prefix}animefoxgirl 🅕
┆❏396${prefix}animegecg 🅕
┆❏397${prefix}animetickle 🅕
┆❏398${prefix}animefeed 🅕
┆❏399${prefix}animeavatar 🅕
┆❏400${prefix}anime 🅕
┆❏401${prefix}animequote 🅕
┆❏402${prefix}random loli 🅕
┆❏403${prefix}random waifu 🅕
┆❏404${prefix}random neko 🅕
┆❏405${prefix}random zerotwo 🅕
╰–––––––––––––––༓

╭––『 Anime NSFW 』
┆❏406${prefix}hentai 🅕
┆❏407${prefix}gifhentai 🅕
┆❏408${prefix}gifblowjob 🅕
┆❏409${prefix}hentaivid 🅕
┆❏410${prefix}hneko 🅕
┆❏411${prefix}nwaifu 🅕
┆❏412${prefix}animespank 🅕
┆❏413${prefix}trap 🅕
┆❏$414{prefix}gasm 🅕
┆❏415${prefix}ahegao 🅕
┆❏416${prefix}ass 🅕
┆❏417${prefix}bdsm 🅕
┆❏418${prefix}blowjob 🅕
┆❏$419{prefix}cuckold 🅕
┆❏420${prefix}cum 🅕
┆❏421${prefix}milf 🅕
┆❏422${prefix}eba 🅕
┆❏423${prefix}ero 🅕
┆❏424${prefix}femdom 🅕
┆❏425${prefix}foot 🅕
┆❏426${prefix}gangbang 🅕
┆❏427${prefix}glasses 🅕
┆❏428${prefix}jahy 🅕
┆❏429${prefix}masturbation 🅕
┆❏430${prefix}manga 🅕
┆❏431${prefix}neko-hentai 🅕
┆❏432${prefix}neko-hentai2 🅕
┆❏433${prefix}nsfwloli 🅕
┆❏434${prefix}orgy 🅕
┆❏435${prefix}panties 🅕 
┆❏436${prefix}pussy 🅕
┆❏437${prefix}tentacles 🅕
┆❏438${prefix}thighs 🅕
┆❏439${prefix}yuri 🅕
┆❏440${prefix}zettai 🅕
╰–––––––––––––––༓

╭––『 PhotoOxy Maker 』
┆❏441${prefix}shadow 🅕 
┆❏442${prefix}write 🅕 
┆❏443${prefix}romantic 🅕 
┆❏444${prefix}burnpaper 🅕
┆❏445${prefix}smoke 🅕 
┆❏446${prefix}narutobanner 🅕 
┆❏447${prefix}love 🅕 
┆❏448${prefix}undergrass 🅕
┆❏449${prefix}doublelove 🅕 
┆❏450${prefix}coffecup 🅕
┆❏451${prefix}underwaterocean 🅕
┆❏452${prefix}smokyneon 🅕
┆❏453${prefix}starstext 🅕
┆❏454${prefix}rainboweffect 🅕
┆❏455${prefix}balloontext 🅕
┆❏456${prefix}metalliceffect 🅕
┆❏457${prefix}embroiderytext 🅕
┆❏458${prefix}flamingtext 🅕
┆❏459${prefix}stonetext 🅕
┆❏460${prefix}writeart 🅕
┆❏461${prefix}summertext 🅕
┆❏462${prefix}wolfmetaltext 🅕
┆❏463${prefix}nature3dtext 🅕
┆❏464${prefix}rosestext 🅕
┆❏465${prefix}naturetypography 🅕
┆❏466${prefix}quotesunder 🅕
┆❏467${prefix}shinetext 🅕
╰–––––––––––––––༓

╭––『 Ephoto360 Maker 』
┆❏468${prefix}glitchtext 🅕
┆❏469${prefix}writetext 🅕
┆❏470${prefix}advancedglow 🅕
┆❏471${prefix}typographytext 🅕
┆❏472${prefix}pixelglitch 🅕
┆❏${prefix}neonglitch 🅕
┆❏${prefix}flagtext 🅕
┆❏${prefix}flag3dtext 🅕
┆❏${prefix}deletingtext 🅕
┆❏${prefix}blackpinkstyle 🅕
┆❏${prefix}glowingtext 🅕
┆❏${prefix}underwatertext 🅕
┆❏${prefix}logomaker 🅕
┆❏${prefix}cartoonstyle 🅕
┆❏${prefix}papercutstyle 🅕
┆❏${prefix}watercolortext 🅕
┆❏${prefix}effectclouds 🅕
┆❏${prefix}blackpinklogo 🅕
┆❏${prefix}gradienttext 🅕
┆❏${prefix}summerbeach 🅕
┆❏${prefix}luxurygold 🅕
┆❏${prefix}multicoloredneon 🅕
┆❏${prefix}sandsummer 🅕
┆❏${prefix}galaxywallpaper 🅕
┆❏${prefix}1917style 🅕
┆❏${prefix}makingneon 🅕
┆❏${prefix}royaltext 🅕
┆❏${prefix}freecreate 🅕
┆❏${prefix}galaxystyle 🅕
┆❏${prefix}lighteffects 🅕
╰–––––––––––––––༓

╭––『 Database 』
┆❏${prefix}setcmd 🅕
┆❏${prefix}delcmd 🅕
┆❏${prefix}listcmd 🅕
┆❏${prefix}lockcmd 🅕
┆❏${prefix}addmsg 🅕
┆❏${prefix}delmsg 🅕
┆❏${prefix}getmsg 🅕
┆❏${prefix}listmsg 🅕
╰–––––––––––––––༓

╭––『 Bug & War 』
┆❏${prefix}amountbug 🅟
┆❏${prefix}pmbug 🅟
┆❏${prefix}delaybug 🅟
┆❏${prefix}docubug 🅟
┆❏${prefix}unlimitedbug 🅟
┆❏${prefix}bombug 🅟
┆❏${prefix}lagbug 🅟
┆❏${prefix}trollybug 🅟
┆❏${prefix}gcbug 🅟
┆❏${prefix}delaygcbug 🅟
┆❏${prefix}laggcbug 🅟
┆❏${prefix}bomgcbug 🅟
┆❏${prefix}unlimitedgcbug 🅟
┆❏${prefix}trollygcbug 🅟
┆❏${prefix}docugcbug 🅟
┆❏${prefix}verif 🅟
┆❏${prefix}banv1 🅟
┆❏${prefix}banv2 🅟
┆❏${prefix}banv3 🅟
┆❏${prefix}banv4 🅟
┆❏${prefix}banv5 🅟
┆❏${prefix}banv6 🅟
┆❏${prefix}unbanv1 🅟
┆❏${prefix}unbanv2 🅟
┆❏${prefix}unbanv3 🅟
┆❏${prefix}unbanv4 🅟
┆❏${prefix}unbanv5 🅟
╰–––––––––––––––༓

╭––『 Other Menu 』
┆❏${prefix}ping 🅕
┆❏${prefix}menu 🅕
┆❏${prefix}myip 🅕
┆❏${prefix}repo 🅕
┆❏${prefix}reportbug 🅕
┆❏${prefix}listprem 🅕
┆❏${prefix}listowner 🅕
┆❏${prefix}liststicker 🅕
┆❏${prefix}listimage 🅕
┆❏${prefix}listvideo 🅕
┆❏${prefix}listvn 🅕
┆❏${prefix}listapk 🅕
┆❏${prefix}listzip 🅕
┆❏${prefix}listpdf 🅕
┆❏${prefix}listbadword 🅕
┆❏${prefix}listpc 🅕
┆❏${prefix}listgc 🅕
┆❏${prefix}idgroup 🅕
┆❏${prefix}owner 🅕
┆❏${prefix}rentbot 🅕
┆❏${prefix}donate 🅕
┆❏${prefix}friend 🅕
┆❏${prefix}obfuscate 🅕
┆❏${prefix}styletext 🅕
┆❏${prefix}fliptext 🅕
┆❏${prefix}tts 🅕
┆❏${prefix}say 🅕
┆❏${prefix}togif 🅕
┆❏${prefix}toqr 🅕
┆❏${prefix}bass 🅕
┆❏${prefix}blown 🅕
┆❏${prefix}deep 🅕
┆❏${prefix}earrape 🅕
┆❏${prefix}fast 🅕
┆❏${prefix}fat 🅕
┆❏${prefix}nightcore 🅕
┆❏${prefix}reverse 🅕
┆❏${prefix}robot 🅕
┆❏${prefix}slow 🅕
┆❏${prefix}smooth 🅕
┆❏${prefix}squirrel 🅕
┆❏${prefix}tinyurl 🅕
┆❏${prefix}tovn 🅕
┆❏${prefix}toaudio 🅕
┆❏${prefix}tomp3 🅕
┆❏${prefix}tomp4🅕
┆❏${prefix}toimg 🅕
┆❏${prefix}toonce 🅕
┆❏${prefix}sticker 🅕
┆❏${prefix}take 🅟
┆❏${prefix}emoji 🅕
┆❏${prefix}volaudio 🅕
┆❏${prefix}volvideo 🅕
┆❏${prefix}ebinary 🅕
┆❏${prefix}dbinary 🅕
┆❏${prefix}ssweb 🅕
┆❏${prefix}quoted 🅕
┆❏${prefix}runtime 🅕
┆❏${prefix}checkaccount 🅕
┆❏${prefix}translate 🅕
┆❏${prefix}quran 🅕
┆❏${prefix}bible 🅕
╰–––––––––––––––༓
`}

global.animemenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Anime 』
┆❏${prefix}akira 🅕
┆❏${prefix}akiyama 🅕
┆❏${prefix}ana 🅕
┆❏${prefix}asuna 🅕
┆❏${prefix}ayuzawa 🅕
┆❏${prefix}boruto 🅕
┆❏${prefix}chiho 🅕
┆❏${prefix}chitoge 🅕
┆❏${prefix}cosplayloli 🅕
┆❏${prefix}cosplaysagiri 🅕
┆❏${prefix}deidara 🅕
┆❏${prefix}doraemon 🅕
┆❏${prefix}elaina 🅕
┆❏${prefix}emilia 🅕
┆❏${prefix}erza 🅕
┆❏${prefix}gremory 🅕
┆❏${prefix}hestia 🅕
┆❏${prefix}husbu 🅕
┆❏${prefix}inori 🅕
┆❏${prefix}isuzu 🅕
┆❏${prefix}itachi 🅕
┆❏${prefix}itori 🅕
┆❏${prefix}kaga 🅕
┆❏${prefix}kagura 🅕
┆❏${prefix}kakasih 🅕
┆❏${prefix}kaori 🅕
┆❏${prefix}keneki 🅕
┆❏${prefix}kotori 🅕
┆❏${prefix}kurumi 🅕
┆❏${prefix}loli 🅕
┆❏${prefix}madara 🅕
┆❏${prefix}megumin 🅕
┆❏${prefix}mikasa 🅕
┆❏${prefix}mikey 🅕
┆❏${prefix}miku 🅕
┆❏${prefix}minato 🅕
┆❏${prefix}naruto 🅕
┆❏${prefix}neko 🅕
┆❏${prefix}neko2 🅕
┆❏${prefix}nekonime 🅕
┆❏${prefix}nezuko 🅕
┆❏${prefix}onepiece 🅕
┆❏${prefix}pokemon 🅕
┆❏${prefix}randomnime 🅕
┆❏${prefix}randomnime2 🅕
┆❏${prefix}rize 🅕
┆❏${prefix}sagiri 🅕
┆❏${prefix}sakura 🅕
┆❏${prefix}sasuke 🅕
┆❏${prefix}shina 🅕
┆❏${prefix}shinka 🅕
┆❏${prefix}shinomiya 🅕
┆❏${prefix}shizuka 🅕
┆❏${prefix}shota 🅕
┆❏${prefix}tejina 🅕
┆❏${prefix}toukachan 🅕
┆❏${prefix}tsunade 🅕
┆❏${prefix}waifu 🅕
┆❏${prefix}animewall 🅕
┆❏${prefix}yotsuba 🅕
┆❏${prefix}yuki 🅕
┆❏${prefix}yulibocil 🅕
┆❏${prefix}yumeko 🅕
┆❏${prefix}8ball 🅕
┆❏${prefix}tickle 🅕
┆❏${prefix}gecg 🅕
┆❏${prefix}feed 🅕
┆❏${prefix}animeawoo 🅕
┆❏${prefix}animemegumin 🅕
┆❏${prefix}animeshinobu 🅕
┆❏${prefix}animehandhold 🅕
┆❏${prefix}animehighfive 🅕
┆❏${prefix}animecringe 🅕
┆❏${prefix}animedance 🅕
┆❏${prefix}animehappy 🅕
┆❏${prefix}animeglomp 🅕
┆❏${prefix}animeblush 🅕
┆❏${prefix}animesmug 🅕
┆❏${prefix}animewave 🅕
┆❏${prefix}animesmille 🅕
┆❏${prefix}animepoke 🅕
┆❏${prefix}animewink 🅕
┆❏${prefix}animebonk 🅕
┆❏${prefix}animebully 🅕
┆❏${prefix}animeyeet 🅕
┆❏${prefix}animebite 🅕
┆❏${prefix}animelick 🅕
┆❏${prefix}animekill 🅕
┆❏${prefix}animecry 🅕
┆❏${prefix}animewlp 🅕
┆❏${prefix}animekiss 🅕
┆❏${prefix}animehug 🅕
┆❏${prefix}animeneko 🅕
┆❏${prefix}animepat 🅕
┆❏${prefix}animeslap 🅕
┆❏${prefix}animecuddle 🅕
┆❏${prefix}animewaifu 🅕
┆❏${prefix}animenom 🅕
┆❏${prefix}animefoxgirl 🅕
┆❏${prefix}animegecg 🅕
┆❏${prefix}animetickle 🅕
┆❏${prefix}animefeed 🅕
┆❏${prefix}animeavatar 🅕
┆❏${prefix}anime 🅕
┆❏${prefix}animequote 🅕
┆❏${prefix}random loli 🅕
┆❏${prefix}random waifu 🅕
┆❏${prefix}random neko 🅕
┆❏${prefix}random zerotwo 🅕
╰–––––––––––––––༓
`}

global.ownermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Owner Menu 』
┆❏${prefix}autoread 🅞
┆❏${prefix}autobio 🅞
┆❏${prefix}autotype 🅞
┆❏${prefix}unavailable 🅞
┆❏${prefix}autorecord 🅞
┆❏${prefix}autorecordtype 🅞
┆❏${prefix}autoswview 🅞
┆❏${prefix}setautoblock 🅞
┆❏${prefix}setantiforeign 🅞
┆❏${prefix}autoblock 🅞
┆❏${prefix}onlygc 🅞
┆❏${prefix}onlypc 🅞
┆❏${prefix}onlyindia 🅞
┆❏${prefix}onlyindo 🅞
┆❏${prefix}anticall 🅞
┆❏${prefix}self 🅞
┆❏${prefix}public 🅞
┆❏${prefix}join 🅞
┆❏${prefix}poll 🅞
┆❏${prefix}bc 🅞
┆❏${prefix}bcgroup 🅞
┆❏${prefix}setmenu 🅞
┆❏${prefix}setimgmenu 🅞
┆❏${prefix}setvidmenu 🅞
┆❏${prefix}setgifmenu 🅞
┆❏${prefix}setreply 🅞
┆❏${prefix}setprefix 🅞
┆❏${prefix}addlimit 🅞
┆❏${prefix}dellimit 🅞
┆❏${prefix}resethit 🅞
┆❏${prefix}resetuser 🅞
┆❏${prefix}creategc 🅞
┆❏${prefix}userjid 🅞
┆❏${prefix}setexif 🅞
┆❏${prefix}setbotbio 🅞
┆❏${prefix}delppbot 🅞
┆❏${prefix}shutdown 🅞
┆❏${prefix}setppbot 🅞
┆❏${prefix}addprem 🅞
┆❏${prefix}delprem 🅞
┆❏${prefix}addowner 🅞
┆❏${prefix}delowner 🅞
┆❏${prefix}addvn 🅞
┆❏${prefix}addapk 🅞
┆❏${prefix}addzip 🅞
┆❏${prefix}addpdf 🅞
┆❏${prefix}delapk 🅞
┆❏${prefix}delzip 🅞
┆❏${prefix}delpdf 🅞
┆❏${prefix}delvn 🅞
┆❏${prefix}addsticker 🅞
┆❏${prefix}delsticker 🅞
┆❏${prefix}addimage 🅞
┆❏${prefix}delimage 🅞
┆❏${prefix}addvideo 🅞
┆❏${prefix}delvideo 🅞
┆❏${prefix}addtitle 🅞
┆❏${prefix}deltitle 🅞
┆❏${prefix}upswtext 🅞
┆❏${prefix}upswvideo 🅞
┆❏${prefix}upswimage 🅞
┆❏${prefix}upswaudio 🅞
┆❏${prefix}block 🅞
┆❏${prefix}unblock 🅞
┆❏${prefix}leavegc 🅞
┆❏${prefix}pushcontact 🅞
┆❏${prefix}pushcontactv2 🅞
╰–––––––––––––––༓
`}

global.othermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Other Menu 』
┆❏${prefix}ping 🅕
┆❏${prefix}menu 🅕
┆❏${prefix}myip 🅕
┆❏${prefix}repo 🅕
┆❏${prefix}reportbug 🅕
┆❏${prefix}listprem 🅕
┆❏${prefix}listowner 🅕
┆❏${prefix}liststicker 🅕
┆❏${prefix}listimage 🅕
┆❏${prefix}listvideo 🅕
┆❏${prefix}listvn 🅕
┆❏${prefix}listapk 🅕
┆❏${prefix}listzip 🅕
┆❏${prefix}listpdf 🅕
┆❏${prefix}listbadword 🅕
┆❏${prefix}listpc 🅕
┆❏${prefix}listgc 🅕
┆❏${prefix}isgroup 🅕
┆❏${prefix}owner 🅕
┆❏${prefix}rentbot 🅕
┆❏${prefix}donate 🅕
┆❏${prefix}friend 🅕
┆❏${prefix}obfuscate 🅕
┆❏${prefix}styletext 🅕
┆❏${prefix}fliptext 🅕
┆❏${prefix}tts 🅕
┆❏${prefix}say 🅕
┆❏${prefix}togif 🅕
┆❏${prefix}toqr 🅕
┆❏${prefix}bass 🅕
┆❏${prefix}blown 🅕
┆❏${prefix}deep 🅕
┆❏${prefix}earrape 🅕
┆❏${prefix}fast 🅕
┆❏${prefix}fat 🅕
┆❏${prefix}nightcore 🅕
┆❏${prefix}reverse 🅕
┆❏${prefix}robot 🅕
┆❏${prefix}slow 🅕
┆❏${prefix}smooth 🅕
┆❏${prefix}squirrel 🅕
┆❏${prefix}tinyurl 🅕
┆❏${prefix}tovn 🅕
┆❏${prefix}toaudio 🅕
┆❏${prefix}tomp3 🅕
┆❏${prefix}tomp4🅕
┆❏${prefix}toimg 🅕
┆❏${prefix}toonce 🅕
┆❏${prefix}sticker 🅕
┆❏${prefix}take 🅟
┆❏${prefix}emoji 🅕
┆❏${prefix}volaudio 🅕
┆❏${prefix}volvideo 🅕
┆❏${prefix}ebinary 🅕
┆❏${prefix}dbinary 🅕
┆❏${prefix}ssweb 🅕
┆❏${prefix}quoted 🅕
┆❏${prefix}checkaccount 🅕
┆❏${prefix}runtime 🅕
┆❏${prefix}translate 🅕
┆❏${prefix}quran 🅕
┆❏${prefix}bible 🅕
╰–––––––––––––––༓
`}

global.downloadmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Download Menu 』
┆❏${prefix}ytsearch 🅕
┆❏${prefix}play 🅕
┆❏${prefix}ytmp3 🅕
┆❏${prefix}ytmp4 🅕
┆❏${prefix}tiktokaudio 🅕
┆❏${prefix}tiktok 🅕
┆❏${prefix}igvideo 🅕
┆❏${prefix}igimage 🅕
┆❏${prefix}facebook 🅕
┆❏${prefix}mediafire 🅕
┆❏${prefix}apk 🅕
┆❏${prefix}google 🅕
┆❏${prefix}imdb 🅕
┆❏${prefix}weather 🅕
┆❏${prefix}wanumber 🅕
┆❏${prefix}spotify 🅟
┆❏${prefix}gitclone 🅕
┆❏${prefix}happymod 🅕
┆❏${prefix}gdrive 🅕
┆❏${prefix}pinterest 🅕
┆❏${prefix}ringtone 🅕
╰–––––––––––––––༓
`}

global.groupmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Group Menu 』
┆❏${prefix}antibot 🅖
┆❏${prefix}antiviewonce 🅖
┆❏${prefix}welcome 🅖
┆❏${prefix}adminevent 🅖
┆❏${prefix}groupevent 🅖
┆❏${prefix}antiforeign 🅖
┆❏${prefix}antimedia 🅖
┆❏${prefix}antiaudio 🅖
┆❏${prefix}antivideo 🅖
┆❏${prefix}antiimage 🅖
┆❏${prefix}antidocument 🅖
┆❏${prefix}antilocation 🅖
┆❏${prefix}anticontact 🅖
┆❏${prefix}antisticker 🅖
┆❏${prefix}antipoll 🅖
┆❏${prefix}antilink 🅖
┆❏${prefix}antilinkgc 🅖
┆❏${prefix}antivirtex 🅖
┆❏${prefix}grouplink 🅖
┆❏${prefix}listadmin 🅖
┆❏${prefix}invite 🅖
┆❏${prefix}ephemeral 🅖
┆❏${prefix}delete 🅖
┆❏${prefix}setppgroup 🅖
┆❏${prefix}delppgroup 🅖
┆❏${prefix}setnamegc 🅖
┆❏${prefix}setdesc 🅖
┆❏${prefix}add 🅖
┆❏${prefix}kick 🅖
┆❏${prefix}promote 🅖
┆❏${prefix}demote 🅖
┆❏${prefix}getcontact 🅞
┆❏${prefix}savecontact 🅞
┆❏${prefix}sendcontact 🅞
┆❏${prefix}contactag 🅞
┆❏${prefix}hidetag 🅖
┆❏${prefix}totag 🅖
┆❏${prefix}tagall 🅖
┆❏${prefix}editinfo 🅖
┆❏${prefix}opentime 🅖
┆❏${prefix}closetime 🅖
┆❏${prefix}resetlink 🅖
┆❏${prefix}getbio 🅖
┆❏${prefix}vote 🅖
┆❏${prefix}upvote 🅖
┆❏${prefix}downvote 🅖
┆❏${prefix}checkvote 🅖
┆❏${prefix}delvote 🅖
┆❏${prefix}autostickergc 🅖
┆❏${prefix}antivirus 🅖
┆❏${prefix}antitoxic 🅖
┆❏${prefix}nsfw 🅖
┆❏${prefix}react 🅖
╰–––––––––––––––༓
`}

global.funmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Fun Menu 』
┆❏${prefix}define 🅕
┆❏${prefix}lyrics 🅕
┆❏${prefix}tictactoe 🅕
┆❏${prefix}suit 🅕
┆❏${prefix}math 🅕
┆❏${prefix}fact 🅕
┆❏${prefix}truth 🅕
┆❏${prefix}dare 🅕
┆❏${prefix}couple 🅕
┆❏${prefix}soulmate 🅕
┆❏${prefix}stupidcheck 🅕
┆❏${prefix}handsomecheck 🅕
┆❏${prefix}uncleancheck 🅕
┆❏${prefix}hotcheck 🅕
┆❏${prefix}smartcheck 🅕
┆❏${prefix}greatcheck 🅕
┆❏${prefix}evilcheck 🅕
┆❏${prefix}dogcheck 🅕
┆❏${prefix}coolcheck 🅕
┆❏${prefix}waifucheck 🅕
┆❏${prefix}awesomecheck 🅕
┆❏${prefix}gaycheck 🅕
┆❏${prefix}cutecheck 🅕
┆❏${prefix}lesbiancheck 🅕
┆❏${prefix}hornycheck 🅕
┆❏${prefix}prettycheck 🅕
┆❏${prefix}lovelycheck 🅕
┆❏${prefix}uglycheck 🅕
┆❏${prefix}pick 🅕
┆❏${prefix}pickupline 🅕
┆❏${prefix}quotes 🅕
┆❏${prefix}can 🅕
┆❏${prefix}is 🅕
┆❏${prefix}when 🅕
┆❏${prefix}where 🅕
┆❏${prefix}what 🅕
┆❏${prefix}how 🅕
┆❏${prefix}rate 🅕
┆❏${prefix}cry 🅕
┆❏${prefix}kill 🅕
┆❏${prefix}hug 🅕
┆❏${prefix}pat 🅕
┆❏${prefix}lick 🅕 
┆❏${prefix}kiss 🅕
┆❏${prefix}bite 🅕
┆❏${prefix}yeet 🅕
┆❏${prefix}bully 🅕
┆❏${prefix}bonk 🅕
┆❏${prefix}wink 🅕
┆❏${prefix}poke 🅕
┆❏${prefix}nom 🅕
┆❏${prefix}slap 🅕
┆❏${prefix}smile 🅕 
┆❏${prefix}wave 🅕
┆❏${prefix}awoo 🅕
┆❏${prefix}blush 🅕
┆❏${prefix}smug 🅕
┆❏${prefix}glomp 🅕 
┆❏${prefix}happy 🅕
┆❏${prefix}dance 🅕
┆❏${prefix}cringe 🅕
┆❏${prefix}cuddle 🅕
┆❏${prefix}highfive 🅕 
┆❏${prefix}shinobu 🅕
┆❏${prefix}handhold 🅕
┆❏${prefix}spank 🅕
┆❏${prefix}tickle 🅕
┆❏${prefix}avatar 🅕
┆❏${prefix}feed 🅕
┆❏${prefix}fox_girl 🅕
┆❏${prefix}gecg 🅕
┆❏${prefix}checkme 🅕
┆❏${prefix}sound1 - sound161 🅕
╰–––––––––––––––༓
`}

global.stalkermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Stalker 』
┆❏${prefix}igstalk 🅕
┆❏${prefix}tiktokstalk 🅕
┆❏${prefix}mlstalk 🅕
┆❏${prefix}npmstalk 🅕
┆❏${prefix}ghstalk 🅕
╰–––––––––––––––༓
`}

global.stickermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Sticker 』
┆❏${prefix}goose 🅕
┆❏${prefix}woof 🅕
┆❏${prefix}8ball 🅕
┆❏${prefix}lizard 🅕
┆❏${prefix}meow 🅕
┆❏${prefix}gura 🅕
┆❏${prefix}doge 🅕
┆❏${prefix}patrick 🅕
┆❏${prefix}lovestick 🅕
┆❏${prefix}telestick 🅕
╰–––––––––––––––༓
`}

global.databasemenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Database 』
┆❏${prefix}setcmd 🅕
┆❏${prefix}delcmd 🅕
┆❏${prefix}listcmd 🅕
┆❏${prefix}lockcmd 🅕
┆❏${prefix}addmsg 🅕
┆❏${prefix}delmsg 🅕
┆❏${prefix}getmsg 🅕
┆❏${prefix}listmsg 🅕
╰–––––––––––––––༓
`}

global.aimenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 OpenAI 』
┆❏${prefix}openai 🅕
┆❏${prefix}dalle 🅕
┆❏${prefix}ai 🅕
┆❏${prefix}remini 🅕
╰–––––––––––––––༓
`}

global.bugmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Bug & War 』
┆❏${prefix}amountbug 🅟
┆❏${prefix}pmbug 🅟
┆❏${prefix}delaybug 🅟
┆❏${prefix}docubug 🅟
┆❏${prefix}unlimitedbug 🅟
┆❏${prefix}bombug 🅟
┆❏${prefix}lagbug 🅟
┆❏${prefix}trollybug 🅟
┆❏${prefix}gcbug 🅟
┆❏${prefix}delaygcbug 🅟
┆❏${prefix}laggcbug 🅟
┆❏${prefix}bomgcbug 🅟
┆❏${prefix}unlimitedgcbug 🅟
┆❏${prefix}trollygcbug 🅟
┆❏${prefix}docugcbug 🅟
┆❏${prefix}verif 🅟
┆❏${prefix}banv1 🅟
┆❏${prefix}banv2 🅟
┆❏${prefix}banv3 🅟
┆❏${prefix}banv4 🅟
┆❏${prefix}banv5 🅟
┆❏${prefix}banv6 🅟
┆❏${prefix}unbanv1 🅟
┆❏${prefix}unbanv2 🅟
┆❏${prefix}unbanv3 🅟
┆❏${prefix}unbanv4 🅟
┆❏${prefix}unbanv5 🅟
╰–––––––––––––––༓
`}

global.randphotomenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Random Photo 』
┆❏${prefix}aesthetic 🅕
┆❏${prefix}coffee 🅕
┆❏${prefix}wikimedia 🅕
┆❏${prefix}wallpaper 🅕
┆❏${prefix}art 🅕
┆❏${prefix}bts 🅕
┆❏${prefix}dogwoof 🅕
┆❏${prefix}catmeow 🅕
┆❏${prefix}lizardpic 🅕
┆❏${prefix}goosebird 🅕
┆❏${prefix}8ballpool 🅕
┆❏${prefix}cosplay 🅕
┆❏${prefix}hacker 🅕
┆❏${prefix}cyber 🅕
┆❏${prefix}gamewallpaper 🅕
┆❏${prefix}islamic 🅕
┆❏${prefix}jennie 🅕
┆❏${prefix}jiso 🅕
┆❏${prefix}satanic 🅕
┆❏${prefix}justina 🅕
┆❏${prefix}cartoon 🅕
┆❏${prefix}pentol 🅕
┆❏${prefix}cat 🅕
┆❏${prefix}kpop 🅕
┆❏${prefix}exo 🅕
┆❏${prefix}lisa 🅕
┆❏${prefix}space 🅕
┆❏${prefix}car 🅕
┆❏${prefix}technology 🅕
┆❏${prefix}bike 🅕
┆❏${prefix}shortquote 🅕
┆❏${prefix}antiwork 🅕
┆❏${prefix}hacking 🅕
┆❏${prefix}boneka 🅕
┆❏${prefix}rose 🅕
┆❏${prefix}ryujin 🅕
┆❏${prefix}ulzzangboy 🅕
┆❏${prefix}ulzzanggirl 🅕
┆❏${prefix}wallml 🅕
┆❏${prefix}wallphone 🅕
┆❏${prefix}mountain 🅕
┆❏${prefix}goose 🅕
┆❏${prefix}profilepic 🅕
┆❏${prefix}couplepp 🅕
┆❏${prefix}programming 🅕
┆❏${prefix}pubg 🅕
┆❏${prefix}blackpink 🅕
┆❏${prefix}randomboy 🅕  
┆❏${prefix}randomgirl 🅕
┆❏${prefix}hijab 🅕  
┆❏${prefix}chinese 🅕
┆❏${prefix}indo 🅕
┆❏${prefix}japanese 🅕
┆❏${prefix}korean 🅕
┆❏${prefix}malay 🅕
┆❏${prefix}thai 🅕
┆❏${prefix}vietnamese 🅕
╰–––––––––––––––༓
`}

global.randvideomenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Random Video 』
┆❏${prefix}tiktokgirl 🅕
┆❏${prefix}tiktoknukthy 🅕
┆❏${prefix}tiktokkayes 🅕
┆❏${prefix}tiktokpanrika 🅕
┆❏${prefix}tiktoknotnot 🅕
┆❏${prefix}tiktokghea 🅕
┆❏${prefix}tiktoksantuy 🅕
┆❏${prefix}tiktokbocil 🅕
╰–––––––––––––––༓
`}

global.photooxymenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 PhotoOxy Maker 』
┆❏${prefix}shadow 🅕 
┆❏${prefix}write 🅕 
┆❏${prefix}romantic 🅕 
┆❏${prefix}burnpaper 🅕
┆❏${prefix}smoke 🅕 
┆❏${prefix}narutobanner 🅕 
┆❏${prefix}love 🅕 
┆❏${prefix}undergrass 🅕
┆❏${prefix}doublelove 🅕 
┆❏${prefix}coffecup 🅕
┆❏${prefix}underwaterocean 🅕
┆❏${prefix}smokyneon 🅕
┆❏${prefix}starstext 🅕
┆❏${prefix}rainboweffect 🅕
┆❏${prefix}balloontext 🅕
┆❏${prefix}metalliceffect 🅕
┆❏${prefix}embroiderytext 🅕
┆❏${prefix}flamingtext 🅕
┆❏${prefix}stonetext 🅕
┆❏${prefix}writeart 🅕
┆❏${prefix}summertext 🅕
┆❏${prefix}wolfmetaltext 🅕
┆❏${prefix}nature3dtext 🅕
┆❏${prefix}rosestext 🅕
┆❏${prefix}naturetypography 🅕
┆❏${prefix}quotesunder 🅕
┆❏${prefix}shinetext 🅕
╰–––––––––––––––༓
`}

global.ephoto360menu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Ephoto360 Maker 』
┆❏${prefix}glitchtext 🅕
┆❏${prefix}writetext 🅕
┆❏${prefix}advancedglow 🅕
┆❏${prefix}typographytext 🅕
┆❏${prefix}pixelglitch 🅕
┆❏${prefix}neonglitch 🅕
┆❏${prefix}flagtext 🅕
┆❏${prefix}flag3dtext 🅕
┆❏${prefix}deletingtext 🅕
┆❏${prefix}blackpinkstyle 🅕
┆❏${prefix}glowingtext 🅕
┆❏${prefix}underwatertext 🅕
┆❏${prefix}logomaker 🅕
┆❏${prefix}cartoonstyle 🅕
┆❏${prefix}papercutstyle 🅕
┆❏${prefix}watercolortext 🅕
┆❏${prefix}effectclouds 🅕
┆❏${prefix}blackpinklogo 🅕
┆❏${prefix}gradienttext 🅕
┆❏${prefix}summerbeach 🅕
┆❏${prefix}luxurygold 🅕
┆❏${prefix}multicoloredneon 🅕
┆❏${prefix}sandsummer 🅕
┆❏${prefix}galaxywallpaper 🅕
┆❏${prefix}1917style 🅕
┆❏${prefix}makingneon 🅕
┆❏${prefix}royaltext 🅕
┆❏${prefix}freecreate 🅕
┆❏${prefix}galaxystyle 🅕
┆❏${prefix}lighteffects 🅕
╰–––––––––––––––༓
`}

global.nsfwmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Anime NSFW 』
┆❏${prefix}hentai 🅕
┆❏${prefix}gifhentai 🅕
┆❏${prefix}gifblowjob 🅕
┆❏${prefix}hentaivid 🅕
┆❏${prefix}hneko 🅕
┆❏${prefix}nwaifu 🅕
┆❏${prefix}animespank 🅕
┆❏${prefix}trap 🅕
┆❏${prefix}gasm 🅕
┆❏${prefix}ahegao 🅕
┆❏${prefix}ass 🅕
┆❏${prefix}bdsm 🅕
┆❏${prefix}blowjob 🅕
┆❏${prefix}cuckold 🅕
┆❏${prefix}cum 🅕
┆❏${prefix}milf 🅕
┆❏${prefix}eba 🅕
┆❏${prefix}ero 🅕
┆❏${prefix}femdom 🅕
┆❏${prefix}foot 🅕
┆❏${prefix}gangbang 🅕
┆❏${prefix}glasses 🅕
┆❏${prefix}jahy 🅕
┆❏${prefix}masturbation 🅕
┆❏${prefix}manga 🅕
┆❏${prefix}neko-hentai 🅕
┆❏${prefix}neko-hentai2 🅕
┆❏${prefix}nsfwloli 🅕
┆❏${prefix}orgy 🅕
┆❏${prefix}panties 🅕 
┆❏${prefix}pussy 🅕
┆❏${prefix}tentacles 🅕
┆❏${prefix}thighs 🅕
┆❏${prefix}yuri 🅕
┆❏${prefix}zettai 🅕
╰–––––––––––––––༓
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})