import React from 'react';


class Message extends React.Component{
	

//-----------------------------------------------------
// Functions
//-----------------------------------------------------

	preRender = (isUser) => {
		if (isUser) {
			return(
				<p className="user-message">{this.props.details.message}</p>
			)
		} 
		else{
			return(
				<p className="not-user-message">
					<strong>{this.props.details.pseudo} : {this.props.details.message}</strong>
				</p>
			)
		}
	};


//-----------------------------------------------------
// Render and export
//-----------------------------------------------------

	render(){
		return this.preRender(this.props.isUser(this.props.details.pseudo));		
	}

	static propTypes = {
		details: React.PropTypes.object.isRequired
	};
}

export default Message;
