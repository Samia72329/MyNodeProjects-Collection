#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
const blu = chalk.hex("#0fffeb").bgHex('#0e001a');
const yel = chalk.hex("#f0f000").bgHex('#1a1700');
const red = chalk.hex('#ff0000');
console.log(yel(`
██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗    ██╗
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝    ██║
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗      ██║
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝      ╚═╝
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗    ██╗
 ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝    ╚═╝
`));
console.log(blu(`
            0X00X00X00X00X00X00X00X00X00X00X00X00X00X00X0X
            0XXXX    ╔╦╗┬┌─┐  ╔╦╗┌─┐┌─┐  ╔╦╗┌─┐┌─┐   XXXX0             
            0XXXX     ║ ││     ║ ├─┤│     ║ │ │├┤    XXXX0             
            0XXXX     ╩ ┴└─┘   ╩ ┴ ┴└─┘   ╩ └─┘└─┘   XXXX0             
            0X00X00X00X00X00X00X00X00X00X00X00X00X00X00X0X
`));
// Initialize an empty 3x3 board
const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
// Function to display the board
function displayBoard(board) {
    console.log('\n  1 2 3');
    for (let i = 0; i < 3; i++) {
        console.log(`${i + 1} ${board[i].join('|')}`);
        if (i < 2) {
            console.log('  -----');
        }
    }
}
// Function to check for a winner
function checkWinner(board, player) {
    // Check rows, columns, and diagonals for a win
    for (let i = 0; i < 3; i++) {
        if ((board[i][0] === player && board[i][1] === player && board[i][2] === player) ||
            (board[0][i] === player && board[1][i] === player && board[2][i] === player)) {
            return true;
        }
    }
    if ((board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
        (board[0][2] === player && board[1][1] === player && board[2][0] === player)) {
        return true;
    }
    return false;
}
// Function to check for a tie
function checkTie(board) {
    // If there are no more empty cells, it's a tie
    for (let row of board) {
        if (row.includes(' ')) {
            return false;
        }
    }
    return true;
}
// Function to handle a player's move
async function playerMove(player) {
    while (true) {
        const answer = await inquirer.prompt([
            {
                type: 'input',
                name: 'row',
                message: yel(`Player ${player}, enter row (1-3):`)
            },
            {
                type: 'input',
                name: 'col',
                message: blu(`Player ${player}, enter column (1-3):`)
            }
        ]);
        const row = parseInt(answer.row) - 1;
        const col = parseInt(answer.col) - 1;
        if (row >= 0 && row < 3 && col >= 0 && col < 3 && board[row][col] === ' ') {
            board[row][col] = player;
            break;
        }
        else {
            console.log(red('Invalid move. Please try again.'));
        }
    }
}
// Function to start the game
async function startGame() {
    let currentPlayer = 'X';
    let winner = '';
    let gameOver = false;
    while (!gameOver) {
        displayBoard(board);
        await playerMove(currentPlayer);
        if (checkWinner(board, currentPlayer)) {
            winner = currentPlayer;
            gameOver = true;
        }
        else if (checkTie(board)) {
            winner = 'Tie';
            gameOver = true;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
    displayBoard(board);
    if (winner === 'Tie') {
        console.log('It\'s a tie!');
    }
    else {
        console.log(`Player ${winner} wins!`);
    }
    const answer = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'playAgain',
            message: blu('Do you want to play again?')
        }
    ]);
    if (answer.playAgain) {
        resetBoard();
        startGame();
    }
    else {
        console.log(blu(`
 +-+-+-+-+-+-+ +-+-+-+ +-+-+-+-+-+-+-+
 |T|h|a|n|k|s| |f|o|r| |P|l|a|y|i|n|g|
 +-+-+-+-+-+-+ +-+-+-+ +-+-+-+-+-+-+-+`));
    }
}
// Function to reset the board
function resetBoard() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            board[i][j] = ' ';
        }
    }
}
// Start the game
startGame();
