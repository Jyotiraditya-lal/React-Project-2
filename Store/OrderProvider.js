import React,{useState} from "react";
import OrderContext from "./order-context";

const OrderProvider=(props)=>{

    const [CandyState,setCandyState]=useState([])

    const AddCandyHandler=(candy)=>{
        setCandyState([...CandyState,candy])
    }

    const AddbyOneHandler=(id)=>{
        for(let i=0;i<CandyState.length;i++){
            if(CandyState[i].id===id){
                CandyState[i].amount++
                setCandyState([...CandyState])
                break;
            }
            
        }
        
    }

    const AddbyTwoHandler=(id)=>{
        for(let i=0;i<CandyState.length;i++){
            if(CandyState[i].id===id){
                CandyState[i].amount+=2
                setCandyState([...CandyState])
                break;
            }
        }
    }

    const AddbyThreeHandler=(id)=>{
        for(let i=0;i<CandyState.length;i++){
            if(CandyState[i].id===id){
                CandyState[i].amount+=3
                setCandyState([...CandyState])
                break;
            }
        }
    }


    const order={
        candy: CandyState,
        AddCandy: AddCandyHandler,
        AddbyOne: AddbyOneHandler,
        AddbyTwo: AddbyTwoHandler,
        AddbyThree: AddbyThreeHandler
    }


    return(
        <OrderContext.Provider value={order}>
            {props.children}
        </OrderContext.Provider>

    )
} 

export default OrderProvider
