var card1 = '/img/aleph.png';
//Broken
var card2 = 'img/beth.png';
//Broken
var card3 = 'img/gimel.png';
//Broken
var card4 = 'img/daleth.png'
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
//Broken
var card15 = 'img/samekh.png';
var card16 = 'img/ayin.png';
var card17 = 'img/peh.png';
var card18 = 'img/tzaddi.png';
var card19 = 'img/qoph.png'
var card20 = 'img/resh.png';
//Broken
var card21 = 'img/shin.png';
var card22 = 'img/tav.png';

var img = $('#img');
var cardNum = 1;
//Switch state -- card changer (passing)
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

        case 5:
            img.attr('src', card6)
            cardNum = 6;
            break;

        case 6:
            img.attr('src', card7)
            cardNum = 7;
            break;

        case 7:
            img.attr('src', card8)
            cardNum = 8;
            break;

        case 8:
            img.attr('src', card9)
            cardNum = 9;
            break;

        default:
            img.attr('src', card1)
            cardNum = 1;
            break;

    }
})

//Muti-buttons (bleed)
$('#nameBtn1').on('click', function () {
    
})

$('#nameBtn2').on('click', function () {
    
})

$('#nameBtn3').on('click', function () {
    
})