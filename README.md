# Tic-Tac-Toe GAME

## Table of contents

- [Introduction](#introduction)
- [Game Rules](#game-rules)
- [Code Explanation](#code-explanation)
- [Output](#output)
- [Installation](#installation)

## Introduction 

Tic-Tac-Toe, also know as XOXO, is a classic two-player strategy game played on a 3*3 grid. This simple yet engaging game involves players taking turns to place their symbol (X or O) on the grid, with the objective of forming a line of three of their symbols before their opponent does.

## Game Rules

- The game is played on 3*3 grid.
- Two players take turns, one using X and the other O.
- Players alternate turns, placing their symbol in an open cell on the grid.
- The first player to form a horizontal, vertical, or diagonal line of three of their symbols wins.
- If the grid is filled without a winner, the game ends in a tie.

## Code Explanation

### HTML (index.html)

The HTML file provides the structure for the web page. It includes:

- **Document Type Declaration:** `<!DOCTYPE html>` defines the document type and version.
- **Language Specification:** `<html lang="en">` sets the document language to English.
- **Head Section:** Contains metadata, such as character set, vieport settings, page title, and a link to the external stylesheet.
- **Body Section:** Organizes the main content of the page, including a header, main section with the game grid, and a footer displaying the copyright information.

### CSS (style.css)

The CSS file defines the styles for the HTML elements. Key styles include:

- **Body Styles:** Set the background color, font family, and overall styling for the body.
- **Main Section Styles:** Center the game grid within the main section using flexbox.
- **Header and Footer Styles:** Define styles for the header and footer, including background color, text color, and text shadow for a visually appealing header.
- **Game Grid Styles:** Create a 3*3 grid for the Tic-Tac-Toe game, with styling for individual boxes, borders, and hover effects.
- **Box Styles:** Style the individual boxes within the grid, including width, height, borders, and cursor styling.
- **Active Style:** Apply a specific style to the active player's moves for visual feedback.

### JavaScript (main.js)

The JavaScript file contains the logic for the Tic-Tac-Toe game. 
  
```bash
const game = document.querySelector('.game')
```

- This line selects the HTML element with the class "game" and assigns it to the variable `game`. This element is where the Tic-Tac-Toe grid will be displayed.

```bash
const boxes = []
```

- This line initializes an empty array called `boxes`. This array will be used to keep track moves made by players on the Tic-Tac-Toe grid.

```bash
let player = 1;
let moves = 0;
```

- These lines declare two variables, `player` and `moves`, and set their initial values. `player` represents the current player (1 for X and 2 for O), and `moves` tracks the total number of moves made in the game.

```bash
const checkForWin = () => {
  const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
  for(let line of lines) {
    const [a,b,c] = line;
    if(boxes[a]&&boxes[a]===boxes[b]&&boxes[a]===boxes[c]) {
      return true;
    }
  }
  return false;
};
```

- This declares a function named `checkForWin`, which will be responsible for checking if a player has won the game. The function contains an array called `lines` that represents all possible winning combinations on the Tic-Tac-Toe grid. This function checks all possible winning combinations (`lines`) on the grid. I any of these combinations has the same symbol (X or O) in all three positions, it retuns `true`, indicating that a player has won. Otherwise, it returns `false`.
  
```bash
const newGame = () => {
  for(let i=0;i<9;i++) {
    boxes[i] = null;
  }
  game.innerHTML = '';
  for(let i=0;i<3;i++) {
    for(let j=0;j<3;j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.dataset.index = i*3+j;
      box.addeventListener('click', play);
      game.appendChild(box);
    }
  }
  player = 1;
  moves = 0;
};
```

- This declares a function named `newGame`, that is reponsible for resetting the game state and initializing a new game. It clears the `boxes` array and the HTML content inside the `.game` element. It creates a new 3*3 grid of boxes. Each box is assigned a unique index using the `dataset.index` attribute, and a click event listener (`play`) is added to each box.

## Output

<img width="960" alt="Screenshot 2024-01-03 232206" src="https://github.com/manisankar29/Tic-Tac-Toe_game/assets/138246745/09fe6e03-6040-4b26-87e6-55e2d04cd62b">

## Installation

1. Clone the repository

```bash
git clone https://github.com/manisankar29/Tic-Tac-Toe_game.git
```

2. Navigate to the project directory

```bash
cd Tic-Tac-Toe_game
```

3. Run the game
