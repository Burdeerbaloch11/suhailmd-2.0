const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_29_12_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA0OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDMyLFxuICAgICAgICA2MyxcbiAgICAgICAgNDksXG4gICAgICAgIDUzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5LFxuICAgICAgICA2NixcbiAgICAgICAgODAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDg0LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExLFxuICAgICAgICA5NixcbiAgICAgICAgMTY0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzksXG4gICAgICAgIDUzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIsXG4gICAgICAgIDQyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDgzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk0LFxuICAgICAgICA4NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTExLFxuICAgICAgICA4MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU4LFxuICAgICAgICA4OSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMixcbiAgICAgICAgODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDU4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDM2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE5LFxuICAgICAgICA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMVdLSVFDQkFDUVo3aWtkcEVzeGg4T2g4a2ZYSTU1WHhsL2dwUVlaRkFOUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib3M0aVFCZ05TRjI3bHVkRkk5RC1TUVwiLFxuICBcInBob25lSWRcIjogXCJiYTQ3M2M1NC1iMDY1LTQ3MTAtYWNjMy00OTQ2Y2QwYjYzYjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgMTMxLFxuICAgICAgNDksXG4gICAgICAxNjQsXG4gICAgICA1NyxcbiAgICAgIDExNCxcbiAgICAgIDE5NyxcbiAgICAgIDIwNCxcbiAgICAgIDE2MCxcbiAgICAgIDIzMyxcbiAgICAgIDEzMixcbiAgICAgIDE0OSxcbiAgICAgIDY1LFxuICAgICAgOTAsXG4gICAgICAyNTAsXG4gICAgICA0OSxcbiAgICAgIDYwLFxuICAgICAgNDAsXG4gICAgICAxMzIsXG4gICAgICA5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzksXG4gICAgICAyMjAsXG4gICAgICA2NyxcbiAgICAgIDEyNSxcbiAgICAgIDE3NixcbiAgICAgIDE4NCxcbiAgICAgIDg5LFxuICAgICAgMSxcbiAgICAgIDUwLFxuICAgICAgMjI5LFxuICAgICAgNDUsXG4gICAgICA1NCxcbiAgICAgIDQ4LFxuICAgICAgNixcbiAgICAgIDUwLFxuICAgICAgMjEzLFxuICAgICAgMTU0LFxuICAgICAgMTcyLFxuICAgICAgMTc2LFxuICAgICAgMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVFFWRlo1QTVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEzOTM5NDIxMDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQmFsb2NoXCIsXG4gICAgXCJsaWRcIjogXCI2MDc0MDA4MTg1NjY4NDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BTeGpQd0RFSU9ocjdzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRWoxYjdPZlpKNWU3U1ZBWHFEempNU2phUUQrbHVOYzFhR1BZa2cvQ2gzOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ3YXB3b2dkQlBzRzhlT1Q0N1pLWW1WOUx5N0ZqN1dJUTM2TXFoLzBGSFFoRFYyaGVYQ0FVUHY1aFFyQ2kvRDZYK09STFBVTGx4Y2tjQmhqSFh1SElDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBZkZvTEZQR3lBTmgyUjRKUFlvaFBUcEU4VzJ4RnliazQ4LzRVWTYyeDAxblkxV0lFVWxyTVBVMXVmZ0loWHhjTXBPZGNPZW4yNVZEMU1FRnVoTzNpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxMzkzOTQyMTA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTExODk4MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNHY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ0djLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMjhIbzhZVEtIeWFxOHJYVHppeFgwU0M5S1JYVW1VMEo3YktMcXkzNnd1WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDY1NTU2MjEyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzUxMTg5OTA0OThcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
