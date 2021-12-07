import React from "react";
import "./sidebar.css";
import Multiselect from "multiselect-react-dropdown";
import Button from "@restart/ui/esm/Button";
import { jsonData } from "../nestead-table/NesteadTable";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: !this.props.open || true,
      objectType: window.objectType,

      residualRiskRatingOptions: [
        { name: "Low", type: "risk", column: "Residual Risk Rating" },
        { name: "Medium", type: "risk", column: "Residual Risk Rating" },
        { name: "High", type: "risk", column: "Residual Risk Rating" },
        { name: "Very High", type: "risk", column: "Residual Risk Rating" }
      ],

      overallControlEffeOptions: [
        {
          name: "Not Assessed",
          type: "risk",
          column: "Overall Control Effectiveness Rating"
        },
        {
          name: "Insignificant",
          type: "risk",
          column: "Overall Control Effectiveness Rating"
        }
      ],

      ControlEffectivenesssOptions: [
        {
          name: "Partially Effective",
          type: "control",
          column: "Control Effectiveness Rating"
        },
        {
          name: "Effective",
          type: "control",
          column: "Control Effectiveness Rating"
        },
        {
          name: "Not Determined",
          type: "control",
          column: "Control Effectiveness Rating"
        },
        {
          name: "Not Tested",
          type: "control",
          column: "Control Effectiveness Rating"
        }
      ],

      ControlClassificationOPtions: [
        { name: "Key", type: "control", column: "Control Classification" },
        {
          name: "Compensating",
          type: "control",
          column: "Control Classification"
        },
        {
          name: "Arrangement",
          type: "control",
          column: "Control Classification"
        }
      ]
    };
  }

  componentDidMount() {}

  renderCheckbox() {
    return (
      <div>
        <div>
          <input type="checkbox" id="generic" name="generic" />{" "}
          <label className="filter-checkbox">Generic</label>
        </div>
        <br />
        <div>
          <input type="checkbox" id="supplier" name="supplier" />{" "}
          <label className="filter-checkbox">Supplier </label>
        </div>
        <br />
        <div>
          <input type="checkbox" id="controls" name="controls" />{" "}
          <label className="filter-checkbox">IT controls</label>
        </div>
        <br />
      </div>
    );
  }

  renderMultiselect() {
    const {
      residualRiskRatingOptions,
      overallControlEffeOptions,
      ControlEffectivenesssOptions,
      ControlClassificationOPtions
    } = this.state;
    const customFilters = [
      "Residual Risk Rating",
      "Overall Control Effectiveness Rating",
      "Control Effectiveness Rating",
      "Control Classification"
    ];
    const customFilterOptions = [
      residualRiskRatingOptions,
      overallControlEffeOptions,
      ControlEffectivenesssOptions,
      ControlClassificationOPtions
    ];

    const multiselect = customFilters.map((customFilter, index) => {
      return (
        <>
          {" "}
          <Multiselect
            key={index}
            options={customFilterOptions[index]}
            onSelect={this.props.onselect}
            allData = {jsonData}
            onRemove={this.props.onremove}
            displayValue="name"
            showCheckbox
            placeholder={customFilter}
            closeOnSelect={false}
            showArrow="true"
            avoidHighlightFirstOption="false"
            style={{
              multiselectContainer: {
                width: "100%",
                fontSize: "11px",
                // paddingLeft: '-180px',
                marginLeft: "-20px"
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
    const { open } = this.props;
    const active = !open;
    return (
      <nav id="sidebar" className={active ? "active" : null}>
        <div className="sidebar" id="sidebar">
          <h6>
            {" "}
            <div className="text">Custom Filters</div>
            <br />
          </h6>
          <div className="hrline">
            <hr />
          </div>
          <div className="textaction sidebar-item">
            <ul className="actionitems">
              {this.renderMultiselect()}
              {this.renderCheckbox()}
              <button type="submit" size="lg" className="btn-default">
                Apply
              </button>{" "}
              <button type="submit" size="lg" className="btn-default">
                Cancel
              </button>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
