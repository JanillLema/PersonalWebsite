import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">

          {/* NLP : IMAGE GENERATOR BOT */}
           <div style={{marginLeft: 50, marginRight : 50, marginBottom:10, marginTop: 10}} >
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} > </CardTitle>
                <CardText>
                  <h4 align="center" > Image Caption Generator Bot </h4> 
                  <p align="center"> Users can upload an image and recieve a caption produced by an LSTM model. <b> #Frontend_React #Backend_Django #DeepLearning #NLP </b> </p>
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
              </Card>
            </div>

            <div style={{marginLeft: 50, marginRight : 50, marginBottom:10, marginTop: 10}} >
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} ></CardTitle>
                <CardText>
                  <h4 align="center"> Event Creater App </h4> 
                  <p align="center"> Users can upload an image and recieve a caption produced by an LSTM model. <b> #Frontend_React #Backend_Django #DeepLearning #NLP </b> </p>
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
              </Card>
            </div>
        


            {/* Project 2 */}
            <div style={{marginLeft: 50, marginRight : 50, marginBottom:10, marginTop: 10}} >
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} ></CardTitle>
                <CardText>
                  <h4 align="center" > Improving NYC Specialized High School Diversity </h4> 
                  <p align="center"> Users can upload an image and recieve a caption produced by an LSTM model. <b> #Frontend_React #Backend_Django #DeepLearning #NLP </b> </p>
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
              </Card>
            </div>
   

            {/* Project 3 */}
            <div style={{marginLeft: 50, marginRight : 50, marginBottom:10, marginTop: 10}} >
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} ></CardTitle>
                <CardText>
                  <h4 align="center"> Abstract Clock Using D3.js </h4> 
                  <p align="center"> Users can upload an image and recieve a caption produced by an LSTM model. <b> #Frontend_React #Backend_Django #DeepLearning #NLP </b> </p>
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
              </Card>
            </div>

            <div style={{marginLeft: 50, marginRight : 50, marginBottom:10, marginTop: 10 }} >
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} ></CardTitle>
              <CardText>
                <h4 align="center"> Android Movie App </h4> 
                <p align="center"> Users can upload an image and recieve a caption produced by an LSTM model. <b> #Frontend_React #Backend_Django #DeepLearning #NLP </b> </p>
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
            </Card>
            </div>


            <div style={{marginLeft: 50, marginRight : 50, marginBottom:10, marginTop: 10 }} >
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} ></CardTitle>
              <CardText>
                <h4 align="center"> To-Do Android App </h4> 
                <p align="center"> Users can upload an image and recieve a caption produced by an LSTM model. <b> #Frontend_React #Backend_Django #DeepLearning #NLP </b> </p>
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
            </Card>
            </div>
      

          </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
                <div className="projects-grid">

          {/* NLP : IMAGE GENERATOR BOT */}
           <div style={{marginLeft: 50, marginRight : 50, marginBottom:10, marginTop: 10}} >
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} > </CardTitle>
                <CardText>
                  <h4 align="center" > Image Caption Generator Bot </h4> 
                  <p align="center"> Users can upload an image and recieve a caption produced by an LSTM model. <b> #Frontend_React #Backend_Django #DeepLearning #NLP </b> </p>
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
              </Card>
            </div>
      

          </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
                <div className="projects-grid">


            <div style={{marginLeft: 50, marginRight : 50, marginBottom:10, marginTop: 10 }} >
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} ></CardTitle>
              <CardText>
                <h4 align="center"> Android Movie App </h4> 
                <p align="center"> Users can upload an image and recieve a caption produced by an LSTM model. <b> #Frontend_React #Backend_Django #DeepLearning #NLP </b> </p>
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
            </Card>
            </div>


            <div style={{marginLeft: 50, marginRight : 50, marginBottom:10, marginTop: 10 }} >
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} ></CardTitle>
              <CardText>
                <h4 align="center"> To-Do Android App </h4> 
                <p align="center"> Users can upload an image and recieve a caption produced by an LSTM model. <b> #Frontend_React #Backend_Django #DeepLearning #NLP </b> </p>
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
            </Card>
            </div>
      
          </div>
      )

    } else if(this.state.activeTab === 3) {
      return (
                <div className="projects-grid">


              {/* Project 2 */}
            <div style={{marginLeft: 50, marginRight : 50, marginBottom:10, marginTop: 10}} >
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} ></CardTitle>
                <CardText>
                  <h4 align="center" > Improving NYC Specialized High School Diversity </h4> 
                  <p align="center"> Users can upload an image and recieve a caption produced by an LSTM model. <b> #Frontend_React #Backend_Django #DeepLearning #NLP </b> </p>
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
              </Card>
            </div>
   

            {/* Project 3 */}
            <div style={{marginLeft: 50, marginRight : 50, marginBottom:10, marginTop: 10}} >
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} ></CardTitle>
                <CardText>
                  <h4 align="center"> Abstract Clock Using D3.js </h4> 
                  <p align="center"> Users can upload an image and recieve a caption produced by an LSTM model. <b> #Frontend_React #Backend_Django #DeepLearning #NLP </b> </p>
                </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
              </Card>
            </div>
      
          </div>
      )
    } 
  }


  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>All Projects </Tab>
          <Tab>AI/NLP </Tab>
          <Tab>Android</Tab>
          <Tab>Data Visualization</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Projects;