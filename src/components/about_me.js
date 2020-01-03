import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Skills from './skill';
import { MdPets } from "react-icons/md";
import { GiWeightLiftingUp, GiCookingPot} from "react-icons/gi";


class Resume extends Component {
	  render() {
		    return(
			    <div>
			        <Grid>
				          <Cell col={4}>
					            <div style={{textAlign: 'center'}}>
				          			<img 
				          				src={require('./janilllema.png')} 
				          				alt = "avatar"
				          				className ="avatar-img-about"
				          			/>
					            </div>
				          </Cell>

				          <Cell col={8}>
				          	    <div className="about-me-right">
				          			<h2 style={{ color: '#4A00E0', fontWeight:'bold'}}>A Little Bit About Me</h2>
					            	<hr/>
					            	<h3 style={{ color: '#8E2DE2', fontWeight:'bold'}}> My Story </h3>
				          			<p style={{fontWeight:'bold'}} >
				          			   I’ve always loved a great mind stimulating teaser. Growing up, I spent hours solving soduko puzzles, wordsearches ,  playing mancala, brain age and chess. Who knew that solving brain teasers would be a life long passion of mine? Efficiently designing classes  and methods to achieve a solution to any puzzle I am presented with is my personal challenge. 
				          			</p> 
				          			<h3 style={{ color: '#8E2DE2', fontWeight:'bold'}} > My Interests </h3>
				          			<p style={{fontWeight:'bold'}} >
				          			   I hope to use my passion to make the world a better and safer place. My current interests are backend engineering, data science and  deep learning. I enjoy bringing my ideas into creation by  using java, python, react and Django. 
				          			</p> 
				          		</div>
				          		<div style={{ display:'flex', alignItems:'center', justifyContent:'center', color: 'white'}}>
				          			<Flippy 
									    flipOnHover={true} 
									    flipOnClick={false} 
									    flipDirection="horizontal" 
									    ref={(r) => this.flippy = r} 
									    style={{ width: '200px', height: '200px', marginLeft: 65, marginRight : 32, marginBottom:10, marginTop: 50}} >

									    <FrontSide style={{ backgroundColor: '#4A00E0', display:'flex', alignItems:'center', justifyContent:'center', color: 'white'}}>
									     	<h1><GiWeightLiftingUp /> </h1>
									    </FrontSide>

									    <BackSide style={{ backgroundColor: '#8E2DE2'}}>
									      <div style={{ textAlign: 'center'}}>
									      	<h4> Working Out </h4>
									      	<p> I love to run, bike, skateboard and lift weights. Exercise is my ticket to a peaceful mind.</p>
									      </div>
									    </BackSide>
									</Flippy>

									<Flippy
									    flipOnHover={true} // default false
									    flipOnClick={false} // default false
									    flipDirection="horizontal" // horizontal or vertical
									    ref={(r) => this.flippy = r} 
									    style={{ width: '200px', height: '200px', marginLeft: 32, marginRight : 32, marginBottom:10, marginTop: 50}} >
									    <FrontSide style={{ backgroundColor: '#4A00E0', display:'flex', alignItems:'center', justifyContent:'center', color: 'white'}}>
									     	<h1><MdPets /> </h1>
									    </FrontSide>
									    <BackSide style={{ backgroundColor: '#8E2DE2'}}>
									      <div style={{ textAlign: 'center'}}>
									      	<h4> Animals </h4>
									      	<p> I love pets! They've taught me what unconditional love is like. </p>

									      </div>
									    </BackSide>
									  </Flippy>	

									  <Flippy
									    flipOnHover={true} // default false
									    flipOnClick={false} // default false
									    flipDirection="horizontal" // horizontal or vertical
									    ref={(r) => this.flippy = r} 
									    style={{ width: '200px', height: '200px', marginLeft: 32, marginRight : 30, marginBottom:10, marginTop: 50}} >
									  
									    <FrontSide style={{ backgroundColor: '#4A00E0', display:'flex', alignItems:'center', justifyContent:'center', color: 'white'}}>
									     	<h1><GiCookingPot /> </h1>
									    </FrontSide>
									    <BackSide style={{ backgroundColor: '#8E2DE2'}}>
									      <div style={{ textAlign: 'center'}}>
									      	<h4> Cooking </h4>
									      	<p> I love to give every piece of food its own unique flavor. I am currently learning some savory Ecuadorian dishes. </p>
									      </div>
									    </BackSide>
									  </Flippy>
				          		</div>

				              	
				          </Cell>
			        </Grid>
			    </div>
		    )
		  }
	}
export default Resume;