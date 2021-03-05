import React from "react";
import ReactDOM from "react-dom";
//appel des différent composants - pages
import ComposantClient from "./AffichageClient";
import ClientForm from "./ClientForm";

import "./styles.css";

class App extends React.Component {
  state = {
    //state c un état avec un ou des propriétés
    tableauClients: [
      { id: 1, nom: "1er Client" },
      { id: 2, nom: "2e Client" },
      { id: 3, nom: "3e Client" }
    ]
  };

  functionDelete = id => {
    // [...] permet comme slice de faire une copie et il faut toujours travailler sur une copie
    const copieTableauClient = [...this.state.tableauClients];
//attention this n'est pas un objet et ne fais non plus appel à un objet c juste une synthaxe de react
    const index = copieTableauClient.findIndex(clientChoisi => clientChoisi.id === id);

    copieTableauClient.splice(index, 1);
//permet à la valeur de copieTableauClient de remplacer la valeur dans l'original' tableauClient
    this.setState({ tableauClients : copieTableauClient });
  };


  //fonction qui valeur gérer individuellement les entrées et va les envoyé à la functionSbmit 
  fgestionAjout = varInputClient => {

    const copienouvelleEntreeClient = [...this.state.tableauClients];
    copienouvelleEntreeClient.push(varInputClient);

    this.setState({ tableauClients : copienouvelleEntreeClient});
  };

  render() {
    const title = "Liste des clients";

    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {this.state.tableauClients.map(listMapClient => (
//variale listMapClient qui représent l'objet tableau map
            <ComposantClient
//props c est comme un attribut HTML
//du coup details et pourDelete sont des props qui représentent des objets ou fonctions, ce sont des raccourcis ou repères réutilisatble aileurs dans d'autres pages

              key={listMapClient.id}
              details={listMapClient}
              pourDelete={this.functionDelete}
            />
          ))}
        </ul>
        <ClientForm entreeClient={this.fgestionAjout} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
