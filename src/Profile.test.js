import React from "react";
import { shallow } from "enzyme";
import Profile from "./Profile";

it("Profile component renders without crashing", () => {
    shallow(<Profile />);
});

it("renders Profile name no props", () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.find("p").text()).toEqual('Onboarder name: Best Onboarder Ever!');
});

it("renders Profile name with props", () => {
    const wrapper = shallow(<Profile name={'Whiskey'} />);

    expect(wrapper.instance().props.name).toEqual('Whiskey');
    expect(wrapper.find("p").text()).toEqual('Onboarder name: Whiskey');
});