import React from "react";
import {
  Navbar
} from "react-bootstrap";

export class Navigation extends React.Component {
  render = () => {
    const { open, toggleMenu } = this.props;

    return (
      <Navbar>
        <button onClick={toggleMenu}>
          <Navbar.Brand>
            <div className="Toggle-header">
              Toggle Custom Filters
            </div>
          </Navbar.Brand>
        </button>
      </Navbar>
    );
  };
}

export default Navigation;
