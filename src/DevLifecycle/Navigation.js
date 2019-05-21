import React from 'react'
import {NavLink} from 'react-router-dom';
export default () => {
    return (
      <div>
      <nav className="navbar is-primary">
      
      <div className="navbar-start">
            <div className="navbar-item">
                <NavLink  exact to="/">
                    Discussion
                </NavLink>
            </div>
            <div className="navbar-item">
                <NavLink  to="/rules">
                    Rules
                </NavLink>
            </div>
            <div className="navbar-item">
                <NavLink  to="/workflow">
                    Workflow
                </NavLink>
            </div>
        </div>
      </nav>
      </div>
    )
}
