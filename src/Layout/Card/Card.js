import React from "react";
import { Link } from "react-router-dom";

function Card({ card = { front: "front", back: "back" }, index, handleDeleteCard }) {
    return (<>
        <div key={index} className="row text-center d-flex justify-content-center mt-2 mb-2">
            <div className="card w-100">
                <div className="card-body row">
                    <p className="card-text col-6">{card.front}</p>
                    <p className="card-text col-6">{card.back}</p>
                </div>
                <div className="d-flex justify-content-end">
                    <div>
                        <Link to={`/decks/${card.deckId}/cards/${card.id}/edit`}>
                            <button className="btn btn-secondary mr-1">
                                <i class="bi bi-pencil-square"></i> Edit
                            </button>
                        </Link>
                        <button data-index={card.id} className="btn btn-danger" onClick={handleDeleteCard}>
                            <i data-index={card.id} class="bi bi-trash-fill"></i> Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Card;