import React,{useContext} from "react";
import OrderContext from "../../Store/order-context";

const Cart=(props)=>{

    const CandyCtx=useContext(OrderContext)
    const CartItems= <ul>{CandyCtx.candy.map(Candy=>
                                   <li key={Candy.id}>
                                    Name:{Candy.name}, Price:{Candy.price},Amount:{Candy.amount}
                                   </li>
        
        )}</ul>

    let totalAmount=0
    for(let i=0;i<CandyCtx.candy.length;i++){
        totalAmount=totalAmount+((CandyCtx.candy[i].price)*(CandyCtx.candy[i].amount))
    }

    return(
        <React.Fragment>
            {CartItems}
            <div> Total Amount: {totalAmount}</div>
            <button onClick={props.onCancel}>Cancel</button>
            <button>Order </button>
        </React.Fragment>
    )
}

export default Cart
