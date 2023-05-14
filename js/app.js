document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'xengvang',
            img: '/img/xengvang.jpg'
        },
        {
            name: 'ahri',
            img: '/img/ahri.jpg'
        },
        {
            name: 'ahriVBTT',
            img: '/img/ahriVBTT.jpg'
        },
        {
            name: 'leesin',
            img: '/img/leesin.jpg'
        },
        {
            name: 'yasuo',
            img: '/img/yasuo.jpg'
        },
        {
            name: 'zed',
            img: '/img/zedPROJECT.jpg'
        },
        {
            name: 'xengvang',
            img: '/img/xengvang.jpg'
        },
        {
            name: 'ahri',
            img: '/img/ahri.jpg'
        },
        {
            name: 'ahriVBTT',
            img: '/img/ahriVBTT.jpg'
        },
        {
            name: 'leesin',
            img: '/img/leesin.jpg'
        },
        {
            name: 'yasuo',
            img: '/img/yasuo.jpg'
        },
        {
            name: 'zed',
            img: '/img/zedPROJECT.jpg'
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('class', 'gameImg')
            card.setAttribute('src', '/img/star.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img.gameImg');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0].cardId === cardsChosen[1].cardId) {
            alert("Bạn không thể chọn lại lá bài vừa chọn!");
            cards[optionOneId].setAttribute('src', '/img/star.jpg');
        }
        else if (cardsChosen[0].name === cardsChosen[1].name) {
            alert("Bạn đã tìm thấy 1 cặp bài trùng!");
            // cards[optionOneId].setAttribute('src', '/img/white.jpg');
            // cards[optionTwoId].setAttribute('src', '/img/white.jpg');
            cards[optionOneId].style.display = 'none';
            cards[optionTwoId].style.display = 'none';
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', '/img/star.jpg');
            cards[optionTwoId].setAttribute('src', '/img/star.jpg');
            alert("Bạn đã chọn sai, hãy thử lại nhé!");
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2) {
            let gameScore = document.getElementById("gameScore");
            // resultDisplay.textContent = "Chúc mừng bạn đã chiến thắng!";
            gameScore.innerHTML = gameScore.replace('Số cặp bài trùng đã tìm ra:', 'Chúc mừng bạn đã tìm thấy tất cả các cặp bài trùng!');
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push({ name: cardArray[cardId].name, cardId });
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
})

// function showgame() {
//     var a = document.getElementsByClassName('game-play')[0];
//     a.style.display = 'block';
// }