import React, { Component } from "react";

export class ControlButtons extends Component {
  onTerminateClick = () => {
    console.log("onTerminateClick");
  };

  onRestartClick = () => {
    console.log("onRestartClick");
  };
  
  render() {
    const { onCancelClick, selectedItems } = this.props;
    console.log('selectedItems----------------', selectedItems);
    return (
      <div>
        <button
          type="submit"
          className="btn-default"
          onClick={this.onTerminateClick}
          // disabled={selectedItems.length === 0}
        >
          <h6>Submit</h6>
        </button>{" "}
        <button
          type="submit"
          className="btn-default"
          onClick={onCancelClick}
          // disabled={selectedItems.length === 0}
        >
          <h6>Cancel</h6>
        </button>
      </div>
    );
  }
}

export default ControlButtons;
