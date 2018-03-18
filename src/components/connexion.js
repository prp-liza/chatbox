import React from 'react';


class Connexion extends React.Component{

	goToChat=event=>{

		// Debug & Test
		// event.preventDefault(); console.log(this.pseudoInput.value);

		// Get the pseudo entered by the user
		const pseudo=this.pseudoInput.value;

		// Redirect the user to the app (chatform)
		this.context.router.transitionTo(`/pseudo/${pseudo}`);
	};


	render(){
		return(
			<div className="connexionBox" onSubmit={(e => this.goToChat(e))}>
				<form className="connexion">
					<input 
						type="text" 
						placeholder="Pseudo" 
						required 
						ref={(input => this.pseudoInput=input)} 
					/>
					<button type="submit">Go</button>
				</form>
			</div>
		)
	}

	// TransitionTo
	static contextTypes={router: React.PropTypes.object}
}

export default Connexion;
