import React, { Component } from 'react';
import NavBar from './NavBar';
import Routes from "./Routes";

import './App.css';

class App extends Component {
  static defaultProps = {
    goals: [
      {
          id: 1,
          goal: "Understanding team norms",
          activity: [
              "Peer Support",
              "Team Leader Assistance"
          ],
          strategy: [
              "Mentoring",
              "Team Socialising",
              "Stand ups",
              "Pair Programming",
              "Simple Task",
              "Other Teams",
              "Electronic Communication",
              "Set Expectations",
              "Review Plan",
              "Retrospective",
              "Team Agreement",
              "River of Life",
              "Checklists"
          ]
      },
      {
          id: 2,
          goal: "Understanding company culture",
          activity: [
              "Induction"
          ],
          strategy: [
              "Mentoring",
              "Training",
              "Peer Support",
              "Team Socialising",
              "Pair Programming",
              "Electronic Communication",
              "Set Expectations",
              "Review Plan"
          ]
      },
      {
          id: 3,
          goal: "Knowing the responsibilities, expertise and authority of other team members",
          activity: [
              "Agile Course",
              "Team Leader Assistance",
              "Review Plan"
          ],
          strategy: [
              "Mentoring",
              "Training",
              "Peer Support",
              "Team Socialising",
              "Stand ups",
              "Other Teams",
              "Electronic Communication"
          ]
      },
      {
          id: 4,
          goal: "Understand other's expectations of your own role's responsibilities",
          activity: [
              "Agile Course",
              "Team Leader Assistance",
              "Review Plan"
          ],
          strategy: [
              "Mentoring",
              "Training",
              "Peer Support",
              "Internal Documentation",
              "Checklists",
              "Pair Programming",
              "Electronic Communication",
              "Team agreement"
          ]
      },
      {
          id: 5,
          goal: "Understand what work to do and when",
          activity: [
              "Agile Course",
              "Team Leader Assistance",
              "Checklists",
              "Other Teams",
              "Review Plan"
          ],
          strategy: [
              "Mentoring",
              "Peer Support",
              "Stand ups",
              "Pair Programming",
              "Set Expectations"
          ]
      },
      {
          id: 6,
          goal: "Understand the project structure and aims and the implications",
          activity: [
              "Team Leader Assistance",
              "Product Overview",
              "Review Plan"
          ],
          strategy: [
              "Mentoring",
              "Training",
              "Peer Support",
              "Internal Documentation",
              "Stand Ups",
              "Pair Programming",
              "Set Expectations"
          ]
      },
      {
          id: 7,
          goal: "Understand how to code and test to the team's expectations",
          activity: [
              "Mentoring",
              "Training",
              "Team Leader Assistance",
              "Review Code",
              "Simple Task"
          ],
          strategy: [
              "Peer Support",
              "Internal Documentation",
              "Online communities",
              "Pair Programming",
              "Electronic Communication",
              "Self-Learning",
              "Conference"
          ]
      },
      {
          id: 8,
          goal: "Understand and meet the team's standards of work quality",
          activity: [
              "Agile Course"
          ],
          strategy: [
              "Mentoring",
              "Internal Documentation",
              "Stand Ups",
              "Pair Programming",
              "Other Teams"
          ]
      },
      {
          id: 9,
          goal: "Understand and show the agile mind set",
          activity: [
              "Agile Course",
              "Team Leader Assistance"
          ],
          strategy: [
              "Mentoring",
              "Training",
              "Peer Support",
              "Internal Documentation",
              "Review Code",
              "Simple Task",
              "Electronic Communication",
              "Conference"

          ]
      },
      {
          id: 10,
          goal: "Know how to use artefacts, tools, technology and techniques that are part of the team's development process",
          activity: [
              "Agile Course",
              "Other Teams",
              "Knowledge Database"
          ],
          strategy: [
              "Mentoring",
              "Training",
              "Peer Support",
              "Internal Documentation",
              "Online communities",
              "Electronic Communication"
          ]
      },
      {
          id: 11,
          goal: "Understand the project domain knowledge and terminology",
          activity: [
              "Product Overview",
              "Conference",
              "Knowledge Database"
          ],
          strategy: [
              "Mentoring",
              "Training",
              "Peer Support",
              "Internal Documentation",
              "Pair programming",
              "Simple task",
              "Other teams",
              "Electronic communications"
          ]
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes goal={this.props.goals} />
        {/* <Profile /> */}
        {/* <Accordion goal={this.props.goals} /> */}
      </div>
    );
  }
}

export default App;