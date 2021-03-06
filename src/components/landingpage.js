import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class Landing extends Component{
	render(){
		return(
			<div style={{width: '100%', margin: 'auto'}}>
        		<Grid className="landing-grid">
          			<Cell col={12}>
	          			<img 
	          				src={require('./image/headshot.png')} 
	          				alt = "avatar"
	          				className ="avatar-img"
	          			/>
	          			<div className="banner-text"> 
	          				<h1> Janill M. Lema </h1>
	          				<hr/>
	          				<p> Aspiring Software Engineer  </p>
	          				<div className="social-links">

	          					<a href="https://www.linkedin.com/in/janill-lema-514b2b97/" rel="noopener noreferrer" target="_blank">
	          						<i className="fa fa-linkedin-square" aria-hidden="true" />
	          					</a>

	          					<a href="https://github.com/JanillLema/" rel="noopener noreferrer" target="_blank">
	          						<i className="fa fa-github-square" aria-hidden="true" />
	          					</a>

	          					<a href="https://www.facebook.com/m4rv3ly" rel="noopener noreferrer" target="_blank">
	          						<i className="fa fa-facebook-square" aria-hidden="true" />
	          					</a>
	          				</div>

	          			</div>

	          		</Cell>
          		</Grid>
          	</div>

		)
		
	}
}

export default Landing;