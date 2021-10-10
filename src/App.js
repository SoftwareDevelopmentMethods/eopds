import React, { Component } from 'react';
import NavBar from './NavBar';
import Routes from "./Routes";

import './App.css';

import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { goals: [] };
        let selectedGoal = {
            id: 404,
            name: "Error connecting to database",
            activity: [],
            strategy: []
        }
        this.state.goals.push(selectedGoal);
    }

    // This method will get the data from the database.
    componentDidMount() {
        let loadedGoals = [];

        axios
            .get("/record")
            .then((response) => {

                let goalsFromDB = response.data;
                goalsFromDB.map((currentrecord) => {
                    let selectedGoal = {
                        id: currentrecord._id,
                        name: currentrecord.goal_name,
                        activity: currentrecord.goal_activity,
                        strategy: currentrecord.goal_strategy
                    }
                    loadedGoals.push(selectedGoal);
                });
                this.setState({ goals: Object.values(loadedGoals) });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        return (
            <div className="App">
                <NavBar />
                <Routes goal={this.state.goals} />
            </div>
        );
    }
}

export default App;