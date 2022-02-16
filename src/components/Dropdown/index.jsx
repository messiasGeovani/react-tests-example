import { useState } from "react";

const customStyles = {
  button: {
    border: "none",
    padding: "13px 20px",
    borderRadius: 8,
    fontSize: 15,
    fontWeight: 500,
    textTransform: "uppercase",
    cursor: "pointer",
    background:
      "linear-gradient(0deg, rgba(81,174,250,1) 0%, rgba(56,162,251,1) 100%)",
    color: "white",
  },

  list: {
    listStyleType: "none",
    width: 300,
    background: "#ddd7d7",
    padding: 0,
  },

  "list--item": {
    padding: 20,
    fontSize: 15,
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },

  "list--item--image": {
    maxHeight: 20,
    marginRight: 15,
  },
};

const runeImgSrc =
  "https://cdn2.iconfinder.com/data/icons/rpg-fantasy-game-basic-ui/512/item_game_ui_magic_runes_stone_rune-512.png";

export const Dropdown = ({ title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <>
      <button style={customStyles.button} onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>

      <br />

      {isOpen && (
        <ul style={customStyles.list}>
          {options.map((option) => (
            <>
              <li
                style={customStyles["list--item"]}
                key={option}
                role="menuitem"
                onClick={() => handleSelection(option)}
              >
                <img
                  style={customStyles["list--item--image"]}
                  src={runeImgSrc}
                  alt="rune"
                />
                {option}
              </li>
              <hr />
            </>
          ))}
        </ul>
      )}
    </>
  );
};
