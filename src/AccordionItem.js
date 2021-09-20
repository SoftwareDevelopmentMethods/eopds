import React, { Component } from 'react';

class AccordionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven']
        }
    }


    render() {
        const number = this.state.numbers[this.props.index + 1];
        return (

            <div className="accordion-item">
                <h2 className="accordion-header" id={`panelsStayOpen-heading${number}`}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${number}`} aria-expanded="false" aria-controls={`panelsStayOpen-collapse${number}`}>
                        {this.props.goal}
                    </button>
                </h2>
                <div id={`panelsStayOpen-collapse${number}`} class="accordion-collapse collapse" aria-labelledby={`panelsStayOpen-heading${number}`}>
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        )
    }
}

export default AccordionItem;