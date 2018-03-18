import React from 'react';


class ChatForm extends React.Component{

	//-----------------------------------------------------
	// State
	//-----------------------------------------------------

	state = {
		length: this.props.length // init
	}



	//-----------------------------------------------------
	// Functions
	//-----------------------------------------------------

	
	// State Messages
	createMessage = event => {		
		
		// Debug & Test
		event.preventDefault(); 
		// console.log(this.messageInput.value); 
		
		const message = {
			message: this.messageInput.value, 
			pseudo: this.props.pseudo
		};		
		
		// Display the message in the state
		this.props.addMessage(message); 	

		// Reset the form input and the length after the message has been sent	
		this.messageForm.reset(); 
		const length = this.props.length;
		this.setState({length});
	};

	
	// State length counter
	counter = event => {	
		const lengthMessage = this.props.length - this.messageInput.value.length;
		event.preventDefault(); 
		// console.log(lengthMessage);	
		this.setState({length : lengthMessage});
	};

	

	//-----------------------------------------------------
	// Render and export
	//-----------------------------------------------------

	render(){
		return(

			<form 
				className="form" 
				onSubmit={(e => this.createMessage(e))} 
				ref={(input => this.messageForm = input)}
			>
				<textarea 
					required 
					maxLength={this.props.length}
					ref={(input => this.messageInput = input)}
					onChange={(e => this.counter(e))} 
				>
				</textarea>
				<div className="info">{this.state.length}</div>
				<button type="submit">Envoyer!</button>
			</form>
		)
	}

	static propTypes = {
		addMessage: React.PropTypes.func.isRequired,
		pseudo: React.PropTypes.string.isRequired,
		length: React.PropTypes.number.isRequired
	};
}

export default ChatForm;
