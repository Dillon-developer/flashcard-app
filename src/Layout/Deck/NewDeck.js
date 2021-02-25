import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api/index";
import BreadCrumbNav from "../Common/BreadCrumbNav";

function NewDeck({ decks }) {
    const [newDeckName, setNewDeckName] = useState("");
    const [newDeckDesc, setNewDeckDesc] = useState("");

    const history = useHistory();

    const handleCreateDeck = (event) => {
        event.preventDefault();
        const newDeck = { id: decks.length === 0 ? 1 : decks[decks.length-1].id + 1, name: newDeckName, description: newDeckDesc };
        createDeck(newDeck);
        history.push(`/decks/${decks.length === 0 ? 1 : decks[decks.length-1].id + 1}`);
    }
    const handleNameChange = ({target}) => setNewDeckName(target.value);
    const handleDescChange = ({target}) => setNewDeckDesc(target.value);
    return (
        <>
            <BreadCrumbNav pageName={"Create Deck"} />
            <div className="row">
                <h2>Create Deck</h2>
            </div>
            <form className="row" onSubmit={handleCreateDeck}>
                <div className="form-group w-100">
                    <label htmlFor="deck-name">Name</label>
                    <input type="text" required className="form-control" onChange={handleNameChange} placeholder="Deck Name" ></input>
                </div>
                <div className="form-group w-100">
                    <label htmlFor="deck-description">Description</label>
                    <textarea required className="form-control" onChange={handleDescChange} placeholder="Brief description of the deck" ></textarea>
                </div>
                <Link to="/"><button className="btn btn-secondary mr-2">Cancel</button></Link>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </>
    );
}

export default NewDeck;