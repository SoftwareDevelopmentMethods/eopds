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
                    <div class="list-group">
                        {this.props.goals.activity.map((act, i) => (
                            <a href="#" class="text-start list-group-item list-group-item-action list-group-item-warning" key={`ActiveListKey${i}`}> {act}
                                <button type="button" button id={`activityCompletion${i}`} onClick={() => (document.getElementById(`activityCompletion${i}`).innerHTML = "Complete")}>Start</button>
                            </a>

                        ))}

                        {this.props.goals.strategy.map((str, i) => (
                            <a href="#" class="text-start list-group-item list-group-item-action" key={`ListKey${i}`}>{str}
                                <button type="button" button id={`strategyCompletion${i}`} onClick={() => (document.getElementById(`strategyCompletion${i}`).innerHTML = "Complete")}>Start</button>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default AccordionItem;