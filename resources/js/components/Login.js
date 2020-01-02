import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import  { Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router';
import axios from 'axios';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';


export default class Login extends Component {



  constructor(){
    super();
    this.state = {
    post:'',
    email:'',
    password:'',
    id:-1,
  
  };

   this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
  
componentDidMount(){
 axios.get('/getuserid').then(response=>{
    this.setState({
        id:response.data
    });
})  
}
  handleChange(event) {
     //alert(event.target.checked);
if(event.target.name=="email"){
  this.setState({
       email:event.target.value
}
)
 }else{

 this.setState({
       password:event.target.value
 })
  }
}

  handleSubmit(event) {
  

     axios.get("/login/"+this.state.email+"/"+this.state.password).then(response=>{ 
   this.setState({
       post:response.data
});
if(this.state.post=="0"){
  alert("Email ou mot de passe incorrect");
}
   
});
     
 event.preventDefault();
  }



render() {    
   if(this.state.id!=0 && this.state.id!=-1){
        return  <Redirect  to="/saisirAbs" />;
   }


   else{



if(this.state.post!="0" && this.state.post!=''){
   return  <Redirect  to="/saisirAbs" />;
};

  return(
    <div className="divclass2">
  <div className="divclass">
  <h2 className="textform">login:</h2>
  <br/>
   <form  className="form" onSubmit={this.handleSubmit}>
   
    <label >Email:</label> <br/>
    <input type="text"  name="email" onChange={this.handleChange} />
    <br/>


    <label >Mot de passe (8 characters minimum):</label> <br/>
    <input type="password"  name="password"
           minlength="8" required onChange={this.handleChange} />

      <br/>
     <button className="busubmit" type="submit">Se connecter</button>
         </form>

         </div>
         </div>
  );
  
}
}
}
