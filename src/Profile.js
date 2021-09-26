import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div className="card" style={{ width: "18rem" }}>
                <img src='whiskey.jpg' class="card-img-top" alt="Whiskey Onboarder" />
                <div className="card-body">
                    <p className="card-text">Onboarder name: {this.props.name || "Best Onboarder Ever!"}</p>
                </div>
            </div>
        );
    }
}

export default Profile;