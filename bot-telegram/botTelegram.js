const { Telegraf } = require("telegraf")

//const axios = require(axios);

const bot = new Telegraf('5329614416:AAFN0GSUtvVq2M0EuZ16H366vfoHOM8U3_8')
    //Credencial

//ctx = contexto
//Metodo al ejecutar comando Start
bot.start((ctx) => {
    ctx.reply(`¡Bienvenido ${ctx.from.first_name} ${ctx.from.last_name}!`);
})