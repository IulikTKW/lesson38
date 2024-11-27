import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "./counterSlice";

const Counter = () => {
    const {firstName, lastName} = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return(
        <div>           
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
           
           
           <button onClick={() => dispatch(incrementByValue(5))}>incrementByValue</button>
       
        <p>{firstName}</p>
        <p>{lastName}</p>
       
       
        </div>
    )
}

export default Counter;