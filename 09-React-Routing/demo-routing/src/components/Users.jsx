import React from "react";
import { Link } from "react-router-dom";

class Users extends React.Component{
    constructor(props){
        super(props)
        this.state={
            users: []
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => this.setState({users:data}))
        .catch(err => console.log(err))
    }

    render(){
        return(
            <>
                <h3>Componente Usuario</h3>
                <hr />
                <br />
                {
                    this.state.users.map((user)=>{
                        return(
                            <div key={user.id}>
                                <Link to={`/users/${user.id}`}>
                                    <h3>{user.name}</h3>
                                </Link>
                                <h4>{user.email}</h4>
                                <hr/>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}

export default Users;