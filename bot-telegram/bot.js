//Josué Amílcar López Benítez (SMIS935820)
//El bot se llama LpzAmibot
//Iniciamos con npm run dev
const { Telegraf } = require("telegraf")

const bot = new Telegraf('5329614416:AAFN0GSUtvVq2M0EuZ16H366vfoHOM8U3_8')
    //Credencial

//ctx = contexto
//Metodo al ejecutar comando Start
bot.start((ctx) => {
    ctx.reply(`¡Bienvenido ${ctx.from.first_name} ${ctx.from.last_name}!`);
})


function BienvenidoCommand(ctx) {
    const Bienvenida = `¡Bienvenido ${ctx.from.first_name} ${ctx.from.last_name}!`;

}


//Creando comando personalizado
bot.command('saludar', (ctx) => {
    ctx.reply(`Hola ${ctx.from.first_name}, ¿Como estas?`);
})

//Metodo de escucha
bot.hears(['Hola', 'hola', 'HOLA'], ctx => {
    ctx.reply(`Hola ${ctx.from.first_name}`);
})

bot.hears(['Adios', 'adios', 'ADIOS'], ctx => {
    ctx.reply(`Hola ${ctx.from.first_name}`);
})

//Evento que captura lo Tecleado
bot.on('text', ctx => {
    ctx.reply('¡¡ Habla mas conmigo !!');
    console.log(`${ctx.from.first_name} escribio desde Telegram: "${ctx.message.text}"`);
})

bot.on('sticker', (ctx) => ctx.reply('Me gusta ese sticker'))

/*Para evitar cargar el node bot cada momento instalamos || npm i --d nodemon
es -d para dejarlo como dependencia de desarrollo*/

bot.launch(); //Metodo para que se inicie el Bot