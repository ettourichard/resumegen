import React, {Component} from "react";
import Ligne from "./Ligne"
import ResumeForm from "./ResumeForm"

class Categorie extends Component {


	handleAddLigne = (ligne) => {
		console.log("handleLigne", this)
		this.props.onAddElement(this.props.key, ligne);
	}


	render(){

		/*return(
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


		      <ResumeForm onAddElement={this.handleAddLigne} inputTitle="Ajouter une ligne" afficherForm={this.props.afficherForm} />
		  	

			</article>);*/

			return(
			<div className="card mb-3 border-secondary mb-3">
				<div className="card-header"><h3>{this.props.resume.title}</h3></div>
				<div className="card-body">
					{this.props.resume.lignes?.map(
								ligne =>(
								      <Ligne ligne={ligne} key={ligne.id} />
					      		)
					      	)
					 	}
					 <small className="d-block text-right mt-3 d-print-none">
				        <a href="#">Voir détails</a>
				      </small>


				      <ResumeForm onAddElement={this.handleAddLigne} inputTitle="Ajouter une ligne" afficherForm={this.props.afficherForm} />
		  		</div>

			</div>);
	}


}

export default Categorie;