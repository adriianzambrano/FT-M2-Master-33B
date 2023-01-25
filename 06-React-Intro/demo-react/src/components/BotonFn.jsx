
// Hicimos un componente Funcional

var BotonFn = (props) => {
    var {click} = props;
    return(
        <>
            <button>{click}</button>
        </>
    )

}
export default BotonFn;