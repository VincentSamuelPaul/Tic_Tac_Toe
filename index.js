// Tic Tac Toe in JavaScript...


const board_plays = new Array(9);
var play = 1;

// Managing the boxes...
const boxs = document.querySelectorAll('.box');
boxs.forEach(box => {
    box.addEventListener('click', (e) => {
        if (e.target.textContent != player1.choice && e.target.textContent != player2.choice) {
            if (play % 2 != 0) {
                e.target.textContent = player1.choice;
                if (checkWin() == player1.name) {
                    console.log(`${player1.name} won!!`)
                    const winnerName1 = document.querySelector('#winner');
                    winnerName1.style.display = 'flex';
                    winnerName1.style.textDecoration = 'underline';
                    winnerName1.textContent = 'Winner' + ' ' + player1.name
                    reset();
                }
                player_1.style.color = 'white';
                player_1.style.backgroundColor = 'black';
                player_2.style.backgroundColor = 'yellow';
                player_2.style.color = 'black';
            } else {
                e.target.textContent = player2.choice;
                if (checkWin() == player2.name) {
                    console.log(`${player2.name} won!!`)
                    const winnerName2 = document.querySelector('#winner');
                    winnerName2.style.display = 'flex';
                    winnerName2.style.textDecoration = 'underline';
                    winnerName2.textContent = 'Winner' + ' ' + player2.name
                    reset();
                }
                player_1.style.color = 'black';
                player_1.style.backgroundColor = 'yellow'
                player_2.style.color = 'white';
                player_2.style.backgroundColor = 'black';
            };
            play++;
        }
    });
});

// Getting the controls...
const controls = document.querySelectorAll('.control');
controls.forEach(control => {
    control.addEventListener('click', (e) => {
        if (e.target.id == 'start') {
            player_1.style.color = 'black';
            player_1.textContent = `Player1 => playwith = ${player1.choice}`;
            player_1.style.backgroundColor = 'yellow';
        };
        if (e.target.id == 'reset') {
            boxs.forEach(box => {
                box.textContent = '';
                player_1.style.color = 'white';
                player_2.style.color = 'white';
                player_1.style.backgroundColor = 'black';
                player_2.style.backgroundColor = 'black';
                const winnerName = document.querySelector('#winner');
                winnerName.style.display = 'none';
            });
        };
    });
});

// Reset function
function reset() {
    boxs.forEach(box => {
        box.textContent = '';
        player_1.style.color = 'white';
        player_1.style.backgroundColor = 'black';
        player_2.style.color = 'white';
        player_2.style.backgroundColor = 'black';
    });
}


// The Player object
const Player = (name, choice) => {
    this.name = name;
    this.choice = choice
    return { name, choice };
};

// Creating the Players...
const player1 = Player('Player1', 'X');
const player2 = Player('Player2', 'O');

// Selecting the rules cont...
const rules = document.querySelector('#rules');

// Displaying player1 content...
const player_1 = document.createElement('h3');
player_1.textContent = `Player1 => playwith = ${player1.choice}`;
player_1.style.textAlign = 'center';
rules.appendChild(player_1);

// Displaying player2 content...
const player_2 = document.createElement('h3');
player_2.textContent = `Player2 => playwith = ${player2.choice}`;
player_2.style.marginTop = '20px';
player_2.style.textAlign = 'center';
rules.appendChild(player_2);


function checkWin() {
    const box1 = document.querySelector('#box1').textContent;
    const box2 = document.querySelector('#box2').textContent;
    const box3 = document.querySelector('#box3').textContent;
    const box4 = document.querySelector('#box4').textContent;
    const box5 = document.querySelector('#box5').textContent;
    const box6 = document.querySelector('#box6').textContent;
    const box7 = document.querySelector('#box7').textContent;
    const box8 = document.querySelector('#box8').textContent;
    const box9 = document.querySelector('#box9').textContent;
    const boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
    console.log(boxes);
    // { player1 start
    // Rows
    if (box1 == player1.choice && box2 == player1.choice && box3 == player1.choice) {
        return player1.name
    }
    if (box4 == player1.choice && box4 == player1.choice && box6 == player1.choice) {
        return player1.name
    }
    if (box7 == player1.choice && box8 == player1.choice && box9 == player1.choice) {
        return player1.name
    }
    // Columns
    if (box1 == player1.choice && box4 == player1.choice && box7 == player1.choice) {
        return player1.name
    }
    if (box2 == player1.choice && box5 == player1.choice && box8 == player1.choice) {
        return player1.name
    }
    if (box3 == player1.choice && box6 == player1.choice && box9 == player1.choice) {
        return player1.name
    }
    // Diagonal
    if (box1 == player1.choice && box5 == player1.choice && box9 == player1.choice) {
        return player1.name
    }
    if (box3 == player1.choice && box5 == player1.choice && box7 == player1.choice) {
        return player1.name
    }
    // player1 end }

    // { player2 start
    // Rows
    if (box1 == player2.choice && box2 == player2.choice && box3 == player2.choice) {
        return player2.name
    }
    if (box4 == player2.choice && box4 == player2.choice && box6 == player2.choice) {
        return player2.name
    }
    if (box7 == player2.choice && box8 == player2.choice && box9 == player2.choice) {
        return player2.name
    }
    // Columns
    if (box1 == player2.choice && box4 == player2.choice && box7 == player2.choice) {
        return player2.name
    }
    if (box2 == player2.choice && box5 == player2.choice && box8 == player2.choice) {
        return player2.name
    }
    if (box3 == player2.choice && box6 == player2.choice && box9 == player2.choice) {
        return player2.name
    }
    // Diagonal
    if (box1 == player2.choice && box5 == player2.choice && box9 == player2.choice) {
        return player2.name
    }
    if (box3 == player2.choice && box5 == player2.choice && box7 == player2.choice) {
        return player2.name
    }
    // player2 end }
}