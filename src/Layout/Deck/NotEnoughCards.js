import React from "react";

export default function NotEnoughCards({ cardLength = 0 }) {
    return (
        <>
            <h4>Not Enough Cards.</h4>
            <p>{`You need at least 3 cards to study. There are ${cardLength} cards in this deck.`}</p>
        </>
    )
}