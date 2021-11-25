import React from "react";
import "./sidebar.css";
import Multiselect from "multiselect-react-dropdown";
import Button from "@restart/ui/esm/Button";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      objectType: window.objectType,
      businessProfilesOption: [
        { name: "Business Profile Approved", type: "bp" },
        { name: "Business Profile In Progress - Op Risk", type: "bp" },
        { name: "Business Profile Instances", type: "bp" },
        { name: "BU/SU Profile", type: "bp" }
      ],

      risksOption: [
        { name: "Effective", type: "risk" },
        { name: "Not determined", type: "risk" },
        { name: "Low", type: "risk" },
        { name: "Medium", type: "risk" },
        { name: "Impact", type: "risk" },
        { name: "very High", type: "risk" },
        { name: "Paratially Effective", type: "risk" },
        { name: "Ineffective", type: "risk" },
      ],

      controlsOptions: [
        { name: "Active", type: "control" },
        { name: "Draft", type: "control" },
      ]
    };
  }

  componentDidMount() { }

  renderCheckbox() {
    return (
      <div>
        <div>
          <input type="checkbox" id="scales" name="scales"
          />
          <label for="scales">Residual Risk Rating</label>
        </div>
        <br />
        <div>
          <input type="checkbox" id="horns" name="horns" />
          <label for="horns">CAP Test Scope</label>
        </div>
        <br />
        <div>
          <input type="checkbox" id="horns" name="horns" />
          <label for="horns">Taxonomy</label>
        </div>
        <br />
      </div>
    )
  }

  renderMultiselect() {
    const {
      businessProfilesOption,
      risksOption,
      controlsOptions,
    } = this.state;
    const customFilters = ["Business Profiles", "Risks", "Controls"];
    const customFilterOptions = [
      businessProfilesOption,
      risksOption,
      controlsOptions,
      controlsOptions,
    ];

    const multiselect = customFilters.map((customFilter, index) => {
      return (
        <>
          {" "}
          <Multiselect
            key={index}
            options={customFilterOptions[index]}
            onSelect={this.props.onselect}
            onRemove={this.props.onremove}
            displayValue="name"
            showCheckbox
            placeholder={customFilter}
            closeOnSelect={false}
            showArrow="true"
            avoidHighlightFirstOption="false"
            style={{
              multiselectContainer: {
                width: "100%"
              }
            }}
          />
          <br />
        </>
      );
    });

    return multiselect;
  }

  render() {
    return (
      <div className="sidebar" id="sidebar">
        <h6>
          {" "}
          <span className="text">Custom Filters</span>
          <br />
        </h6>
        <div className="hrline">
          <hr />
        </div>
        <div className="textaction">
          <ul className="actionitems">
            {this.renderMultiselect()}
            {this.renderCheckbox()}
            <button
              type="submit"
              size="lg"
              className="btn-default">
              Apply
            </button>{' '}
            <button
              type="submit"
              size="lg"
              className="btn-default">
              Cancel
            </button>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
