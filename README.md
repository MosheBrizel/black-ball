
# Ball Jumping Game

This is a React based puzzle game built with React components. The goal is to remove all white balls by jumping over them, leaving only one black ball remaining.

## Description 

The game board consists of div elements, and black and white colored balls placed in rows are designed.

The player clicks on a ball to initiate a jump if there is a valid move. Possible moves will highlight green. A jump cancels the ball they passed over.

The game features multiple levels of increasing difficulty. Levels have different starting configurations of balls. 

Winning a level involves removing all white balls. Losing occurs if no valid moves remain.

## Live Site

Play the game here: https://black-ball.vercel.app/

## Features

- 47 levels with different ball arrangements   
- Click ball to initiate jump if move is possible
- Possible moves highlight green
- Balls removed when jumped over
- Win by removing all white balls
- Lose if no valid moves left 
- Select level dropdown
- Resetting board button
- Instructions modal

## Technologies

- Create React App
- React Hooks API (useState)
- React components
- CSS styling

## Components

- `Ball` - Renders a single ball
- `Game` - Contains game board and logic
- `LevelSelect` - Dropdown to pick level
- `ResetButton` - Restarts level  
- `Instructions` - How to play modal
- `WinDisplay` - Shown on level win (weenBox)
- `LoseDisplay` - Shown on level loss
- `Main` - Entry point component

## Assets

- `index.html` - Main HTML document 
- `/src` - JSX components
- `/public` - Static assets like icon

## Setup

- Install dependencies with `npm install`
- Start development server with `npm start`

