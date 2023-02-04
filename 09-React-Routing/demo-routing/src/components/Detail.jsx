import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Detail = () =>{

    const [user, setUser] = useState({})

    const {userId} = useParams()
    

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res=>res.json())
        .then(data=> setUser(data))
        .catch(err=>console.log(err))

    })

    return(
        <div>
            <h3>detalle de Usuario {user.name}</h3>
            <p>Nombre: {user.name} </p>
            <p>Email: {user.email} </p>
            <p>Telefono: {user.phone} </p>
        </div>
    )
}
export default Detail;