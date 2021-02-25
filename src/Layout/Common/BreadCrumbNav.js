import React from "react";
import { Link } from "react-router-dom";

function BreadCrumbNav({ pageName = "Page Name", link = "", linkName = "", }) {
    return (
        <>
            <div className="row">
                <Link className="m-1" to="/"><i class="bi bi-house m-1"></i>Home</Link>
                {link !== "" ? <p className="m-1 text-info">/</p> : ""}
                <Link className={link !== "" ? "m-1" : ""} to={link}>{linkName}</Link>
                <p className="m-1 text-info">/ {pageName}</p>
            </div>
        </>
    );
}

export default BreadCrumbNav;