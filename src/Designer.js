import React, { Component } from "react";
import Profile from './Profile';

class Designer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Whiskey",
            goals: []
        };

        this.goalsChangeHandler = this.goalsChangeHandler.bind(this);
        this.activityChangeHandler = this.activityChangeHandler.bind(this);
        this.strategyChangeHandler = this.strategyChangeHandler.bind(this);
    }
    goalsChangeHandler = (event) => {
        let goals = [...this.state.goals];
        let nam = event.target.name;
        let val = event.target.value;
        goals[nam] = { ['goal']: !event.target.checked ? !val : val };
        this.setState({ goals });
    }
    activityChangeHandler = (event) => {
        // let goals = [...this.state.goals];
        // let index = event.target.index;
        // let nam = event.target.name;
        // let val = event.target.value;
        // goals[index] = { ['activity']: val };
        // this.setState({ goals });
    }
    strategyChangeHandler = (event) => {
        // let goals = [...this.state.goals];
        // let nam = event.target.name;
        // let val = event.target.value;
        // goals[nam] = !event.target.checked ? !val : val;
        // this.setState({ goals });
    }
    render() {

        return (
            <div>
                <Profile name={this.state.name} />
                {this.state.goals.map(goal => (
                    <h6>
                        {goal.goal}
                    </h6>
                ))
                }

                {this.props.goal.map((g, i) => (
                    <div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={g.goal} name={i}
                                onChange={this.goalsChangeHandler} />
                            <label class="form-check-label" for="flexSwitchCheckDefault">{g.goal}</label>
                        </div>

                        {g.activity.map((a, ind) => (
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value={a} index={i} name={ind} id="flexCheckDefault" onChange={this.activityChangeHandler} />
                                <label class="form-check-label" for="flexCheckDefault">
                                    {a}
                                </label>
                            </div>
                        ))}
                        {g.strategy.map((s, index) => (
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value={s} index={i} name={index} id="flexCheckDefault" onChange={this.strategyChangeHandler} />
                                <label class="form-check-label" for="flexCheckDefault">
                                    {s}
                                </label>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default Designer;