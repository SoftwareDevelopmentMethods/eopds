import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";

it("Home component renders without crashing", () => {
    shallow(<Home />);
});

it("renders Home links", () => {
    const wrapper = shallow(<Home />);
    const header = <h5 class="card-title">EOPDS</h5>;

    expect(wrapper.find("img").prop("src")).toEqual('logo.png');
    expect(wrapper.contains(header)).toEqual(true);
});