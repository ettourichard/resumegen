import React, {Component} from 'react';
import Categorie from "./components/Categorie"
import ResumeForm from "./components/ResumeForm"
import './App.css';
import resume_file from "./data/data.json"


class App extends Component {

  // on récupère le contenu depuis un fichier json local pour le moment..
  state = {
      resume : resume_file, 
      afficherForm : true,
  }
  

  handleAddCategorie = (categorie) => {

      let resume_temp = this.state.resume;

      let newValue={
        "id": this.state.resume.length+1, 
        "title" : categorie,
        "lignes" : []
      };

      resume_temp.push(newValue);

      this.setState({resume: resume_temp});
  }

  handleAddLigne = (idCategory, ligne) => {

    let resume_temp = this.state.resume;


    let newValue={
      "title" : "test",
      "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id massa nec lacus pretium sollicitudin. Suspendisse id nunc elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    }
    console.log(idCategory)
    resume_temp.resume[idCategory].lignes.push(newValue);
    console.log(resume_temp)

    this.setState({resume: resume_temp});

  }

  afficherMasquerForm = () => {
    let afficherForm = this.state.afficherForm ? false : true;
    this.setState({afficherForm});
  }

  getMaxId(id, tab){
      let value = -1;
      tab.map((ligne)=>{
          value = ligne.id > value ? ligne.id : value;
      })
      return value;
  }

  getIndexOfId(id, tab){
      let value = -1;
      let cpt = 0;
      tab.map((ligne)=>{
          value = ligne.id == id ? cpt : value;
          cpt++;
      })
      return value;
  }


  render(){

console.log(this.state.resume);

    return (
      <div className="container">

        <h1 className="display-4">{this.state.resume.name + " " + this.state.resume.surname} <small className="text-muted">{this.state.resume.title}</small> </h1>

        {this.state.resume.resume.map(categorie => (
          <Categorie resume={categorie} key={categorie.id} onAddElement={this.handleAddLigne} afficherForm={this.state.afficherForm}/>
          ))
        }

        <ResumeForm onAddElement={this.handleAddCategorie} inputTitle="Ajouter une catégorie" afficherForm={this.state.afficherForm}/>

        <button type="button" onClick={this.afficherMasquerForm}>Form</button>
      
      </div>

    );
  }

}

export default App;
