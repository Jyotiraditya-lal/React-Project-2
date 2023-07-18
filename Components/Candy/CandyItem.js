import React from "react";


const CandyItems=(props)=>{


    return(
        <React.Fragment>
            <div>
                {props.name}-{props.description}-Rs{props.price}
            </div>
            <button onClick={props.onAddOne}>Buy One</button>
            <button onClick={props.onAddTwo}>Buy Two</button>
            <button onClick={props.onAddThree}>Buy Three</button>
        </React.Fragment>
    )
}

export default CandyItems
