import './App.css';
import { Route, Link, useHistory } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import Detail from './components/Detail';

function App() {

  const history = useHistory()
  return (
    <>
      <Route path="/">
        <div>
          <h2>esto es navBar</h2>

          <ul>
            <li>
                <button onClick={()=>{history.push('/users')}}>Users</button>
            </li>
            <li>
                <button onClick={()=>{history.push('/')}}>Home</button>
            </li>
          </ul>
          
          
          <hr/>
        </div>
      </Route>

      {/* <Route path="/home" >
        <Home name="Adrian"/>
      </Route> */}
      {/* <Route path="/home" children={() =><Home name="JOAQUIN"/>}/> */}
      {/* <Route path="/home" render={(unObjeto)=> <Home name="ZAMBRANO" unObjeto={unObjeto} />}/> */}

      <Route exact path="/" component={Home}/>  {/* no se le puede pasar props en este metodo */}


      <Route exact path="/users" >
        
          <div> 
            <Users></Users>
            
          </div>
      </Route>

      <Route path='/users/:userId' component={Detail}
      //  render={({match})=> <Detail userId={match.params.userId}/>} 
      
      
      />
        
      
    </>
  );
}

export default App;
