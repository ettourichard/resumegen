import React from "react";

class Ligne extends React.Component{

	

	render(){
	
		return(
			<article>
				<h5>{this.props.ligne.title}</h5>
				<p>{this.props.ligne.content}</p>
			</article>);
	};



}

export default Ligne;