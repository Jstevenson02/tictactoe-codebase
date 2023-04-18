import Store from "./store.js";
import View from "./view.js";

const players = [
  {
    id: 1,
    name: "Player 1",
    iconClass: "fa-x",
    colorClass: "yellow",
  },
  {
    id: 2,
    name: "Player 2",
    iconClass: "fa-o",
    colorClass: "turquoise",
  },
];

function init() {
  const view = new View();
  const store = new Store("live-t3-key", players);

  function initView() {
    view.closeAll();
    view.clearMoves();
    view.setTurnIndicator(store.game.currentPlayer);
    view.updateScoreboard(
      store.stats.playerWithStats[0].wins,
      store.stats.playerWithStats[1].wins,
      store.stats.ties
    );
    view.initializeMoves(store.game.currentGameMoves);
  }

  // Check for moves from another tab
  window.addEventListener("storage", () => {
    initView();
  });

  initView();

  view.bindGameResetEvent((event) => {
    store.reset();
    initView();
  });

  view.bindNewRoundEvent((event) => {
    store.newRound();
    initView();
  });

  view.bindPlayerMoveEvent((square) => {
    const existingMove = store.game.currentGameMoves.find(
      (move) => move.squareId === +square.id
    );

    if (existingMove) {
      return;
    }

    // Place an icon of the current player in a square
    view.handlePlayerMove(square, store.game.currentPlayer);

    // Advance to the next state by pushing a move to the move array
    store.playerMove(+square.id);

    // Check for winner
    if (store.game.status.isComplete) {
      view.openModal(
        store.game.status.winner
          ? `${store.game.status.winner.name} wins!`
          : "Tie!"
      );

      return;
    }

    // Set the turn indicator to the next player
    view.setTurnIndicator(store.game.currentPlayer);
  });
}

window.addEventListener("load", init);
