const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID |  FLASH-MD-WA-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib05RSW5XVlJNNTFMdmJvUm8zVzNZQ2NURzBpd1Bjc3JzUyt0WFNtN1JGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNElUemdGUm9sSEs0QzFhOEx5c2JtUkZCUFRjREhHY3lyV1JhMjB3VmxDcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQm5YcXN4V2dtTkMwM0Y5RVlOczcva01PUWc3L245UEFSOVNpblgxMFVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWTXFta1RUZ1QydU9nczVQZ1dsbldqSTFJcENrM1lsS0s1OVpCb2JJemhNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdLTVFZTllWM1hoWFhOa1hZQjFxR095VTYxTDRpUkZ2NC9MNHBLMUNZblU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilc4VG0wbDhEbHd2a0pZNWQ0ekh3S2JSdmpuQUpNN01CTmFxMzByelJ5Z3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0dMdGFReGhIRnpQb2x3MmdDWGw3N2R1TktPNkJVenRGc3ZPQjgvamxrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkxsOWNma0JETnc3eDRFb09uU1I5MmEzdU9ReWNrbnVrODZzU1pZOUJtbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJtUlVWVzMxcGVFTFpzNFZCQVhBVG00NFJMSUNGYWJHSE5rK2hjMWxIMGI4elZJYzdkT010U05IbzNpeEZEaURhOVV2TXhxbXZQSTFSVWxrR2lPWkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI5LCJhZHZTZWNyZXRLZXkiOiIzcWszUlh1MmUvdDVBWFRDbDR3MXVRbkU0OVUwbzM4dlEwRnhnOFk5NE9jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBaW52MEk0UFJUeThld0E3UG1pUWhRIiwicGhvbmVJZCI6ImEzYjkzZWJiLWUyZTItNDBjMC04ZTU1LWU1YjJhNGRlZTNmOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBaHhIRWxzZm8vbVdxSjloSFB3ZTN1UEZTNTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienNxNENZWDJpYjJvOE1vUXlTZmxxZGMwNWhzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJRNzQ0TjlQIiwibWUiOnsiaWQiOiIyNTU3ODk2MjIzNDE6MTlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01yaGt1OENFTWIwbmJzR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImQ3NEowelI3Q3JJV3paeSt3RHNKcmpBSi9KUWFCNFB3THlsclhGVEk1enc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikd4ZTd6ZjUranMrcERkSi9ITWlsRkF0N3VpbDA1ejY0L25hUndDejBZc2hTcUhrbDFhN25DWG56a1FBbGVEdVlTbjdXd0ZrNFlXemI4aDIrcVZxdUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkeDhRa21URFVNRW45UnBsbkFlK2lIb3NVbmsrMGw4RGY0L292dFlxNXhKMVZjcXBFMzFxOEY4b0srSURic0x3TmVmdWJicUgvcUFWczJrSS95ZmdDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTc4OTYyMjM0MToxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYZStDZE0wZXdxeUZzMmN2c0E3Q2E0d0NmeVVHZ2VEOEM4cGExeFV5T2M4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM0ODM0NzcwfQ== | 'FLASH-MD-WA-BOT;;;=>',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "𝐑𝐢𝐜𝐡𝐚𝐫𝐝",
    OWNER_NUMBER : process.env.OWNER_NUMBER || "255789622341", 
             
    AUTO_VIEW_STATUS: process.env.AUTO_VIEW_STATUS || "on",
AUTOREAD_MESSAGES: process.env.AUTO_READ_MESSAGES || "on",
CHATBOT: process.env.CHAT_BOT || "off",
    AUTO_SAVE_STATUS: process.env.AUTO_SAVE_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'FLASH-MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || 'https://static.animecorner.me/2023/08/op2.jpg',
    MODE: process.env.BOT_MODE || "private",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    PRESENCE : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_MESSAGE || "on",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'off',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
