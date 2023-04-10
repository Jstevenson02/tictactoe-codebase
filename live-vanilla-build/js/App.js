const App = {
  $: {
    menu: document.querySelector('[data-id="menu"]'),
    menuItems: document.querySelector('[data-id="menu-items"]'),
    resetBtn: document.querySelector('[data-id="menu"]'),
    newRoundBtn: document.querySelector('[data-id="menu"]'),
    squares: document.querySelectorAll('[data-id="square"]'),
  },

  init() {
    App.registerEventListeners();
  },

  registerEventListeners() {
    // DONE
    App.$.menu.addEventListener("click", (event) => {
      App.$.menuItems.classList.toggle("hidden");
    });

    // TODO
    App.$.resetBtn.addEventListener("click", (event) => {
      console.log("Reset the game.");
    });

    // TODO
    App.$.newRoundBtn.addEventListener("click", (event) => {
      console.log("Start new round.");
    });

    App.$.squares.forEach((square) => {
      square.addEventListener("click", (event) => {
        console.log(`Square with ${event.target.id} was clicked.`);

        const icon = document.createElement("i");
        icon.classList.add(["fa-solid", "fa-x", "yellow"]);

        event.target.replaceChildren(icon);

        // <i class="fa-solid fa-x yellow"></i>;
        // <i class="fa-solid fa-o turquoise"></i>;
      });
    });
  },
};

window.addEventListener("load", App.init);
