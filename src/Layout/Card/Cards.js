import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Card from "./Card";
import { deleteCard, readDeck } from "../../utils/api/index";

function Cards() {
    const { deckId } = useParams();
    const history = useHistory();
    let content = [""];

    const [deck, setDeck] = useState({})

    useEffect(() => {
        const abortController = new AbortController();
        const fetchDeck = async () => setDeck(await readDeck(deckId, abortController.signal));
        fetchDeck();
        return () => abortController.abort();
    }, [deckId])

    const handleDeleteCard = async (e) => {
        if (window.confirm('Delete this card?')) {
            if (e.target.getAttribute("data-index") !== null)
                await deleteCard(e.target.getAttribute("data-index"));
            else{
                window.confirm('something went wrong.')
                history.push(`/`);
            }
            const fetchDeck = async () => setDeck(await readDeck(deckId));
            fetchDeck();
        }
    }

    if (deck.id)
        content = deck.cards.map((card, index) => {
            return (<Card card={card} index={index} handleDeleteCard={handleDeleteCard} />);
        });
    return (<>
        <div className="row mt-3">
            <h3>Cards</h3>
        </div>
        {deck.cards ? content : null}
    </>
    );
}

export default Cards;