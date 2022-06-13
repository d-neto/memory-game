import UI from './classes/UI.js'
import Board from './classes/Board.js'

import { myCards } from './MyDeck.js';

const BOARD = new Board(12, myCards);
BOARD.setUp();

const GameUI = new UI(BOARD);
GameUI.set();

GAME.events.score.element = GameUI.element;
GAME.events.score.length = BOARD.length;