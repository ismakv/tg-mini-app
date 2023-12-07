import {Telegraf, Markup} from 'telegraf';
import {message} from 'telegraf/filters';

const token = '6744434995:AAFhITxt5j0o5l3zp1XRBUmQlpuT7nyMWLw';
const webAppUrl = 'https://angular-tg-app-d30ab.web.app/';

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
        Markup.keyboard([
            Markup.button.webApp(
                'Отправить сообщение',
                webAppUrl + '/feedback'
            )
        ])
    )
});

bot.on(message('web_app_data'), async (ctx) => {
    const data = ctx.webAppData.data.json()
    ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? 'empty message')
  })

bot.launch();