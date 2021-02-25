import React, { useState, useEffect } from "react";
import BreadCrumbNav from "../Common/BreadCrumbNav";
import StudyCard from "./StudyCard";
import NotEnoughCards from "./NotEnoughCards";
import { readDeck } from "../../utils/api/index";
import { useParams } from "react-router-dom";

function Study() {
    const { deckId } = useParams();
    const [cardNum, setCardNum] = useState(1);
    const [cardText, setCardText] = useState("front");
    const [cardTotal, setCardTotal] = useState(0);
    const [onBack, setOnBack] = useState(false);
    const [onEnd, setOnEnd] = useState(false);
    const [deck, setDeck] = useState([{}]);

    const flip = () => {
        if (deck.cards) {
            if (cardText === deck.cards[cardNum - 1].front) {
                setCardText(text => text = deck.cards[cardNum - 1].back)
                if (cardNum !== cardTotal)
                    setOnBack(bool => bool = true);
                else
                    setOnEnd(bool => bool = true);
            }
            else {
                setCardText(text => text = deck.cards[cardNum - 1].front)
            }
        }
    }

    const next = () => {
        if (deck.cards) {
            setCardText(text => text = deck.cards[cardNum].front);
            setCardNum(num => num < deck.cards.length ? num + 1 : num + 0);
            setOnBack(bool => bool = false);
        }
    }

    const reset = () => {
        if (deck.cards) {
            setCardText(text => text = deck.cards[0].front);
            setCardNum(num => num = 1);
            setOnBack(bool => bool = false);
            setOnEnd(bool => bool = false);
        }
    }

    useEffect(() => {
        const abortController = new AbortController();
        const fetchDeck = async () => setDeck(await readDeck(deckId, abortController.signal));
        fetchDeck()

        return () => abortController.abort();
    }, [deckId]);

    useEffect(() => {
        if (deck.cards) {
            setCardTotal(deck.cards.length);
            if (deck.cards[cardNum - 1])
                setCardText(deck.cards[cardNum - 1].front);
            else
                setCardText("");
        }
    }, [deck, cardNum]);

    if (deck.cards !== undefined)
        return (
            <>
                <BreadCrumbNav link={`/decks/${deckId}`} linkName={deck.name} pageName={'Study'} />
                <div className="row">
                    <h2>Study: {deck.name}</h2>
                </div>
                { cardTotal > 2 ? <StudyCard cardText={cardText} onBack={onBack} onEnd={onEnd} cardNum={cardNum} setCardNum={setCardNum} cardTotal={cardTotal} next={next} flip={flip} reset={reset} /> : <NotEnoughCards cardLength={cardTotal} />}
            </>
        );
    else
        return null;
}

export default Study;