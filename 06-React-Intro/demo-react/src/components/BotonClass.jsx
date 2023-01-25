
// Hicimos un componente de Clase

import React from "react";
export default class BotonClass extends React.Component{

    constructor(props){
        console.log(props)
        super(props)
    }

    render(){ // en componente de clases hay que renderizar
        return(
            <>
                <button>
                    {this.props.click}
                </button>
            </>
        )
    }

}

