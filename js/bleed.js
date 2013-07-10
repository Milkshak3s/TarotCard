var card1 = '/img/aleph.png';
// var card2 = 'img/beth.png';
//var card3 = 'img/gimel.png';
// var card4 = 'img/daleth.png'
var card5 = 'img/heh.png';
var card6 = 'img/vav.png'
var card7 = 'img/zain.png';
var card8 = 'img/cheth.png';
var card9 = 'img/tet.png';
var card10 = 'img/yod.png';
var card11 = 'img/kaph.png';
var card12 = 'img/lamed.png';
var card13 = 'img/mem.png';
var card14 = 'img/nun.png';
//var card15 = 'img/samekh.png';
var card16 = 'img/ayin.png';
var card17 = 'img/peh.png';
var card18 = 'img/tzaddi.png';
var card19 = 'img/qoph.png'
var card20 = 'img/resh.png';
//var card21 = 'img/shin.png';
var card22 = 'img/tav.png';

var img = $('#img');
var cardNum = 1;
$('#changeImg').on('click', function () {
    if (cardNum == 1) {
        $('#img').attr('src', card2);
        cardNum = 2;
    }
    else {
        $('#img').attr('src', card1)
        cardNum = 1;
    }
});

//Switch statement (bleed)
$('#changeImg').on('click', function () {
    switch (cardNum) {
        case 1:
            img.attr('src', card2)
            cardNum = 2;
            break;

        case 2:
            img.attr('src', card3)
            cardNum = 3;
            break;

        case 3:
            img.attr('src', card4)
            cardNum = 4;
            break;

        case 4:
            img.attr('src', card5)
            cardNum = 5;
            break;

        default:
            img.attr('src', card1)
            cardNum = 1;
            break;

    }
})
