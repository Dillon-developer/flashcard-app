import React, { useState, useEffect } from "react";
import { Switch, Route, useParams, useHistory } from "react-router-dom";
import { deleteDeck, readDeck } from "../../utils/api/index";
import Cards from "../Card/Cards";
import DeckInfoCard from "./DeckInfoCard";
import Study from "./Study";
import AddCard from "../Card/AddCard";
import EditDeck from "./EditDeck";

function Deck() {
    const { deckId } = useParams();
    const history = useHistory();

    const [deck, setDeck] = useState([{}]);

    const handleDeleteDeck = async ({target}) => {
        if (window.confirm('Delete this deck?')) {
            await deleteDeck(target.getAttribute("data-index"));
            history.push("/")
        }
    }

    useEffect(() => {
        const abortController = new AbortController();

        const fetchDeck = async () => setDeck(await readDeck(deckId, abortController.signal));
        fetchDeck();
        return () => abortController.abort();
    }, [deckId]);

    return (
        <>
            <Switch>
                <Route path="/decks/:deckId/cards/new">
                    <AddCard />
                </Route>
                <Route path="/decks/:deckId/study">
                    <Study />
                </Route>
                <Route path="/decks/:deckId/edit">
                    <EditDeck />
                </Route>
                <Route path="/decks/:deckId">
                    <DeckInfoCard deck={deck} deckId={deckId} handleDeleteDeck={handleDeleteDeck} />
                    <Cards deckId={deckId} />
                </Route>
            </Switch>
        </>
    );
}
export default Deck;