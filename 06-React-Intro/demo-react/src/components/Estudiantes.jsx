

var Estudiantes = (props) =>{
    var {alumnos} = props; // ---------------------> destructuring
    return(

        <>
            <h2>Estudiantes: </h2>
            <div>
                {
                    alumnos.map((alumno) =>{
                        return(
                            <>
                            <p>Nombre: {alumno.nombre} </p>
                            <p>Apellido: {alumno.apellido}</p>
                            <p>Musica Favorita: {alumno.band}</p>
                            <span>Edad: {alumno.edad}</span>
                            <hr/>
                            </>
                        )
                    })
                }
                
            </div>
            
        </>

    )
}

export default Estudiantes;