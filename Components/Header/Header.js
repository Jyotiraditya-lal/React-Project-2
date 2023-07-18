import React,{useContext} from "react";
import OrderContext from "../../Store/order-context";

const Header=(props)=>{


    const CandyCtx=useContext(OrderContext)

    let number=0;
    for(let i=0;i<CandyCtx.candy.length;i++){
        number=number+ Number(CandyCtx.candy[i].amount)
    }

    

    return(
        <button className="button" onClick={props.onDisplay}>
            <span>Cart</span>
            <span>({number})</span>
        </button>
    )
}

export default Header
