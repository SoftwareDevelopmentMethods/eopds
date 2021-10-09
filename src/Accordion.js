import React, { Component } from 'react';
import './AccordionItem';
import Profile from './Profile';
import AccordionItem from './AccordionItem';

class Accordion extends Component {

    render() {
        return (
            <div>
                <h1>Onboarder Activities</h1>

                <Profile />
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    {this.props.goal.map((item, ind) => (
                        <AccordionItem key={`Key${ind}`} index={ind} goals={item} />
                    ))}
                </div>
            </div>

        );
    }
}

export default Accordion;