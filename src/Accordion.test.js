import React from "react";
import { shallow } from "enzyme";
import Accordion from "./Accordion";

const goals =
    [
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
        }
    ];


it("Accrordion component renders without crashing", () => {
    shallow(<Accordion goal={goals} />);
});

it("accepts goals props", () => {
    const wrapper = shallow(<Accordion goal={goals} />);
    expect(wrapper.instance().props.goal).toEqual(goals);
});