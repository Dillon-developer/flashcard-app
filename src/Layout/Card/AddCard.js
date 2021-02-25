import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, createCard } from "../../utils/api/index";
import BreadCrumbNav from "../Common/BreadCrumbNav";
import CardForm from "./CardForm";

function AddCard() {
    const { deckId, cardId } = useParams();
    const [deck, setDeck] = useState("");
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");

    const history = useHistory();

    const handleAddCard = (event) => {
        event.preventDefault();
        const newCard = {
            "front": front,
            "back": back,
            "deckId": deckId,
            "id": cardId
        };
        createCard(deckId, newCard);

        const fetchDeck = async () => setDeck(await readDeck(deckId));
        fetchDeck();
        history.push(`/decks/${deckId}`);
    }

    useEffect(() => {
        const abortController = new AbortController();
        const fetchDeck = async () => setDeck(await readDeck(deckId, abortController.signal));
        fetchDeck();
        return () => abortController.abort();
    }, [deckId, history]);

    const handleFrontChange = ({target}) => setFront(target.value);
    const handleBackChange = ({target}) => setBack(target.value);
    return (
        <>
            <BreadCrumbNav link={`/decks/${deck.id}`} linkName={deck.name} pageName={"Add Card"} />
            <div className="row d-flex">
                <h3 className="mr-1">{deck.name}:</h3><h3>Add Card</h3>
            </div>
            <CardForm onSubmit={handleAddCard} handleFrontChange={handleFrontChange} handleBackChange={handleBackChange}/>
        </>
    );
}

export default AddCard;