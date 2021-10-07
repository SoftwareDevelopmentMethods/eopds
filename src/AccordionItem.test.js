import React from "react";
import { shallow } from "enzyme";
import AccordionItem from "./AccordionItem";

const goals =
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
};

it("AccordionItem component renders without crashing", () => {
    shallow(<AccordionItem goals={goals} />);
});

it("AccordionItem accepts goals props", () => {
    const wrapper = shallow(<AccordionItem goals={goals} />);
    expect(wrapper.instance().props.goals).toEqual(goals);
});