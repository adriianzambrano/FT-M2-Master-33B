import React from "react";
import estilo from './Contador.module.css';

class Contador extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count: 0,
            claro: true
        }

    }

    aumentar=()=>{
        this.setState({
            count: this.state.count + 1,
            text: "Aumentaste"
        });
    }

    decrementar=()=>{
        this.state.count > 0 && this.setState({
            count: this.state.count - 1,
            text: "Decrementaste"
        });
        
        
    }
    reiniciar=()=>{
        this.setState({
            count: 0,
            text: "-REINICIADO-"
        });
    }

    toggle=()=>{

        this.setState({claro: !this.state.claro})
    }

    componentDidMount(){
        console.log("soy el componente, me Monte");
    }

    componentDidUpdate(){
        console.log("Soy el componene, me Actualice");
    }

    render(){
        return(
            <>
                <h3>Contador</h3>
                <p>{this.state.count}</p>
                <p>{this.state.text}</p>
                <div>
                    <button onClick={this.aumentar}> Aumentar</button>
                    <button onClick={this.decrementar}> Decrementar</button><br/>
                    <button onClick={this.reiniciar}> Reiniciar</button>
                </div>
                <hr />
                <div className={this.state.claro ? estilo.claro: estilo.oscuro}>
                    {this.state.claro ? "CLARO":"OSCURO"}
                </div>
                <button onClick={this.toggle}>TOGGLE</button>
            </>
        )
    }


}
export default Contador;
