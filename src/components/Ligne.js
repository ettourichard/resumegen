import React from "react";

function Ligne({ligne}) {

		return(
			<article>
				<h5>{ligne.title}</h5>
				<p>{ligne.content}</p>
			</article>
		);

}

export default Ligne;