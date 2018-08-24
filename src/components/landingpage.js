import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() { 
        return ( 
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell style={{width: '100%'}} Col={12}>
                        <img
                            src="https://i.pinimg.com/originals/a7/0e/16/a70e1675c7bc001f1578aa76bb0a7819.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Frontend Developer</h1>

                            <hr />

                            <p>HTML/CSS | Bootstrap | Javascript | React | Cordova | ASP.NET MVC | ASP.NET WEB API | SQL</p>

                            <div className="social-links">
                                <a href="/">
                                   <i class="fa fa-linkedin-square"></i>
                                </a>
                                
                                <a href="/">
                                  <i class="fa fa-github"></i>
                                </a>

                                <a href="/">
                                    <i class="fa fa-youtube-square"></i>
                                </a>

                                <a href="/">
                                   <i class="fa fa-google-plus"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
         );
    }
}
 
export default Landing;