import React, { Component } from "react";

class ClientForm extends Component {
  state = {
    //propriété
    nouvelleEntreeClient: ""
  };


//method qui va permettre de modifier manuellement l'input
  MethodChangement = event => {
    this.setState({ nouvelleEntreeClient: event.currentTarget.value });
  };



  functionSubmit = event => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = this.state.nouvelleEntreeClient;

    this.props.entreeClient({ id, nom });

    this.setState({ nouvelleEntreeClient: "" });
  };



  render() {
    return (
      <form onSubmit={this.functionSubmit}>
        <input
// value qui pointe direct sur la propriété nouvelleEntreeClient du state
          value={this.state.nouvelleEntreeClient} 
          onChange = {this.MethodChangement}
          type="text"
          placeholder="Ajouter un client"
        />
        <button>Confirmer</button>
      </form>
    );
  }
}

export default ClientForm;
