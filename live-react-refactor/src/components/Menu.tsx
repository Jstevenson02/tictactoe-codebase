import { useState } from "react";
import classNames from "classnames";
import "./Menu.css";

type Props = {
  onReset(): void;
  onNewRound(): void;
};

export default function Menu({ onReset, onNewRound }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="menu">
      <button className="menu-btn" onClick={() => setMenuOpen((prev) => !prev)}>
        Actions
        <i
          className={classNames(
            "fa-solid",
            menuOpen ? "fa-chevron-up" : "fa-chevron-down"
          )}
        ></i>
      </button>

      {menuOpen && (
        <div className="items border">
          <button onClick={onReset}>Reset</button>
          <button onClick={onNewRound}>New Round</button>
        </div>
      )}
    </div>
  );
}
