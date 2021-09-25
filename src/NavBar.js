import { extend } from 'jquery';
import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">EOPDS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            <NavLink exact className="nav-link" to="/onboarder">Onboarder</NavLink>
                            <NavLink exact className="nav-link" to="/designer">Program Desiner</NavLink>
                            <NavLink exact className="nav-link" to="/teamleader">Team Leader</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;