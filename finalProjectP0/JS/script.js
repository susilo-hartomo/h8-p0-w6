// const X_CLASS = 'x' 
// const O_CLASS = 'o'
// const WINNING_COMBINATION = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ]
// const cellElement = document.querySelectorAll('cell')
// const board = document.getElementById('board')
// let circleTurn
// startGame()

// function startGame() {
//     circleTurn = false
//     cellElement.forEach(cell => {
//         cell.addEventListener('click', handleClick(), { once: true })
//     });
//     setBoardHoverClass()
// }

// function handleClick(e) {
//     const cell = e.target
//     const currentClass = circleTurn ? O_CLASS : X_CLASS
//     placeMark(cell, currentClass)
//     if (checkWIn(currentClass)){
//         console.log('winner')
//     }
//     //Switch Turns
//     swapTurns()
//     setBoardHoverClass()
// }

// function placeMark(cell, currentClass) {
//     cell.classList.add(currentClass)
// }

// function swapTurns() {
//     circleTurn = !circleTurn

// }

// function setBoardHoverClass() {
//     board.classList.remove(X_CLASS)
//     board.classList.remove(O_CLASS)
//     if (circleTurn){
//         board.classList.add(O_CLASS)
//     }else {
//         board.classList.add(X_CLASS)
//     }
// }

// function checkWin(currentClass) {
//     return WINNING_COMBINATION.some(combination => {
//         return combination.every(index => {
//             return cellElement[index].classList.contains(currentClass)
//         })
//     })
// }

const kotak = document.querySelectorAll('[data-cell]')
const board = document.getElementsByClassName('board')
const winner = document.getElementsByClassName('winning-message')
const winningMessage = document.querySelector('[data-winning-message-text]')
const buttonRestart = document.getElementById('restartButton')
const WINNING_COMBINATION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const X_CLASS = 'x'
const O_CLASS = 'o'
let awalMulai
var indexO = []
var indexX = []

mulaiGame()

function mulaiGame() {
    awalMulai = O_CLASS
    board[0].classList.add(awalMulai);

    for (var i = 0; i < kotak.length; i++) {
        kotak[i].addEventListener('click', handleClick);
    }

}

function handleClick(e) {
    // console.log(e);
    const element = e.target
    const index = element.id
    // console.log('index: ', index);
    // console.log('element: ', element);
    element.classList.add(awalMulai);
    if (awalMulai == X_CLASS) {
        awalMulai = O_CLASS
        indexX.push(Number(index))
        console.log('indexX :', indexX)
        board[0].classList.remove(X_CLASS)
        board[0].classList.add(O_CLASS)
        if (indexX.length > 2) {
            cekPemenang(WINNING_COMBINATION, indexX, 'X')
        }
    } else {
        awalMulai = X_CLASS
        indexO.push(Number(index))
        console.log('indexO :', indexO)
        board[0].classList.remove(O_CLASS)
        board[0].classList.add(X_CLASS)
        if (indexO.length > 2) {
            cekPemenang(WINNING_COMBINATION, indexO, 'O')
        }
    }
    element.removeEventListener('click', handleClick, { once: true })
}

function cekPemenang(arr1, arr2, str) {
    // console.log('arr1: ', arr1);
    console.log('arr2: ', arr2);
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i][0] == arr2[j]) {
                for (let k = 0; k < arr2.length; k++) {
                    if (arr1[i][1] == arr2[k]) {
                        check = false
                        for (let l = 0; l < arr2.length; l++) {
                            if (arr1[i][2] == arr2[l]) {
                                // console.log('Selamat Pemenang: ', str);
                                check = true
                                winningMessage.innerText = `Selamat Pemenang:  ${str}`
                                buttonRestart.addEventListener('click', mulaiGame1)
                                return winner[0].classList.add('show')
                            } 
                            // else {
                            // }
                        }
                        if (check == false) {
                            if (indexO.length + indexX.length == 9) {
                                winningMessage.innerText = `Maaf Permainan Imbang`
                                buttonRestart.addEventListener('click', mulaiGame1)
                                return winner[0].classList.add('show')
                            }
                            
                        }
                    }
                }
            }
        }
    }
}

function mulaiGame1() {
    console.log('kok gak bisa')
    winner[0].classList.remove('show')

    for (var i = 0; i < kotak.length; i++) {
        kotak[i].classList.remove('x')
        kotak[i].classList.remove('o')
    }
    indexO = []
    indexX = []
    mulaiGame()
}