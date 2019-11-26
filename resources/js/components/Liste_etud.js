import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import  { Redirect } from 'react-router-dom'
import { browserHistory } from 'react-router';
import axios from 'axios';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';


export default class Liste_etud extends Component {



  constructor(props){
    super(props);
    this.state = {
    post:[],
    ids:[],
    chemin:'',
    num:0,
    numtd:0,
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
  
componentDidMount(){
 axios.get("/etudiants/"+this.props.match.params.id).then(response=>{ 
   this.setState({
       post:response.data
});
})

 axios.post("/etudiants/"+this.props.match.params.id).then(response=>{ 
   this.setState({
       ids:response.data
});
})

 axios.get("/profs/numtd/"+this.props.match.params.id).then(response=>{ 
   this.setState({
       numtd:response.data[0]
});
})
}  


  handleChange(event) {
     //alert(event.target.checked);

  this.setState({
       num:this.state.num + 1
})
 
  }

  handleSubmit(event) {
   this.state.chemin='';
 for (var i = 0; i < this.state.post.length; i++) {
    
      if(event.target[i].checked==true){

         if(this.state.chemin=='') {
        this.state.chemin=event.target[i].value;}
        else{
      this.state.chemin=this.state.chemin+","+event.target[i].value;}
}
    //alert(this.state.chemin); 
  }


 axios.post("/etudiants/saisir/"+this.state.chemin);
  axios.post("/profs/numtd/"+this.props.match.params.id);
 this.props.history.push('/saisirAbs');
 event.preventDefault();

    //alert('Votre parfum favori est : ' + this.state.chemin);

  }



render() {    

console.log(this.state.post);
console.log(this.state.ids);

  const items = [];


for (var i = 0; i < this.state.post.length; i++) {
  items.push(


<label class="container1">{this.state.post[i]}
 <input type="checkbox"  name="form[]" value={this.state.ids[i]} onChange={this.handleChange} /> 

  <span class="checkmark"></span>
</label>

   )
}

           
    

  return(
    <div className="divclass2">
  <div className="divclass">

  <h2 className="animated">numero du td :{this.state.numtd+1}</h2>
  <br/>
  <br/>

   <form  onSubmit={this.handleSubmit}>
  <div>
     <div>{items}</div>
    </div>
    <div> 
     <button className="busubmit" type="submit">Sauvegarder</button>
     </div>
         </form>

         </div>
         </div>
  );
  
}
}


