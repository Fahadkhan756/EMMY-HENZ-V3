//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "https://api.whatsapp.com/send?phone=923277712441&text=➪𝐇𝐞𝐥𝐥𝐨_((☞┾≛⃝SAVE_DONE♥️🌸👀";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "923277712441,923307670193";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib09nV29wVStuNlFnQXptSlJqWE14TU5ZdG8ybU0xSjN6eVpta0lXQkwwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFh0MFBWcTV4d2RJOHNQVktweWpVR1MxU2FRbzdtN0NNMXRZTlp0WDUyYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1T1NFZ2NYVGZVOVlHTFlTZVlyU3YveVdHckdVMTkwMEM5R3NpTHNkQTN3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpczRxS2hGWnZJd21KQXA0a1Q4eDAxQld6cEtHRVlCbDlxR0JFTThiWW1JPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNHRTVhcUp4VUJTbEpzTVdRdi90blJBVUpyTzZBUHEzdi8rK1VlK3R6M0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBPdGNER09HSmI2S0IxVUQzdXIxdFpDbFFuTHViR3d4ekRmL1F5dmdRa2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEZxNWp1bmlOQWlGRVNvdzZZT3FHVDF4Si9Ca0IyMjhmVWtza29KOHpYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVFEb3lrZFAvc0pJNXpkOTBwUHpuVXM2WVpOQlpVMjVjYWIwSjQ2ZXRRMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxWWWR0Y2ZlRHJnNXltekVDVU82VEtkcVNraStJR1o4VS82bEU0b285M3lPZkRURmdzWTNoUDhUWUF5ck9LbktVemwwSkczTnF1Q2cyb204TUg2c0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6IkowcUszT1JoNTFXK1ZwQ3ZrLytUMlR4eHUyVDZTQ0FXY0hBa2xiQ2pscDQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImFabE9kcmtkUlNteXFjb1ZGSno2VGciLCJwaG9uZUlkIjoiYWQ0NmZjNTUtNDdlNy00YjU1LTlkM2ItZDliNzYyMjgyOTgwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5jVUVsRG1DT3d6NFlRN1cvcVNMcWI3MnQzZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvUmpZSGIyaktzMlNmbiszVFU0aGlSOWs5VFU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWE5NM1RIQ00iLCJtZSI6eyJpZCI6IjkyMzMwNzY3MDE5Mzo0MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJPbGQgSGFja2VyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPR1B4cEFDRVBuNnJyZ0dHQWNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJrTFRHQ2RmTnRWdU5GZ2E2UnVTWkZiRkI2VmNLeVFPKzlsbG8yVzVMVEQwPSIsImFjY291bnRTaWduYXR1cmUiOiJyYkVCRG81eHU5YlI4Y2lrek1YQ3BsbjBEVGVja056MG5TaXVFY0FwaFc5b0dNVnYrUWFzSTlGL3NzUWdSWDcxMm9ERm5WK3FBczMyQ3NkaTBkYWtBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWko2MnhsNUpEdTBvMW5rYzBVc3NFOEI1R1RIcWZhR3ZDeHNqaVVhTDkrSlZ1WFVrcENZcWhYb0hrWElVSU9iRHA4UHhyZHFJZ3BmbU1SUUVKM0p4QVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzMDc2NzAxOTM6NDJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWkMweGduWHpiVmJqUllHdWtia21SV3hRZWxYQ3NrRHZ2WlphTmx1UzB3OSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODgyMjY2MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQQ1kifQ=="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`FAHAD_MD-V3™`",
  author: process.env.PACK_AUTHER || "FAHAD_MD-V3",
  packname: process.env.PACK_NAME || "F A H A D",
  botname: process.env.BOT_NAME || "FAHAD_MD-V3",
  ownername: process.env.OWNER_NAME || "FAHAD",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
