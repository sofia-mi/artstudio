var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('art', { headerLogoSrc: '/images/logo.jpg' });
});

router.get('/detailed/12', function(req, res, next) {
    res.render('art-detailed', {
        headerLogoSrc: '../../images/logo.jpg',
        title: '12 Белых Клавиш',
        description: 'Это увлекательная история жизни великого русского композитора, пианиста и дирижера С. В. Рахманинова. Многое в его жизни окутано тайной, а все неизвестное часто списывают на загадку человеческого гения.',
        image1: '../../images/12(1).jpg',
        image2: '../../images/12(2).jpg',
        image3: '../../images/12(3).jpg',
        image4: '../../images/12(4).jpg',
        activeNavElement: '12'
    });
});

router.get('/detailed/humor', function(req, res, next) {
    res.render('art-detailed', {
        headerLogoSrc: '../../images/logo.jpg',
        title: 'Юмор. Музыка. Любовь',
        description: '"Юмор. Музыка. Любовь." - это юмористический интерактивный концерт, основанный ' +
        'на шедеврах мировой классической фортепианной музыки. Прозвучат произведения Моцарта, Шопена, Листа,' +
        ' Рахманинова. Главная особенность концерта это соединение двух жанров - театрального и музыкального.' +
        ' История любви Каролины Эстерхази и её учителя, нелепые ситуации, в которые попадал Роберт Шуман, ' +
        'влюбленность Шопена, оптимизм Листа - все это и многое другое вы узнаете, посетив концерт "Юмор. Музыка. Любовь. " ',
        image1: '../../images/hum.jpg',
        image2: '../../images/18.jpg',
        image3: '../../images/play2.jpg',
        image4: '../../images/hum2.jpg',
        activeNavElement: 'humor'
    });
});

router.get('/detailed/music', function(req, res, next) {
    res.render('art-detailed', {
        headerLogoSrc: '../../images/logo.jpg',
        title: 'Почувствуюй музыку',
        description: 'Что происходит за кулисами? "Шум за сценой" всегда притягивает наше внимание больше,' +
        ' чем само действие. "Почувствуй музыку" - это юмористический спектакль-концерт в жанре "генеральной' +
        ' репетиции",основанный на шедеврах мировой классической музыки.В спектакле прозвучат произведения Моцарта,' +
        ' Бетховена, Верди, Пуччини, Шуберта, Листа. Интересные факты из жизни великих композиторов, ' +
        'парадоксальные ситуации, в которые они попадали не оставят Вас равнодушными. ',
        image1: '../../images/13.jpg',
        image2: '../../images/14.jpg',
        image3: '../../images/music2.jpg',
        image4: '../../images/music.jpg',
        activeNavElement: 'music'
    });
});

module.exports = router;
