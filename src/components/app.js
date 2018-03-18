import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ChatForm from './chatform';
import Message from './message';
import base from '../base';

import '../animation.css';


class App extends React.Component{

	//-----------------------------------------------------
	// State
	//-----------------------------------------------------

	state = {
		messages:{} // Init the state "messages" in which we will store all messages
	}



	//-----------------------------------------------------
	// Component LifeCycle
	//-----------------------------------------------------
	
	// Server rendering
	componentWillMount(){
		this.ref = base.syncState('/', {
			context: this,
			state: 'messages'
		});
	}

	// As soon as something changes in the state, then scroll down
	componentDidUpdate(){
		this.messageScroll.scrollTop = this.messageScroll.scrollHeight;
	}


	//-----------------------------------------------------
	// Functions
	//-----------------------------------------------------

	// Add a message to the state "messages"
	addMessage = (message) => {

		// Retrieve evrything you found on state "messages"	
		const messages = {...this.state.messages};

		// Add the message with a timestamp key	
		const timestamp = Date.now(); 
		messages[`message-${timestamp}`] = message;

		// Delete if more than 10 messages
		Object.keys(messages).slice(0, -10).map(key => messages[key] = null) // in React, we delete with "null"

		// Update the state "messages"
		this.setState({messages});
	}; 


	// Check if user
	isUser = (pseudo) => {
		return pseudo === this.props.params.pseudo;
	}; 



	//-----------------------------------------------------
	// Render and export
	//-----------------------------------------------------

	render(){

		// Display all messages by looping via Object and Map
		const messages = Object
			.keys(this.state.messages)
			.map(key => <Message key={key} details={this.state.messages[key]} isUser={this.isUser}/>);

		console.log(messages); 



		return(
			<div className="box">
				<div>
					<div className="messages" ref={(input => this.messageScroll = input)} >
						<ReactCSSTransitionGroup 
							component="div"
							className="message"
							transitionName="message"  
							transitionEnterTimeout={200}
							transitionLeaveTimeout={200}
						>
							{messages}
						</ReactCSSTransitionGroup>	

					</div>
					<ChatForm 
						addMessage={this.addMessage} 
						pseudo={this.props.params.pseudo}
						length={150}
					/>
				</div>
			</div>
		)
	}
	static propTypes = {		
		params: React.PropTypes.object.isRequired
	};
}

export default App;
