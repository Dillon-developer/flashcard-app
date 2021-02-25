import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { listDecks } from "../utils/api/index";
import Decks from "./Deck/Decks";

function Home({ decks, setDecks, cards, setCards }) {
    useEffect(() => {
        const fetchDecks = async () => setDecks(await listDecks());
        fetchDecks();
    }, [setDecks]);

    return (
        <>
            <div className="row">
                {/* Create Deck Button brings the user to the Create Deck Screen */}
                <Link to="/decks/new">
                    <button className="btn btn-secondary">
                        <i class="bi bi-plus"></i> Create Deck
                    </button>
                </Link>
            </div>
            <Decks decks={decks} cards={cards} setDecks={setDecks} setCards={setCards} />
        </>
    );
}

export default Home;