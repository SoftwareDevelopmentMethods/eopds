import React, { Component } from "react";
import Profile from './Profile';

class Designer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Whiskey",
            goals: [
                {
                    goal: "No goals so far",
                    activity: ["No Activities added"],
                    strategy: ["No Strategies added"]
                }
            ]
        };

        this.goalsChangeHandler = this.goalsChangeHandler.bind(this);
        // this.activityChangeHandler = this.activityChangeHandler.bind(this);
        // this.strategyChangeHandler = this.strategyChangeHandler.bind(this);
    }

    // update only one goal for onboarder needs to be worked on
    goalsChangeHandler = (event) => {
        let val = event.target.value;
        let check = !event.target.checked ? 'No goal so far' : val;
        this.setState(prevState => ({
            goals: [{
                goal: check,
                activity: ["No Activities added"],
                strategy: ["No Strategies added"]
            }]
        }));
    }

    render() {

        return (
            <div>

                {/* profile card code */}
                <div class="card">
                    <div class="card-body">
                        <Profile name={this.state.name} />
                        {this.state.goals.map(goal => (
                            <ul class="list-group">
                                <li class="list-group-item active" aria-current="true">{goal.goal}</li>
                                {goal.activity.map((act, i) => (
                                    <li class="list-group-item list-group-item-warning" key={`ActiveListKey${i}`}> {act} </li>
                                ))}
                                {goal.strategy.map((str, i) => (
                                    <li class="list-group-item" key={`ListKey${i}`}>{str}</li>
                                ))}
                            </ul>
                        ))
                        }

                    </div>
                </div>

                {/* checklist card */}
                <div class="card">
                    <div class="card-body">
                        <h3>Update Form</h3>
                        {this.props.goal.map((g, i) => (
                            <div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={g.goal} goalsindex={i}
                                        onChange={this.goalsChangeHandler} />
                                    <label class="form-check-label" for="flexSwitchCheckDefault">{g.goal}</label>
                                </div>

                                {g.activity.map((a, ind) => (
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value={a} goalsindex={i} activityindex={ind} id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            {a}
                                        </label>
                                    </div>
                                ))}
                                {g.strategy.map((s, index) => (
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value={s} goalsindex={i} nstrategyindex={index} id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            {s}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        );
    }
}

export default Designer;