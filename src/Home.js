import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <div class="card" >
                    <img src="logo.png" class="card-img-top" alt="Company Logo" />
                    <div class="card-body">
                        <h5 class="card-title">EOPDS</h5>
                        <p class="card-text">Make your life easier begin onboarding now!</p>
                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                            <Link type="button" class="btn btn-outline-primary" to="/onboarder">Onboarder</Link>
                            <Link type="button" class="btn btn-outline-primary" to="/designer">Program Designer</Link>
                            <Link type="button" class="btn btn-outline-primary" to="/teamleader">Team Leader</Link>
                        </div>
                        <p class="card-text">Authors: Alastair, Calvin, Sergey!</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;