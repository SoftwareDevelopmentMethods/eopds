import React from "react";
import { shallow, mount } from "enzyme";
import { Route } from "react-router-dom";

it("Accordeon component renders without crashing", () => {
    shallow(<Route />);
});