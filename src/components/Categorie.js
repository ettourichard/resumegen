import React, {Component} from "react";
import Ligne from "./Ligne"
import ResumeForm from "./ResumeForm"

class Categorie extends Component {


	handleAddLigne = (ligne) => {
		this.props.onAddElement(this.props.resume.id, ligne);
	}


	render(){

		return(
			<article>
				<h2>{this.props.resume.title}</h2>
				{this.props.resume.lignes?.map(
							ligne =>(
							      <Ligne ligne={ligne} key={ligne.id} />
				      		)
				      	)
				 	}
			 <small className="d-block text-right mt-3 d-print-none">
		        <a href="#">Voir détails</a>
		      </small>

		      <ResumeForm onAddElement={this.handleAddLigne} inputTitle="Ajouter une ligne" />

			</article>);
	}


}

export default Categorie;