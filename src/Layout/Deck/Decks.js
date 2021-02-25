import React from "react";
import DeckCard from "./DeckCard";

function Decks({ decks=[], setDecks, cards, setCards }) {
  const content = decks.map((deck, index) => {
    return (<DeckCard deck={deck} cards={cards} index={index} setDecks={setDecks} />);
  })

  return (
    <>
      {content}
    </>
  );
}

export default Decks;