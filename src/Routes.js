import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Accordion from './Accordion';
import Designer from './Designer';
import GoalManager from "./Goal Manager";

class Routes extends Component {
    render() {

        return (
            <Switch>
                <Route
                    exact
                    path='/'
                    render={() => <Accordion goal={this.props.goal} />}
                />
                <Route
                    exact
                    path='/onboarder'
                    render={() => <Accordion goal={this.props.goal} />}
                />
                <Route
                    exact
                    path='/designer'
                    render={() => <Designer goal={this.props.goal} />}
                />
                <Route
                    exact
                    path='/goalmanager'
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
