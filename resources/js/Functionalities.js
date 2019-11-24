import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import  { Redirect } from 'react-router-dom';
import Liste_groups from './components/Liste_groups';
import Liste_etud from './components/Liste_etud';
import Login from './components/Login';
import Logout from './components/Logout';
import Etudexclu from './components/Etudexclu';
import './mystyle.css' ;
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';

function Functionalities() {
    return (
      
        <div className="container">
        <Router>
            <div>
            <ul className="ulbar">
              <li >  <NavLink  to='/login'> <b className="textform">Se Connecter</b> </NavLink></li>
               <li> <NavLink to='/logout'> <b className="textform">Deconnecter </b></NavLink></li>
               
              <li> <NavLink to="/saisirAbs"><b className="textform">saisir les absences</b> </NavLink></li>
             <li>  <NavLink to="/etudExclus" ><b className="textform"> afficher les etudiants exclus </b></NavLink></li>
        </ul>
               <Route path="/saisirAbs" exact component={Liste_groups}/>
               <Route path="/check" exact component={Liste_groups}/>
               <Route path="/login" exact component={Login}/>
               <Route path="/logout" exact component={Logout}/>
<Route path="/etudExclus" exact component={Etudexclu}/>
<Route
  path='/etudiants/:id'
 exact render={({ staticContext, ...props }) => <Liste_etud {...props}  />}
/>
         

            </div>
               <Redirect  to="/login" />  ;  
        </Router>
         
        </div>
 
    );
}

export default Functionalities;

if (document.getElementById('example')) {
    ReactDOM.render(<Functionalities/>, document.getElementById('example'));
}
