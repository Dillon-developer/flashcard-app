import React from "react";

function NextButton({ next }) {
    return (
        <>
            <div id="nextBtn" className="justify-content-center mt-1 btn btn-primary ml-2 mb-3" onClick={next}>
                Next
            </div>
        </>
    );
}

export default NextButton;