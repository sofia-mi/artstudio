var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('training', {
        headerLogoSrc: '../images/logo.jpg',
        header: "Раскрой себя.",
        description:
        "<b>Курс актерского мастерства и ораторского искусства.</b><br/>"+
        "Актерское мастерство это неотъемлемая часть ораторского искусства.<br/> Невозможно стать оратором не имея элементарных актерский навыков. Именно поэтому мы создали систему, соединяющую эти два сценических искусства.<br/>" +
        "Тренинги и мастер-классы ведет Санкт-Петербургский актер, автор идей и исполнитель таких спектаклей как «12 белых клавиш», «Почувствуй музыку»,<br/> «Юмор. Музыка. Любовь.» Юрий Щелканов. Юрий работает в одном из самых сложных жанров - «моноспектакль». Этот жанр предполагает отсутствие ошибок. Стоит лишь на мгновение потерять внимание публики как действие становится не интересным. На тренингах, мастер-классах и семинарах по ораторскому и актерскому искусству Юрий делится с аудиторией приемами, которые сам использует выступая на публике.<br/>" +
        "<b>На нашем курсе Вы узнаете:</b><br/>"+
        "-	Как избавиться от боязни публичных выступлений<br/>" +
        "-	Как найти свой тембр голоса<br/>" +
        "-	Как приобрести уверенность<br/>" +
        "-	Что такое точка концентрации<br/>" +
        "-	Что такое система Станиславского<br/>" +
        "-	Как использовать актерские навыки в повседневной жизни.<br/>"+
        "<b>Вы научитесь:</b><br/>"+
        "-	Основным приемам, позволяющим привлечь и удержать внимание  публики <br/>"+
        "-	Максимально интересно выстраивать речь <br/>"+
        "-	Создавать интересные истории<br/>",
        image1: '../../images/tr1.jpg',
        image2: '../../images/tr2.jpg'
    });
});

module.exports = router;