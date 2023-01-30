import { useState } from "react";

const ContadorHooks = ()=>{

    const [count, setCount] = useState(0);
 
    const aumentar = ()=>{
        setCount(count+1)
    }

    return(
        <>
            <h1>-CONTADOR HOOKS-</h1>
            <p>{count}</p>
            <button onClick={aumentar}> AUMENTAR </button>
        </>
    )
}

export default ContadorHooks;