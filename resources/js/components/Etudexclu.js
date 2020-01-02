import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import  { Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router';
import axios from 'axios';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';


export default class Etudexclu extends Component {



  constructor(props){
    super(props);
    this.state = {
    post:[],
    gp:[],
    id:-1,
   
  };

  
    }
  
componentDidMount(){

axios.get('/getuserid').then(response=>{
    this.setState({
        id:response.data
    });

 axios.get("/etudiants/exclus/"+this.state.id).then(response=>{ 
   this.setState({
       post:response.data
});
});

axios.post("/etudiants/exclus/"+this.state.id).then(response=>{ 
   this.setState({
       gp:response.data
});
})




})




}  


  

render() {   
 if(this.state.id==0){
        return  <Redirect  to="/login" />;
   };  


  const items = [];


for (var i = 0; i < this.state.post.length; i++) {
  items.push(
                       <tr>
                      
                        <td> {this.state.post[i]}</td>

                        <td> {this.state.gp[i]} </td>
                        
                       </tr>


                       )
}

           
    

  return(
  <div className="divclass2">
<div className="divclass">
<div className="divtable">
<h2> Les etudiants exclues : </h2>
<table className="rwd-table">
  <thead>
  <tr>
      <th> Etudiant </th>
      <th> Groupe </th>

    </tr>
    </thead>
  <tbody>
     {items}
  </tbody>
</table>
</div>
</div>
</div>
  );
  
}
}


