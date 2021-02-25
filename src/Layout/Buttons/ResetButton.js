import React from "react";

function ResetButton({ reset }) {
    return (
        <>
            <div id="resetBtn" className="justify-content-center mt-1 btn btn-primary ml-2 mb-3" onClick={reset}>
                Reset
            </div>
        </>
    );
}

export default ResetButton;