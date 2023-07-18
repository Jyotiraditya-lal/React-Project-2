import React,{useState,useContext} from "react";
import OrderContext from "../../Store/order-context";


const CandyForm=(props)=>{

    const CandyCtx= useContext(OrderContext)
    const [enteredId,setEnteredId]=useState('')
    const [enteredName,setEnteredName]=useState('')
    const [enteredDescription,setEnteredDescription]=useState('')
    const [enteredPrice,setEnteredPrice]=useState('')
        
    const NameChangeHandler=(event)=>{
        setEnteredName(event.target.value)
    }

    const DescriptionChangeHandler=(event)=>{
        setEnteredDescription(event.target.value)
    }

    const PriceChangeHandler=(event)=>{
        setEnteredPrice(event.target.value)
    }

    const IdChangeHandler=(event)=>{
        setEnteredId(event.target.value)
    }

    const SubmitHandler=(event)=>{

        event.preventDefault()
        const order={
            id: enteredId,
            name: enteredName,
            price: enteredPrice,
            description: enteredDescription
        }
        CandyCtx.AddCandy({...order, amount: 0})
        setEnteredName('')
        setEnteredPrice('')
        setEnteredDescription('')
    }



    return(
     <React.Fragment>
        <form onSubmit={SubmitHandler}>
            <div>
                <label htmlFor="id">Id:</label>
                <input id="id" type="number" value={enteredId} onChange={IdChangeHandler} />
            </div>
            <div>
                <label htmlFor="name">Candy Name:</label>
                <input id="name" type="text" value={enteredName} onChange={NameChangeHandler} />
            </div>
            <div>
                <label htmlFor="description">Candy description:</label>
                <input id="description" type="text" value={enteredDescription} onChange={DescriptionChangeHandler} />
            </div>
            <div>
                <label htmlFor="price">Candy Price (in Rs):</label>
                <input id="price" type="number" value={enteredPrice} onChange={PriceChangeHandler} />
            </div>
            <button type="submit">Add Candy</button>
     </form>
    
     </React.Fragment>
        
    )
}

export default CandyForm
