import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Manage from './components/Manage/Manage/Manage';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
function App() {


  if(localStorage.getItem('userInfo')===null){
    const user={admin:false,email:'',name:'',photo:'',token:'',isSignedIn:false};
    localStorage.setItem('userInfo',JSON.stringify(user));
  }
  else{
    
  }
  return (
    <div className="App">
    <Router>
    <Switch>
    <Route exact path="/">
    <Home></Home>
    </Route>
    <Route path="/login">
    <Login></Login>
    </Route>
    <PrivateRoute path="/manage/:serviceType/:serviceId">
    <Manage></Manage>
    </PrivateRoute>
  </Switch>
  </Router>
    </div>
  );
}

export default App;
