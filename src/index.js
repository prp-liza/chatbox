//-----------------------------------------------------
// Import
//-----------------------------------------------------

// React 
import React from 'react';
import {render} from 'react-dom';

// Component 
import Connexion from './components/connexion';
import App from './components/app';
import NotFound from './components/notfound';

// Router
import {BrowserRouter, Match, Miss} from 'react-router';

// CSS
import './index.css';


//-----------------------------------------------------
// Router
//-----------------------------------------------------

const Root = () => {
	return(
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Connexion}/>
				<Match pattern="/pseudo/:pseudo" component={App}/>
				<Miss component={NotFound}/>
			</div>
		</BrowserRouter>
	) 
}


//-----------------------------------------------------
// Render
//-----------------------------------------------------

render(<Root/>, document.getElementById('root'));