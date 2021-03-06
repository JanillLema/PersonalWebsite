import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col={6}>
              <h2>Janill M. Lema</h2>
        		<img 
    				src={require('./image/headshot.png')} 
    				alt = "avatar"
    				style={{height: '250px'}}
    			/>           
               <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}> I am currently looking for a New Grad Software Engineering Role. Any feedback on my work would be greatly appreciated! </p>
            </Cell>

            <Cell col={6}>
              <h2>Contact Me</h2>
              <hr/>
              <div className="contact-list">
                

                <List>

                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                      (718) 669-1223
                    </ListItemContent>
                  </ListItem>
   
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-envelope" aria-hidden="true"/>
                      jl4817@columbia.edu
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-location-arrow" aria-hidden="true"/>
                      Queens, New York
                    </ListItemContent>
                  </ListItem>
                  
                </List>

              </div>
            </Cell>

          </Grid>
      </div>
    )
  }
}
export default Contact;