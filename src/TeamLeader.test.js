import React from "react";
import { shallow } from "enzyme";
import TeamLeader from "./TeamLeader";

it("TeamLeader component renders without crashing", () => {
    shallow(<TeamLeader />);
});

it("renders TeamLeader form", () => {
    const wrapper = shallow(<TeamLeader />);

    expect(wrapper.contains(<h2 id="orgInfo">Organisational Information Form</h2>)).toEqual(true);
    expect(wrapper.contains(<label for="Framework">4. What frameworks are mainly used by the team?</label>)).toEqual(true);
});