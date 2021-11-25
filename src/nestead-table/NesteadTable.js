import React, { Component } from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import ReactNestedTable from ".";
import Sidebar from "../sidebar/Sidebar";

const headersMap = {
  name: "Full Name",
  companyName: "Company Name"
};

const onCellDisplay = () => {
  return true;
};


export class NesteadTable extends Component {
  render() {
    return (
      // <Container>
      //   <Row>
      //     <Col sm={2}>
      //     <Sidebar />
      //     </Col>
      //     <Col sm={10}>
      //       <ReactNestedTable
      //         data={jsonData}
      //         headersMap={headersMap}
      //         onCellDisplay={onCellDisplay}
      //       />
      //     </Col>
      //   </Row>
      // </Container>

      <div class="maincontainer1">
        <div class="leftcolumn"><Sidebar /></div>
        <div class="contentwrapper">
          <ReactNestedTable
            data={jsonData}
            headersMap={headersMap}
            onCellDisplay={onCellDisplay}
          />
        </div>
      </div>
    );
  }
}
export default NesteadTable;

const jsonData = [
  {
    isMaster: false,
    selected: false,
    ID: 0,
    Name: "0940375C025200FAA38ED98A F9DE03D61ADAB727BA8C26D4 04D95D3",
    "Business Profile Owner": "Gary Dingley",
    Folder: "out-of-the-box strategize methodologies",
    "Profile Type": "Greenholt, Smith and Brekke",
    Risk: [
      {
        isMaster: false,
        selected: false,
        ID: 0.1,
        Name: "0940375C025200FAA38ED98A F9DE03D61ADAB727BA8C26D4 66666",
        "Risk Owner": "Gary Dingley",
        "Risk Taxonomy": "Lindgren",
        "Inherent Risk Rating": "Lindgren",
        "Overall Control Effectiveness Rating and Residual Risk Rating":
          "Lindgren",
        "Residual L2 Approval Status": "Lindgren",
        "Residual L2 Date": "Residual L2 Date",
        "Risk Treatment": "Lindgren",
        Folder: "CBA / TRQ / FOLDER",
        Control: [
          {
            isMaster: false,
            selected: false,
            ID: 0.2,
            "Control Owner": "333333",
            "Control Taxonomy Hierarchy": "North Laurineshire",
            "Control Type 3": "Jerde Spring",
            "Control Classification": "Control Classification",
            "CAP Testing Scope": "CAP Testing Scope",
            Folder: "Folder / Folder /Folder"
          },
          {
            isMaster: false,
            selected: false,
            ID: 0.21,
            "Control Owner": "333333",
            "Control Taxonomy Hierarchy": "North Laurineshire",
            "Control Type 3": "Jerde Spring",
            "Control Classification": "Control Classification",
            "CAP Testing Scope": "CAP Testing Scope",
            Folder: "Folder / Folder /Folder"
          }
        ]
      },
      {
        isMaster: false,
        selected: false,
        ID: 0.11,
        Name: "Tiaxxxxxnna",
        "Risk Owner": "Susheel Mulgund",
        "Risk Taxonomy": "Lindgren",
        "Inherent Risk Rating": "Lindgren",
        "Overall Control Effectiveness Rating and Residual Risk Rating":
          "Lindgren",
        "Residual L2 Approval Status": "Lindgren",
        "Residual L2 Date": "Residual L2 Date",
        "Risk Treatment": "Lindgren",
        Folder: "CBA / TRQ / FOLDER"
      }
    ]
  },
  {
    isMaster: false,
    selected: false,
    ID: 1,
    Name: "0940375C025200FAA38ED98A F9DE03D61ADAB727BA8C26D4 ABCD",
    "Business Profile Owner": "owner ",
    Folder: "out-of-the-box strategize methodologies",
    "Profile Type": "Greenholt, Smith and Brekke",
    Risk: [
      {
        isMaster: false,
        selected: false,
        ID: 1.1,
        Name: "Tiaxxxxxnna",
        "Risk Owner": "Lindgren",
        "Risk Taxonomy": "Lindgren",
        "Inherent Risk Rating": "Lindgren",
        "Overall Control Effectiveness Rating and Residual Risk Rating":
          "Lindgren",
        "Residual L2 Approval Status": "Lindgren",
        "Residual L2 Date": "Residual L2 Date",
        "Risk Treatment": "Lindgren",
        Folder: "CBA / TRQ / FOLDER",
        Control: [
          {
            isMaster: false,
            selected: false,
            ID: 1.2,
            "Control Owner": "333333",
            "Control Taxonomy Hierarchy": "North Laurineshire",
            "Control Type 3": "Jerde Spring",
            "Control Classification": "Control Classification",
            "CAP Testing Scope": "CAP Testing Scope",
            Folder: "Folder / Folder /Folder"
          },
          {
            isMaster: false,
            selected: false,
            ID: 1.21,
            "Control Owner": "333333",
            "Control Taxonomy Hierarchy": "North Laurineshire",
            "Control Type 3": "Jerde Spring",
            "Control Classification": "Control Classification",
            "CAP Testing Scope": "CAP Testing Scope",
            Folder: "Folder / Folder /Folder"
          }
        ]
      },
      {
        isMaster: false,
        selected: false,
        ID: 1.11,
        Name: "Tiaxxxxxnna",
        "Risk Owner": "Lindgren",
        "Risk Taxonomy": "Lindgren",
        "Inherent Risk Rating": "Lindgren",
        "Overall Control Effectiveness Rating and Residual Risk Rating":
          "Lindgren",
        "Residual L2 Approval Status": "Lindgren",
        "Residual L2 Date": "Residual L2 Date",
        "Risk Treatment": "Lindgren",
        Folder: "CBA / TRQ / FOLDER"
      }
    ]
  },
  {
    isMaster: false,
    selected: false,
    ID: 2,
    Name: "0940375C025200FAA38ED98A F9DE03D61ADAB727BA8C26D4",
    "Business Profile Owner": "Susheel",
    Folder: "out-of-the-box strategize methodologies",
    "Profile Type": "Greenholt, Smith and Brekke",
    Risk: [
      {
        isMaster: false,
        selected: false,
        ID: 2.1,
        Name: "Tiaxxxxxnna",
        "Risk Owner": "Lindgren",
        "Risk Taxonomy": "Lindgren",
        "Inherent Risk Rating": "Lindgren",
        "Overall Control Effectiveness Rating and Residual Risk Rating":
          "Lindgren",
        "Residual L2 Approval Status": "Lindgren",
        "Residual L2 Date": "Residual L2 Date",
        "Risk Treatment": "Lindgren",
        Folder: "CBA / TRQ / FOLDER",
        Control: [
          {
            isMaster: false,
            selected: false,
            ID: 2.2,
            "Control Owner": "333333",
            "Control Taxonomy Hierarchy": "North Laurineshire",
            "Control Type 3": "Jerde Spring",
            "Control Classification": "Control Classification",
            "CAP Testing Scope": "CAP Testing Scope",
            Folder: "Folder / Folder /Folder"
          },
          {
            isMaster: false,
            selected: false,
            ID: 2.21,
            "Control Owner": "333333",
            "Control Taxonomy Hierarchy": "North Laurineshire",
            "Control Type 3": "Jerde Spring",
            "Control Classification": "Control Classification",
            "CAP Testing Scope": "CAP Testing Scope",
            Folder: "Folder / Folder /Folder"
          }
        ]
      },
      {
        isMaster: false,
        selected: false,
        ID: 2.11,
        Name: "Tiaxxxxxnna",
        "Risk Owner": "Lindgren",
        "Risk Taxonomy": "Lindgren",
        "Inherent Risk Rating": "Lindgren",
        "Overall Control Effectiveness Rating and Residual Risk Rating":
          "Lindgren",
        "Residual L2 Approval Status": "Lindgren",
        "Residual L2 Date": "Residual L2 Date",
        "Risk Treatment": "Lindgren",
        Folder: "CBA / TRQ / FOLDER"
      }
    ]
  },
  {
    isMaster: false,
    selected: false,
    ID: 3,
    Name: "F9DE03D61ADAB727BA8C26D4 04D95D3 0940375C025200FAA38ED98A",
    "Business Profile Owner": "Shivanagol",
    Folder: "out-of-the-box strategize methodologies",
    "Profile Type": "Greenholt, Smith and Brekke",
    Risk: [
      {
        isMaster: false,
        selected: false,
        ID: 3.1,
        Name: "Tiaxxxxxnna",
        "Risk Owner": "Lindgren",
        "Risk Taxonomy": "Lindgren",
        "Inherent Risk Rating": "Lindgren",
        "Overall Control Effectiveness Rating and Residual Risk Rating":
          "Lindgren",
        "Residual L2 Approval Status": "Lindgren",
        "Residual L2 Date": "Residual L2 Date",
        "Risk Treatment": "Lindgren",
        Folder: "CBA / TRQ / FOLDER",
        Control: [
          {
            isMaster: false,
            selected: false,
            ID: 3.2,
            "Control Owner": "333333",
            "Control Taxonomy Hierarchy": "North Laurineshire",
            "Control Type 3": "Jerde Spring",
            "Control Classification": "Control Classification",
            "CAP Testing Scope": "CAP Testing Scope",
            Folder: "Folder / Folder /Folder"
          },
          {
            isMaster: false,
            selected: false,
            ID: 3.21,
            "Control Owner": "333333",
            "Control Taxonomy Hierarchy": "North Laurineshire",
            "Control Type 3": "Jerde Spring",
            "Control Classification": "Control Classification",
            "CAP Testing Scope": "CAP Testing Scope",
            Folder: "Folder / Folder /Folder"
          }
        ]
      },
      {
        isMaster: false,
        selected: false,
        ID: 3.11,
        Name: "Tiaxxxxxnna",
        "Risk Owner": "Lindgren",
        "Risk Taxonomy": "Lindgren",
        "Inherent Risk Rating": "Lindgren",
        "Overall Control Effectiveness Rating and Residual Risk Rating":
          "Lindgren",
        "Residual L2 Approval Status": "Lindgren",
        "Residual L2 Date": "Residual L2 Date",
        "Risk Treatment": "Lindgren",
        Folder: "CBA / TRQ / FOLDER"
      }
    ]
  },
  {
    isMaster: false,
    selected: false,
    ID: 4,
    Name: "ADCCF9DE03D61ADAB727BA8C26D4 04D95D3 0940375C025200FAA38ED98A",
    "Business Profile Owner": "Considine",
    Folder: "out-of-the-box strategize methodologies",
    "Profile Type": "Greenholt, Smith and Brekke",
    Risk: [
      {
        isMaster: false,
        selected: false,
        ID: 4.1,
        Name: "Tiaxxxxxnna",
        "Risk Owner": "Lindgren",
        "Risk Taxonomy": "Lindgren",
        "Inherent Risk Rating": "Lindgren",
        "Overall Control Effectiveness Rating and Residual Risk Rating":
          "Lindgren",
        "Residual L2 Approval Status": "Lindgren",
        "Residual L2 Date": "Residual L2 Date",
        "Risk Treatment": "Lindgren",
        Folder: "CBA / TRQ / FOLDER",
        Control: [
          {
            isMaster: false,
            selected: false,
            ID: 4.2,
            "Control Owner": "333333",
            "Control Taxonomy Hierarchy": "North Laurineshire",
            "Control Type 3": "Jerde Spring",
            "Control Classification": "Control Classification",
            "CAP Testing Scope": "CAP Testing Scope",
            Folder: "Folder / Folder /Folder"
          },
          {
            isMaster: false,
            selected: false,
            ID: 4.21,
            "Control Owner": "333333",
            "Control Taxonomy Hierarchy": "North Laurineshire",
            "Control Type 3": "Jerde Spring",
            "Control Classification": "Control Classification",
            "CAP Testing Scope": "CAP Testing Scope",
            Folder: "Folder / Folder /Folder"
          }
        ]
      },
      {
        isMaster: false,
        selected: false,
        ID: 4.11,
        Name: "Tiaxxxxxnna",
        "Risk Owner": "Lindgren",
        "Risk Taxonomy": "Lindgren",
        "Inherent Risk Rating": "Lindgren",
        "Overall Control Effectiveness Rating and Residual Risk Rating":
          "Lindgren",
        "Residual L2 Approval Status": "Lindgren",
        "Residual L2 Date": "Residual L2 Date",
        "Risk Treatment": "Lindgren",
        Folder: "CBA / TRQ / FOLDER"
      }
    ]
  },
  {
    isMaster: false,
    selected: false,
    ID: 5,
    Name: "F9DE03D61ADAB727BA8C26D4 0940375C025200FAA38ED98A",
    "Business Profile Owner": "Abhilash",
    Folder: "out-of-the-box strategize methodologies",
    "Profile Type": "Greenholt, Smith and Brekke",
    Risk: [
      {
        isMaster: false,
        selected: false,
        ID: 5.1,
        Name: "Tiaxxxxxnna",
        "Risk Owner": "Lindgren",
        "Risk Taxonomy": "Lindgren",
        "Inherent Risk Rating": "Lindgren",
        "Overall Control Effectiveness Rating and Residual Risk Rating":
          "Lindgren",
        "Residual L2 Approval Status": "Lindgren",
        "Residual L2 Date": "Residual L2 Date",
        "Risk Treatment": "Lindgren",
        Folder: "CBA / TRQ / FOLDER",
        Control: [
          {
            isMaster: false,
            selected: false,
            ID: 5.2,
            "Control Owner": "333333",
            "Control Taxonomy Hierarchy": "North Laurineshire",
            "Control Type 3": "Jerde Spring",
            "Control Classification": "Control Classification",
            "CAP Testing Scope": "CAP Testing Scope",
            Folder: "Folder / Folder /Folder"
          },
          {
            isMaster: false,
            selected: false,
            ID: 5.21,
            "Control Owner": "333333",
            "Control Taxonomy Hierarchy": "North Laurineshire",
            "Control Type 3": "Jerde Spring",
            "Control Classification": "Control Classification",
            "CAP Testing Scope": "CAP Testing Scope",
            Folder: "Folder / Folder /Folder"
          }
        ]
      },
      {
        isMaster: false,
        selected: false,
        ID: 5.11,
        Name: "Tiaxxxxxnna",
        "Risk Owner": "Lindgren",
        "Risk Taxonomy": "Lindgren",
        "Inherent Risk Rating": "Lindgren",
        "Overall Control Effectiveness Rating and Residual Risk Rating":
          "Lindgren",
        "Residual L2 Approval Status": "Lindgren",
        "Residual L2 Date": "Residual L2 Date",
        "Risk Treatment": "Lindgren",
        Folder: "CBA / TRQ / FOLDER"
      }
    ]
  }
];
