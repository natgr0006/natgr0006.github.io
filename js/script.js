const TOKEN = 1418299275:AAG_7-vklNZLFEtBnlCDGtxd7pAlmeHj2Tc; // токен от BotFather
const CHAT_ID = -442216143; // chat_id для телеграм

var form = document.querySelector('.content__form'); // находим в DOM нашу лид-форму
form.addEventListener("submit", function(e) { // прослушиваем форму
    e.preventDefault(); // перехватываем стандартный ответ
    data = new FormData(this); // вместо serialize на jQuery
    sendMsg(data); // передаём данные из формы на отправку
})

function sendMsg(data) {
    var url = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage'; // токен бота
    var body = JSON.stringify({ // склеиваем объект в JSON строку
        chat_id: CHAT_ID,
        parse_mode: 'Markdown', // разметка сообщений вкл (чтобы использовать *жирный текст*)
        text: '*Новый лид*\n' + data.get("title") + '\n\n*Имя:* ' + data.get("name") + '\n*Телефон:* ' + data.get("phone") + '\n*Откуда:* [' + window.location.href + '](' + window.location.href + ')'
    });
    var xhr = new XMLHttpRequest(); // инициализируем AJAX запрос
    xhr.open('POST', url, true); // отправляем наше сообщение методом POST на сервак телеги
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // на всякий случай, оповестим телеграм, что отправили JSON
    xhr.send(body);
}