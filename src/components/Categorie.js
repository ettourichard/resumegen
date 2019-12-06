import React from "react";

class Categorie extends React.Component{

	

	render(){
	
		return(
			<article>
				<h2>{this.props.resume.title}</h2>
				{this.props.resume.lignes.map(
							ligne =>(
		
							      <article>
							        <h4>{ligne.title}</h4>
							        <p>{ligne.content}</p>
							      </article>
				      		)
				      	)
				 }
			 <small class="d-block text-right mt-3">
		        <a href="#">Voir détails</a>
		      </small>
			</article>);
	};



}

export default Categorie;