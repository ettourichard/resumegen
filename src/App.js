import React from 'react';
import Categorie from "./components/Categorie"
import './App.css';


class App extends React.Component {

  resume = [
    {
      "id":"1",
      "title":"Experience Professionnelle",
      "lignes":[
        {
          "id":"7",
          "title":"Société Générale",
          "content":"Mission de 3 ans a la société générale BDDF : crédit consommation web"
        },
        {
          "id":"8",
          "title":"Société Générale",
          "content":"Mission de 3 ans a la société générale BDDF : crédit consommation web"
        },
        {
          "id":"9",
          "title":"Société Générale",
          "content":"Mission de 3 ans a la société générale BDDF : crédit consommation web"
        }
      ],
    }, 
    {
      "id":"2",
      "title":"Compétences",
      "lignes":[
        {
          "id":"1",
          "title":"Société Générale",
          "content":"Mission de 3 ans a la société générale BDDF : crédit consommation web"
        },
        {
          "id":"2",
          "title":"Société Générale",
          "content":"Mission de 3 ans a la société générale BDDF : crédit consommation web"
        },
        {
          "id":"3",
          "title":"Société Générale",
          "content":"Mission de 3 ans a la société générale BDDF : crédit consommation web"
        }
      ],
    }, 
    {
      "id":"3",
      "title":"Formation",
      "lignes":[
        {
          "id":"4",
          "title":"Société Générale",
          "content":"Mission de 3 ans a la société générale BDDF : crédit consommation web"
        },
        {
          "id":"5",
          "title":"Société Générale",
          "content":"Mission de 3 ans a la société générale BDDF : crédit consommation web"
        },
        {
          "id":"6",
          "title":"Société Générale",
          "content":"Mission de 3 ans a la société générale BDDF : crédit consommation web"
        }
      ],
    },

  ];


  render(){
    return (
      <div class="container">

        {this.resume.map(categorie => (
          <Categorie resume={categorie} />
          ))
        }
      
      </div>

      
    );
  }
}

export default App;
