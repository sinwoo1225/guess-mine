import {
  disableCanvas,
  hideControls,
  enableCanvas,
  showControls,
  resetCanvas
} from "./paint";
import { disableChat, enableChat } from "./chat";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");

const addPlayers = players => {
  board.innerHTML = "";
  players.forEach(player => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname}: ${player.point}`;
    board.appendChild(playerElement);
  });
};

const setNotifs = text => {
  notifs.innerText = "";
  notifs.innerText = text;
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
export const handleGameStarted = () => {
  setNotifs("");
  disableCanvas();
  hideControls();
  enableChat();
};
export const handleLeaderNotif = ({ word }) => {
  enableCanvas();
  showControls();
  disableChat();
  setNotifs(`You are The Leader, Paint: ${word}`);
};
export const handleGameEnded = () => {
  setNotifs("Game Ended");
  disableCanvas();
  hideControls();
  resetCanvas();
};
export const handleGameStarting = () => setNotifs("Game will start soon");
