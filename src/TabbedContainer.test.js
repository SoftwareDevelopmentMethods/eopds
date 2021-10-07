import React from "react";
import { shallow } from "enzyme";
import TabbedContainer from "./TabbedContainer";

it("TabbedContainer component renders without crashing", () => {
    shallow(<TabbedContainer />);
});