import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../../utils/api/index";
import BreadCrumbNav from "../Common/BreadCrumbNav";
import CardForm from "./CardForm";

function EditCard() {
    const { deckId, cardId } = useParams();
    const [card, setCard] = useState([])
    const [deck, setDeck] = useState([]);
    const [changed, setChanged] = useState(false);

    const history = useHistory();

    const handleEditCard = (event) => {
        event.preventDefault();
        if (changed) {
            const updatedCard = {
                "front": front,
                "back": back,
                "deckId": deckId,
                "id": cardId
            };
            updateCard(updatedCard);
            setChanged(bool => bool = false);
        }
        history.push(`/decks/${deckId}`);
    }

    useEffect(() => {
        const fetchDeck = async () => setDeck(await readDeck(deckId));
        fetchDeck();
        const fetchCard = async () => setCard(await readCard(cardId));
        fetchCard();
    }, [cardId, deckId]);

    const [front, setFront] = useState(card.front);
    const [back, setBack] = useState(card.back);

    const handleFrontChange = ({target}) => { setFront(target.value); setChanged(bool => bool = true) };
    const handleBackChange = ({target}) => { setBack(target.value); setChanged(bool => bool = true) };
    return (
        <>
            <BreadCrumbNav link={`/decks/${deck.id}`} linkName={deck.name} pageName={"Edit Card"} />
            <div className="row">
                <h3>Edit Card</h3>
            </div>
            <CardForm onSubmit={handleEditCard} handleFrontChange={handleFrontChange} handleBackChange={handleBackChange} />
        </>
    );
}


export default EditCard;