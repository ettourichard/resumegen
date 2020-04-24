import React, {Component} from "react";

class ResumeForm extends Component{

	inputForm = React.createRef();


	handleAddElement = event => {
		event.preventDefault();
		console.log(this.props)

		this.props.onAddElement(this.inputForm.current.value);

	}

	render(){
		return(
		<div>
          <form className="d-print-none">
            <h4>{this.props.inputTitle}</h4>
            <input ref={this.inputForm} type="text" />
            <button type="submit" onClick={this.handleAddElement}>Valider</button>
          </form>
        </div>
        );
	}

}


export default ResumeForm;
