import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Accordion from './Accordion';
import GoalManager from "./Goal Manager";
import Home from "./Home";

class Routes extends Component {
    render() {

        return (
            <Switch>
                <Route
                    exact
                    path='/'
                    render={() => <Home />}
                />
                <Route
                    exact
                    path='/onboarder'
                    render={() => <Accordion goal={this.props.goal} />}
                />
                <Route
                    exact
                    path='/designer'
                    render={() => <GoalManager goal={this.props.goal} />}
                />
                <Route
                    exact
                    path='/teamleader'
                    render={() => <p>Teamleader</p>}
                />
                <Redirect to='/' />
            </Switch>
        );
    }
}
export default Routes;
