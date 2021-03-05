import React, { Component } from "react";
//import { render } from "react-dom";

class ComposantClient extends Component{

  render(){
    
    //importer les 2 props en même temps
const { details, pourDelete } = this.props;

return(
  <li>
    {details.nom} <button onClick={() => pourDelete(details.id)}>X</button>
  </li>
);
  }
}

export default ComposantClient;