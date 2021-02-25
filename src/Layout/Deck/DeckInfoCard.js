import React from "react";
import { Link } from "react-router-dom";
import BreadCrumbNav from "../Common/BreadCrumbNav";

function DeckInfoCard({ deck, deckId, handleDeleteDeck }) {
    return (
        <>
            <BreadCrumbNav pageName={deck.name} />
            <div className="row text-center d-flex justify-content-center mt-1">
                <div className="w-100">
                    <div>
                        <div className="d-flex justify-content-between">
                            <h4>{deck.name}</h4>
                        </div>
                        <p className="card-text">{deck.description}</p>

                        {/* Clicking the View button brings the user to the Edit Deck screen */}
                        <div className="d-flex justify-content-between">
                            <div>
                                <Link to={`/decks/${deckId}/edit`}>
                                    <button className="btn btn-secondary mr-1">
                                        <i class="bi bi-pencil-square"></i> Edit
                                    </button>
                                </Link>

                                {/* Clicking the Study button brings the user to the Study screen */}
                                <Link to={`/decks/${deckId}/study`}>
                                    <button className="btn btn-primary mr-1">
                                        <i class="bi bi-book"></i> Study
                                     </button>
                                </Link>
                                {/* Clicking the Study button brings the user to the Study screen */}
                                <Link to={`/decks/${deckId}/cards/new`}>
                                    <button className="btn btn-primary">
                                        <i class="bi bi-plus"></i> Add Card
                                     </button>
                                </Link>
                            </div>

                            {/* Clicking the Delete button shows a warning message before deleting the deck */}
                            <button data-index={deckId} className="btn btn-danger" onClick={handleDeleteDeck}>
                                <i class="bi bi-trash-fill"></i> Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DeckInfoCard;