import React from "react";
import Contador from "./Contador";
import ContadorHooks from "./ContadorHooks";

class Home extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        return(
            <>
                <h1>Ejemplo</h1>
                <Contador numero={1}/>
                <hr />
                <ContadorHooks/>
            </>
        )
    }


}
export default Home;
