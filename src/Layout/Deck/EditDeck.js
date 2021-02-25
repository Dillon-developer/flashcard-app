import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api/index";
import BreadCrumbNav from "../Common/BreadCrumbNav";

function EditDeck() {
    const { deckId } = useParams();
    const [deck, setDeck] = useState("");
    const [deckName, setDeckName] = useState("");
    const [deckDescrip, setDeckDescrip] = useState("");
    const [changed, setChanged] = useState(false);


    const history = useHistory();

    const handleEditDeck = (event) => {
        event.preventDefault();
        if (changed) {
            const updatedDeck = {
                "name": deckName,
                "description": deckDescrip,
                "id": deckId
            };
            updateDeck(updatedDeck);
            setChanged(bool => bool = false);
        }
        history.push(`/decks/${deckId}`);
    }

    useEffect(() => {
        const fetchDeck = async () => setDeck(await readDeck(deckId));
        fetchDeck();
    }, [deckId]);

    const handleNameChange = ({target}) => { setDeckName(target.value); setChanged(bool => bool = true) }
    const handleDescripChange = ({target}) => { setDeckDescrip(target.value); setChanged(bool => bool = true) }
    return (
        <>
            <BreadCrumbNav link={`/decks/${deck.id}`} linkName={deck.name} pageName={"Edit Deck"} />
            <div className="row">
                <h2>Edit Deck</h2>
            </div>
            <form className="row" onSubmit={handleEditDeck}>
                <div className="form-group w-100">
                    <label htmlFor="deck-name">Name</label>
                    <input type="text" required className="form-control" defaultValue={deck.name} onLoad={handleNameChange} onChange={handleNameChange} />
                </div>
                <div className="form-group w-100">
                    <label htmlFor="deck-description">Description</label>
                    <textarea type="text" required className="form-control" defaultValue={deck.description} onLoad={handleDescripChange} onChange={handleDescripChange} />
                </div>
                <Link to={`/decks/${deckId}`}><button className="btn btn-secondary mr-2">Cancel</button></Link>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </>
    );
}

export default EditDeck;