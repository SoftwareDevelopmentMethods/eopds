import React, { Component } from "react";
import Profile from './Profile';

class GoalManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Whiskey",
            goals: [],
            activities: [],
            strategies: []
        };

        this.goalsChangeHandler = this.goalsChangeHandler.bind(this);
        this.activityChangeHandler = this.activityChangeHandler.bind(this);
    }

    // update only one goal for onboarder needs to be worked on
    goalsChangeHandler = (event) => {
        let val = event.target.value;
        let goalID = event.target.goalID;
        let selectedGoal = {
            id: goalID,
            name: val
        }

        let goalName = !event.target.checked ? null : val;
        let activityList = this.props.goal.find(e => e.goal === val);
        let strategyList = this.props.goal.find(e => e.goal === val);

        let filteredGoals = this.state.goals.filter(goal => goal.name !== val);
        let filteredActivites = this.state.activities.filter(act => !activityList.activity.includes(act));
        let filteredStrategies = this.state.strategies.filter(str => !strategyList.strategy.includes(str));

        // console.log(activityList.activity, 'hello');
        if (goalName == null) {
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

    }



    render() {

        return (
            <div>

                <h1>Program Designer</h1>

                {/* profile card code */}
                <div class="card">
                    <div class="card-body">

                        <Profile name={this.state.name} />
                        <h2>Selected Goals</h2>
                        <ul class="list-group">
                            {this.state.goals.map(goal => (
                                <li class="list-group-item active" >{goal.name}</li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
                {/* checklist goals */}
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h3>Goals</h3>
                            {this.props.goal.map((g, i) => (
                                <div id={"GID" + g.id}>
                                    <div class="text-start form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={g.goal} goalsindex={i}
                                            onChange={this.goalsChangeHandler} />
                                        <label class="form-check-label" for="flexSwitchCheckDefault">{g.goal}</label>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* checklist activities */}
                        <div class="col">
                            <h3>Activities</h3>
                            {this.state.activities.map((act, i) => (
                                <div id={"AID" + i}>
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
                                <div id={"SID" + i}>
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