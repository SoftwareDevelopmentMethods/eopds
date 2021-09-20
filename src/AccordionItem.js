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
                        {this.props.goals.goal}
                    </button>
                </h2>
                <div id={`panelsStayOpen-collapse${number}`} class="accordion-collapse collapse" aria-labelledby={`panelsStayOpen-heading${number}`}>
                    <div className="accordion-body">
                        <ul class="list-group">
                            {this.props.goals.activity.map((act, i) => (
                                <li class="list-group-item active" key={`ActiveListKey${i}`}>{act}</li>
                            ))}

                            {this.props.goals.strategy.map((str, i) => (
                                <li class="list-group-item" key={`ListKey${i}`}>{str}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccordionItem;