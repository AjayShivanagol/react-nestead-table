
import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NesteadTable from "./nestead-table/NesteadTable.js";
export class APP extends Component {
  render() {
    return (
      <div>
        <NesteadTable />
      </div>
    );
  }
}

export default APP;
