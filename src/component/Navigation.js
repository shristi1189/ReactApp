import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link , Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import NotFound from './NotFound';

class Navigation extends Component{
    render(){
        return(
                <div>
                    <Router>
                      <div>
                        <ul>
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li>
                            <Link to="/topics">Topics</Link>
                          </li>
                        </ul>

                        <hr />
                        <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/topics" component={Topics} />
                        <Route component={NotFound} />
                        </Switch>
                      </div>
                    </Router>
                </div>
            );
    }
}
export default Navigation;