import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import  { Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';


class Liste_groups extends Component {

    constructor(){
    super();
    this.state = {
    tabs:[],
    id:-1,
  };
    }
  
componentWillMount(){

   axios.get('/getuserid').then(response=>{
    this.setState({
        id:response.data
    });


    if(this.state.id==0){
        return  <Redirect  to="/login" />
   };
    axios.get('/groupes/'+this.state.id).then(response=>{
    this.setState({
        tabs:response.data
    });
});
})

   

   
}
render() {   

    if(this.state.id==0){
        return  <Redirect  to="/login" />
   }; 
   console.log(this.state.tabs);
  const items = [];
  this.state.tabs
    .forEach(item => items.push(
    
                       <span  >
                      
                       <Link to={"/etudiants/"+ item} className="class1"  > {item}</Link>
                       </span>
 
                     ))

  return(
    <div className="divclass2">
    <div className="divclass">
     <h1 className="animated"> liste des groupes:</h1>
   
     <div className="list-type3">{items}</div>
 
     </div>
     </div>
  );
}
}



export default Liste_groups;

if (document.getElementById('example')) {
    ReactDOM.render(<Liste_groups />, document.getElementById('example'));
}



