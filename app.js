import { GameBoard } from "./src/GameBoard.js";
import { Snake } from "./src/Snake.js";

const boardSize = 20;

const gameBoard = new GameBoard(boardSize);
const snake = new Snake();
gameBoard.draw(snake.getCoordinates());