import React, { Component } from "react";
import Profile from './Profile';
import TabbedContainer from "./TabbedContainer";

import './GoalManager.css';

class GoalManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Whiskey",
            goals: [],
            activities: [],
            strategies: [],
            selectedActivities: []
        };
        this.goalsChangeHandler = this.goalsChangeHandler.bind(this);
        this.activityChangeHandler = this.activityChangeHandler.bind(this);
    }

    goalsChangeHandler = (event) => {
        let val = event.target.value;
        let goalID = event.target.goalID;
        let selectedGoal = {
            id: goalID,
            name: val
        }

        let goalDeselected = !event.target.checked;


        //load the activities and strategies list
        let activityList = this.props.goal.find(e => e.name === val);
        let strategyList = this.props.goal.find(e => e.name === val);

        let filteredGoals = this.state.goals.filter(goal => goal.name !== val);
        // filter the activities and strategies so that only unique activites are loaded (no duplicates)
        let filteredActivites;
        let filteredStrategies;

        if (goalDeselected) {
            // filter out the deselected goal
            filteredActivites = this.state.activities.filter(act => !activityList.activity.includes(act));
            filteredStrategies = this.state.strategies.filter(str => !strategyList.strategy.includes(str));
            //then update the state with the filtered activites array
            this.setState({ goals: filteredGoals, activities: filteredActivites, strategies: filteredStrategies });
        }
        else
            this.setState(prevState => ({
                goals: [...prevState.goals, selectedGoal],
                activities: [...new Set([...prevState.activities, ...activityList.activity])],
                strategies: [...new Set([...prevState.strategies, ...strategyList.strategy])]
            }));
    }

    activityChangeHandler = (event) => {
        let val = event.target.value;
        let goalID = event.target.goalID;
        let selectedActivity = {
            id: goalID,
            name: val
        }

        let activtiyDeselected = !event.target.checked;

        if (activtiyDeselected) {
            let filteredActivites = this.state.selectedActivities.filter(act => act.name !== val);
            this.setState({ selectedActivities: filteredActivites });
        }
        else
            this.setState(prevState => ({
                selectedActivities: [...prevState.selectedActivities, selectedActivity]
            }));
    }

    render() {
        return (
            <div class="manager">
                <h1>Program Designer</h1>
                {/* profile card code */}
                <div class="card">
                    <div class="card-body">
                        <Profile name={this.state.name} />
                    </div>
                </div>
                {/* TabbedContainer card code */}
                <div class="card">
                    <div class="card-body iterations-container">
                        <TabbedContainer activities={this.state.activities} />
                        <ul class="list-group">
                            {this.state.selectedActivities.map((selectedActivity, i) => (
                                <li key={"keySelectedAct" + i} class="list-group-item active  iteration-plan" >{selectedActivity.name}</li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
                {/* checklist goals */}
                <div class="container">
                    <div class="row">
                        <div key='colGoals' class="col">
                            <h3>Goals</h3>
                            {this.props.goal.map((g, i) => (
                                <div key={"keyGoal" + g.id} id={"GID" + g.id}>
                                    <div class="text-start form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={g.name} goalsindex={i}
                                            onChange={this.goalsChangeHandler} />
                                        <label class="form-check-label" for="flexSwitchCheckDefault">{g.name}</label>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* checklist activities */}
                        <div class="col">
                            <h3>Activities</h3>
                            {this.state.activities.map((act, i) => (
                                <div key={"AID" + i} id={"AID" + i}>
                                    <div class="text-start form-check alert-success">
                                        <input class="form-check-input" type="checkbox" id="flexCheckDefault" value={act} goalsindex={i}
                                            onChange={this.activityChangeHandler} />
                                        <label class="form-check-label" for="flexCheckDefault">{act}</label>
                                    </div>
                                </div>
                            ))}
                            {/* checklist strategies */}
                            <h3>Strategies</h3>
                            {this.state.strategies.map((str, i) => (
                                <div key={"keySID" + i} id={"SID" + i}>
                                    <div class="text-start form-check alert-warning">
                                        <input class="form-check-input" type="checkbox" id="flexCheckDefault" value={str} goalsindex={i}
                                            onChange={this.activityChangeHandler} />
                                        <label class="form-check-label" for="flexCheckDefault">{str}</label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GoalManager;
