import React from "react";
import { Link } from "react-router-dom";
import { deleteDeck, listDecks } from "../../utils/api/index";

function DeckCard({ deck = {}, index, setDecks }) {
    const handleDeleteDeck = async (e) => {
        if (window.confirm('Delete this deck?')) {
            if (e.target.getAttribute("data-index") === null)
                await deleteDeck(e.target.parentNode.getAttribute("data-index"));
            else
                await deleteDeck(e.target.getAttribute("data-index"));
        }
        const fetchDecks = async () => setDecks(await listDecks())
        fetchDecks();
    }

    return (<div key={index} className="row text-center d-flex justify-content-center mt-2 mb-2">
        <div className="card w-100" >
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{deck.name}</h5>
                    <Link to={`/decks/${deck.id}`}><h6 className="text-info">{deck.cards.length} cards</h6></Link>
                </div>
                <p className="card-text">{deck.description}</p>

                {/* Clicking the View button brings the user to the Edit Deck screen */}
                <div className="d-flex justify-content-between">
                    <div>
                        <Link to={`decks/${deck.id}`}>
                            <button className="btn btn-secondary mr-1" aria-label="Left Align">
                                <i class="bi bi-eye"></i> View
                            </button>
                        </Link>

                        {/* Clicking the Study button brings the user to the Study screen */}
                        <Link to={`decks/${deck.id}/study`}>
                            <button className="btn btn-primary">
                                <i class="bi bi-book"></i> Study
                             </button>
                        </Link>
                    </div>

                    {/* Clicking the Delete button shows a warning message before deleting the deck */}
                    <button data-index={deck.id} className="btn btn-danger" onClick={handleDeleteDeck}>
                        <i data-index={deck.id} class="bi bi-trash-fill"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default DeckCard;