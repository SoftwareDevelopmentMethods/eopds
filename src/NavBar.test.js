import React from "react";
import { shallow } from 'enzyme';
import { Link, NavLink } from 'react-router-dom';
import NavBar from './NavBar';

it("NamBar component renders without crashing", () => {
    shallow(<NavBar />);
});

describe("NavBar includes Links and NavLinks correct references", () => {
    it('Link reference to "/"', () => {
        const wrapper = shallow(<NavBar />);
        expect(wrapper.find(Link).props().to).toBe('/');
    });

    it('NavLink Onboarder reference to "/onboarder"', () => {
        const wrapper = shallow(<NavBar />);
        expect(wrapper.find(NavLink).at(0).props().to).toBe('/onboarder');
    });

    it('NavLink Designer reference to "/designer"', () => {
        const wrapper = shallow(<NavBar />);
        expect(wrapper.find(NavLink).at(1).props().to).toBe('/designer');
    });

    it('NavLink Teamleader reference to "/teamleader"', () => {
        const wrapper = shallow(<NavBar />);
        expect(wrapper.find(NavLink).at(2).props().to).toBe('/teamleader');
    });

});