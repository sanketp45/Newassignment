import logo from './logo.svg';
import  UserInfo  from './UserInfo';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserData from './UserData';
import { useHistory } from "react-router-dom";
function App() {
    return (
 <div>   
 
 

     
<div class="nav">
<Link to="/userdata">Home</Link>
<Link to="/users">Users</Link>
  

</div>

    <switch>
    <Route path="/userdata" component={UserData} />
          <Route  path="/users" component={UserInfo} exact />
           
                      
          </switch>
</div>         

  );
}

export default App;
