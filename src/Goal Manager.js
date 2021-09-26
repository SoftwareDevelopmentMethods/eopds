import React, { Component } from "react";
import Profile from './Profile';

class GoalManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Whiskey",
            goals: []
        };

        this.goalsChangeHandler = this.goalsChangeHandler.bind(this);
    }

    // update only one goal for onboarder needs to be worked on
    goalsChangeHandler = (event) => {
        let val = event.target.value;
        let goalID = event.target.goalID;
        let selectedGoal = {
            id: goalID,
            text: val
        }

        let goalName = !event.target.checked ? null : val;


        let filteredGoals = this.state.goals.filter(goal => goal.text !== val);
        console.log(filteredGoals.length);

        if (goalName == null) {
            this.setState({ goals: filteredGoals });
        }
        else
            this.setState({ goals: [...this.state.goals, selectedGoal] });

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
                                <li class="list-group-item active" >{goal.text}</li>
                            ))
                            }
                        </ul>
                    </div>
                </div>


                {/* checklist card */}
                <div class="card">
                    <div class="card-body">
                        <h3>Update Form</h3>
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
                </div>


            </div>
        );
    }
}

export default GoalManager;