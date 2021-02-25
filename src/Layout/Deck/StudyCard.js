import React from "react";
import NextButton from "../Buttons/NextButton";
import ResetButton from "../Buttons/ResetButton";

function StudyCard({ cardText, onBack, onEnd, cardNum, cardTotal, next, flip, reset }) {
    return (
        <>
            <div className="row d-flex justify-content-center mt-1 w-100">
                <div id="flashCard" className="card m-1 p-5">
                    <div className="card-body row text-center">
                        <h3 className="card-text col-12" >{cardText}</h3>
                    </div>
                </div>
                <div className="col-12">
                    <h6 className="card-text d-flex justify-content-center mb-3">{`Card ${cardNum} of ${cardTotal}`}</h6>
                </div>
                <div id="flipBtn" className="d-flex justify-content-center mt-1 btn btn-secondary mb-3" onClick={flip}>
                    Flip
                </div>
                {onBack ? <NextButton next={next} /> : null}{onEnd ? <ResetButton reset={reset} /> : null}
            </div>
        </>
    );
}

export default StudyCard;