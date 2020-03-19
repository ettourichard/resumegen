import React from "react";
import Ligne from "./Ligne"

class Categorie extends React.Component{

	

	render(){
	
		return(
			<article>
				<h2>{this.props.resume.title}</h2>
				{this.props.resume.lignes.map(
							ligne =>(
							      <Ligne ligne={ligne} />
				      		)
				      	)
				 	}
			 <small class="d-block text-right mt-3 d-print-none">
		        <a href="#">Voir détails</a>
		      </small>
			</article>);
	};



}

export default Categorie;