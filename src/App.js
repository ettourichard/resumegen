import React from 'react';
import Categorie from "./components/Categorie"
import './App.css';
import resume_file from "./data/exemple.json"

class App extends React.Component {

  // on récupère le contenu depuis un fichier json local pour le moment..
  state = resume_file;


  render(){
    return (
      <div class="container">

        {this.state.map(categorie => (
          <Categorie resume={categorie} />
          ))
        }
      
        <div>
          <form className="d-print-none">
            <h4>Ajouter un élément</h4>
            <input type="text" />
            <button type="submit" onClick="handleAddCategorie(e)">Valider</button>
          </form>
        </div>
      </div>

    );
  }

  handleAddCategorie(e){
    e.preventDefault();
      console.log(e);
  }

}

export default App;
