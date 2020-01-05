import React, {Component} from 'react';
import { Grid,Cell, ProgressBar, Chip, ChipContact} from 'react-mdl';
import Skill from './skill';
import { IoIosSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { GoOrganization } from "react-icons/go"; 
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Resume extends Component{
	render(){
		return(

			<div>

				<Grid>
					<Cell style={{textAlign: 'center'}} col={4}>
                
				    	<div>
					    	<img 
		          				src={require('./image/headshot.png')} 
		          				alt = "avatar"
		          				style={{height: '200px'}}
		          			/>
				    	</div>
				    	<h2 style={{paddingTop: '.2em'}}>Janill M. Lema</h2>
				    	<a href='/somefile.txt' download> Download Resume</a>
				    	<h3> SKILLS </h3>
				    	<Skill
				    		skill="Android"
				    		progress={50}
				        />
				    	<Skill
				    		skill="C"
				    		progress={100}
				    		/>
				    	<Skill
				    		skill="Django"
				    		progress={40}
				    		/>
				    	<Skill
				    		skill="Flask"
				    		progress={20}
				        />
				        <Skill
				    		skill="Java"
				    		progress={100}
				        />
				        <Skill
				    		skill="Python"
				    		progress={100}
				        />
				        <Skill
				    		skill="React"
				    		progress={60}
				        />
				        <h3> KNOWLEDGEABLE IN </h3>
				            <Chip>
							    <ChipContact className="mdl-color--teal mdl-color-text--white">A</ChipContact>
							    A.I.
                        	</Chip>
				        	<Chip>
							    <ChipContact className="mdl-color--teal mdl-color-text--white">A</ChipContact>
							    Android Programming
                        	</Chip>
                        	<Chip>
							    <ChipContact className="mdl-color--teal mdl-color-text--white">D</ChipContact>
							    Databases
                        	</Chip>
                        	<Chip>
							    <ChipContact className="mdl-color--teal mdl-color-text--white">D</ChipContact>
							    Data Visualization
                        	</Chip>
                        	<Chip>
							    <ChipContact className="mdl-color--teal mdl-color-text--white">A</ChipContact>
							    NLP
                        	</Chip>
                        	<Chip>
							    <ChipContact className="mdl-color--teal mdl-color-text--white">A</ChipContact>
							    Networks 
                        	</Chip>
                        	<Chip>
							    <ChipContact className="mdl-color--teal mdl-color-text--white">W</ChipContact>
							    Web Development
                        	</Chip>
            
                       
				    	</Cell>
					<Cell className= "resume-right-col" col={8}> 
					    <div>
					        <h1 style={{textAlign: 'center'}} > MY TIMELINE </h1>
							<VerticalTimeline>

							    <VerticalTimelineElement className="vertical-timeline-element--education"
								    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
								    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
								    date="SEPTEMBER 2016 - MAY 2020"
								    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
								    icon={<IoIosSchool />}
								  >
								    <h3 className="vertical-timeline-element-title">COLUMBIA UNIVERISTY</h3>
								    <h4 className="vertical-timeline-element-subtitle"> Major: Computer Science </h4>
								    <p>
								       Related Course Work : Advanced Programming in C, Data Visualization, Natural Language Processing,               
                                       Artificial Intelligence, Data Structures in Java, Networks, Databases, Elements of Data Science, Programming Languages & Translators
								    </p>
							    </VerticalTimelineElement>

							    <VerticalTimelineElement className="vertical-timeline-element--org"
								    contentStyle={{ background: 'rgb(255, 85, 0)', color: '#fff' }}
								    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 85, 0)' }}
								    date="FEBURARY 2018 - PRESENT"
								    iconStyle={{ background: 'rgb(255, 85, 0)', color: '#fff' }}
								    icon={<GoOrganization />}
								  >

								    <h3 className="vertical-timeline-element-title">WAVE ADVISEE</h3>
								    <h4 className="vertical-timeline-element-subtitle"> Built by Girls </h4>
								    <p>
								      WAVE connects young women (Advisees) aged 15-22 years old with professionals (Advisors) in tech as part of a 1:1 Advisor program. 
								    </p>
								</VerticalTimelineElement>

								<VerticalTimelineElement className="vertical-timeline-element--work"
								    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
								    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
								    date="JUNE 2018 - AUGUST 2018"
								    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
								    icon={<MdWork />}
								  >
								    <h3 className="vertical-timeline-element-title">DATA INTEGRATION INTERN</h3>
								    <h4 className="vertical-timeline-element-subtitle"> Columbia University IT Dept.</h4>
								    <p>
								      SVN to Git, Python, SQL, Group Web Services 
								    </p>
								</VerticalTimelineElement>

								<VerticalTimelineElement className="vertical-timeline-element--org"
								    contentStyle={{ background: 'rgb(255, 85, 0)', color: '#fff' }}
								    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 85, 0)' }}
								    date="JUNE 2019 - PRESENT"
								    iconStyle={{ background: 'rgb(255, 85, 0)', color: '#fff' }}
								    icon={<GoOrganization />}
								  >
								    <h3 className="vertical-timeline-element-title">Software Engineering Trainee</h3>
								    <h4 className="vertical-timeline-element-subtitle"> Wallbreakers </h4>
								    <p>
								      Wallbreakers trains and qualifies underrepresented computer science majors from across the country and refers them to progressive companies.
								  
								    </p>
								</VerticalTimelineElement>

 					
								<VerticalTimelineElement className="vertical-timeline-element--work"
								    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
								    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
								    date="JULY 2019 - SEPTEMBER 2019"
								    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
								    icon={<MdWork />}
								  >
								    <h3 className="vertical-timeline-element-title">Backend Engineer Intern</h3>
								    <h4 className="vertical-timeline-element-subtitle"> Avoy </h4>
								    <p>
								      Django Rest Framework, Admin Panel, mysql, Four Square API
								    </p>
								</VerticalTimelineElement>
							</VerticalTimeline>
                        </div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Resume;