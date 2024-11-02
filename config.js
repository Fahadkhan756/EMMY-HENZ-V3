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
global.owner = process.env.OWNER_NUMBER || "https://t.me/EmmyHenz";
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
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349121785627,2349125042727";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0oxMDdKZE5VUjNKbE9MVy9idDVzMm5Bem1raHdPTVpMejBLZ09XelUwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHhNaHh0UE0yL2R3TTNhZGtBM3ZzRFlNZVk3L3V4VGlIZnJRVzJWbHlUaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TW90UENXQzFPYWowcG9rOG5mV2NmYjQ5clZKcXk2czk4VFZ6NGUxNmtFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLMENTVzg0M25OcG5LVFgxSjZqUHRHUlZnbmx5b1NieDFHbndzL3B4bWk4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1JRE1BU3FpeXdUZjBIVm5mWnhiMnlIc3I2TjlwaDNiaXFMNHJmWlduRm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5tYnJCWm5OY1VCbW00M2NCTnBOcG1CaUtKcG1JRTFxS25idUVUcWdOd2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0RqWmFPYThyNjJCdStFSzJjWmhVQ2xEQVhNa2tiY0xTNEJpTG1CUFhuND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXZBVFlnTUN0aFhxSHplNnBmd2Rsc3VyY0JCdjhlUE1ZV05OSUJOWDRYQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFwTG9ObkJObzlPU25WUjc3T0luc1hNRFAwM0lYa0JEQzMrM3c5UkcwMUpjRkJpZk4vSTkzL1ZDZmZDbFpNYTZOWUt4a053QlBZczNSeE9DR2pZUmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzQsImFkdlNlY3JldEtleSI6Im1JQkZxdjV4SHgwb29OazVrNHJhQjVuc2FLRStFNWdiN0E4emM0Nmt0VTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik9STC0xTlJXUk5hVW5wZ0NCNTRzeXciLCJwaG9uZUlkIjoiNGZjNGUxMzItM2E0Zi00MDkzLTg4ZDQtMGVmNzVhNGFlYjFhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlF1YktkdVR1NHNPeVJ4bVU5TFhYcHpZdm1VWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzck1DajJzVjJUOVh1ZWlhTG1YbXB2dnRKd1k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNTRTUEdFUkgiLCJtZSI6eyJpZCI6IjkyMzMwNzY3MDE5Mzo2M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJPTEQgSEFDS0VSIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNManRrZTRERU5tU2w3a0dHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJObmZ6Nmp2RlFFbjZsUS9NUW9GLzhBcE55dFhwWis0Umd4Zk0wMnFTQVdJPSIsImFjY291bnRTaWduYXR1cmUiOiJRTW5WWmRScVRtUyt6d0s1eTM0SWs4OWpvODBHN1BnQjkxLzY2ZVFMSFdGbGprWUhhRjZNWEV6Y0FycE9JQUR0RG12NFZ1UW5FVFR3eDhVV05ZNEdCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVjdkTndMbEZISlIrWkxPZHFHNDZYZGZrenExbkh3ZW1FTVFlbU9haDJxZHdhWjJXajRHbW5KWnVkZFpISG12Nm9SVEViTDhmb1FJWlQ3Ym5uM0hDaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzMDc2NzAxOTM6NjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFozOCtvN3hVQkorcFVQekVLQmYvQUtUY3JWNldmdUVZTVh6Tk5xa2dGaSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDUyOTYzOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKR0oifQ=="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "Emmanuel Henshaw",
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
