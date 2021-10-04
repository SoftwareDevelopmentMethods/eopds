import React from "react";
import { shallow, mount } from "enzyme";
import Home from "./Home";

it("Home component renders without crashing", () => {
    shallow(<Home />);
});

it("renders Home links", () => {
    const wrapper = shallow(<Home />);
    const name = wrapper.find('h5').text();

    expect(wrapper.find("img").prop("src")).toEqual('logo.png');
    expect(wrapper.contains(name)).toEqual(true);
});