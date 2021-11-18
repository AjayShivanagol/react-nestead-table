import React, { Component } from "react";

export class ControlButtons extends Component {
  onTerminateClick = () => {
    console.log("onTerminateClick");
  };

  onRestartClick = () => {
    console.log("onRestartClick");
  };
  onCancelClick = () => {};
  render() {
    const { selectedItems } = this.props;
    return (
      <div>
        <button
          type="submit"
          className="btn-default"
          onClick={this.onTerminateClick}
          disabled={selectedItems.length === 0}
        >
          <h6>Restart</h6>
        </button>
        <button
          type="submit"
          className="btn-default"
          onClick={this.onRestartClick}
          disabled={selectedItems.length === 0}
        >
          <h6>Terminate</h6>
        </button>
        <button
          type="submit"
          className="btn-default"
          onClick={this.onCancelClick}
          disabled={selectedItems.length === 0}
        >
          <h6>Cancel</h6>
        </button>
      </div>
    );
  }
}

export default ControlButtons;
