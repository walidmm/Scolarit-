import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import  { Redirect } from 'react-router-dom';
import axios from 'axios';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';


export default class Logout extends Component {



  constructor(){
    super();
    this.state = {
    id:-1,
  };


    }
  
componentDidMount(){
 axios.get('/deconnecter').then(response=>{
    this.setState({
        id:response.data
    });


})

}  


 


render() {    


if(this.state.id==0){
  return  <Redirect  to="/login" />;
}
else{
  return 0;
}
}
}
