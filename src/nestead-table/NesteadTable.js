import React, { Component } from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import ReactNestedTable from ".";
import Navigation from "../sidebar/Navigation";
import Sidebar from "../sidebar/Sidebar";

const headersMap = {
  name: "Full Name",
  companyName: "Company Name"
};

const onCellDisplay = () => {
  return true;
};

export class NesteadTable extends Component {
  state = { open: false };

  toggleMenu = () => {
    this.setState({ open: !this.state.open });
    console.log(this.state.open);
  };

  render() {
    const { open } = this.state;
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
      <>
        {/* <div className="wrapper">
          <Sidebar open={open} />
          <div className="contentwrapper">
            <Navigation open={open} toggleMenu={this.toggleMenu} /> */}
        <ReactNestedTable
          data={jsonData}
          headersMap={headersMap}
          onCellDisplay={onCellDisplay}
        />
        {/* </div>
        </div> */}

        {/* <div className="maincontainer1">
        <div className="leftcolumn"><Sidebar  open={open}  /></div>
        <div className="contentwrapper">
        <Navigation open={open} toggleMenu={this.toggleMenu} />
          <ReactNestedTable
            data={jsonData}
            headersMap={headersMap}
            onCellDisplay={onCellDisplay}
          />
        </div>
      </div> */}
      </>
    );
  }
}
export default NesteadTable;

export const jsonData = [
  {
    isMaster: false,
    selected: false,
    Key: 0,
    ID: "RA-000041",
    Name: "418EDB980117CA9D13B389CF F1C9178C9C62A409A706F5A8 9534F843339D136A",
    "Business Profile Owner": "Susheel Mulgund",
    Folder: "CBA / Business & Private Banking",
    "Profile Type": "Line of Business",
    Risk: [
      {
        isMaster: false,
        selected: false,
        Key: 0.1,
        ID: "RK-000066",
        Name:
          "D455B4973F16981929D5458C 350D34188A6CA41B10149688 B0C5DC354E2D0910630D3F6F 3691EE7A4E33C00E447E2917 2A0F100CA9723914C9951648 72BEB9FB6E5D194EC900F6FB 028763DAFF06A31604064E78 A1516ED2DDF9B1E",
        "Risk Owner": "Jacqueline Schrader",
        "Risk Taxonomy": "Accounting, Legal & Taxation : Legal",
        "Inherent Risk Rating": "Low",
        "Overall Control Effectiveness Rating": "Partially Effective",
        "Residual Risk Rating": "Not Assessed",
        "Residual L2 Approval Status": "Approved",
        "Residual L2 Date": "27-Oct-2020",
        "Risk Treatment": "Risk Accepted",
        Folder: "CBA / Legal and Group Governance / Legal Services",
        Control: [
          {
            isMaster: false,
            selected: false,
            Key: 0.2,
            ID: "CT-000187",
            "Control Owner": "Claudia Farnsworth",
            "Control Taxonomy Hierarchy":
              "CAC0FD11616DF770C802B080 A60E29E11C2CBFD4A4",
            "Control Type 3":
              "Review and approval of Business Continuity Plans (BCPs)",
            "Control Classification": "Key",
            "CAP Testing Scope":
              "In Scope - Associated to a Very High or High Inherent Risk",
            Folder:
              "CBA / Enterprise Services / Payment Services Utility / PSU Operations / Account Exception Services",
            "Control Effectiveness Rating": "Partially Effective"
          },
          {
            isMaster: false,
            selected: false,
            Key: 0.21,
            ID: "CT-000179",
            "Control Owner": "Jacqueline Schrader",
            "Control Taxonomy Hierarchy": "",
            "Control Type 3": "Jerde Spring",
            "Control Classification": "Compensating",
            "CAP Testing Scope": "Scope",
            Folder: "Folder / Folder /Folder",
            "Control Effectiveness Rating": "Partially Effective"
          }
        ]
      },
      {
        isMaster: false,
        selected: false,
        Key: 0.11,
        ID: "RK-000089",
        Name: "20EB22D851388A05995C4C0F B17FFD528B85BE128F4AE7B9 1408",
        "Risk Owner": "Jacqueline Schrader",
        "Risk Taxonomy": "Conduct : Employee Misconduct",
        "Inherent Risk Rating": "High",
        "Overall Control Effectiveness Rating": "Effective",
        "Residual Risk Rating": "Low",
        "Residual L2 Approval Status": "Not Reviewed",
        "Residual L2 Date": "18-Nov-2021",
        "Risk Treatment": "Risk Under Review",
        Folder: "CBA / Legal and Group Governance / Legal Services"
      }
    ]
  },
  {
    isMaster: false,
    selected: false,
    Key: 1,
    ID: "RA-000201",
    Name: "2EE0214DE1065820BEFD29AE 7BBD672B509A4",
    "Business Profile Owner": "David Jackson",
    Folder: "Archived / ASB / Risk",
    "Profile Type": "Line of Business",
    Risk: [
      {
        isMaster: false,
        selected: false,
        Key: "1.1",
        ID: "RK-000093",
        Name: "91C680FC5F8961F1B3BC5016 D36393A127D0B",
        "Risk Owner": "Jean Olivier",
        "Risk Taxonomy":
          "Accounting, Legal and Taxation : Statutory Financial Reporting",
        "Inherent Risk Rating": "Low",
        "Overall Control Effectiveness Rating": "Low",
        "Residual Risk Rating": "Medium",
        "Residual L2 Approval Status": "Approved",
        "Residual L2 Date": "25-Feb-2021",
        "Risk Treatment": "Risk Under Review",
        Folder: "CBA / Financial Services / Group Finance",
        Control: [
          {
            isMaster: false,
            selected: false,
            Key: 1.2,
            ID: "CT-000187",
            Name: "91C680FC5F8961F1B3BC5016 D36393A127D0B",
            "Control Owner": "Kara Nicholls",
            "Control Taxonomy Hierarchy": "",
            "Control Type 3": "Benchmarking",
            "Control Classification": "Arrangement",
            "CAP Testing Scope": "Exempt - Issue Management Existing Control",
            Folder: "CBA / Legal and Group Governance / Group Governance",
            "Control Effectiveness Rating": "Not Determined"
          },
          {
            isMaster: false,
            selected: false,
            Key: 1.21,
            ID: "CT-000196",
            Name: "91C680FC5F8961F1B3BC5016 D36393A127D0B",
            "Control Owner": "Jacqueline Schrader",
            "Control Taxonomy Hierarchy": "Control Taxonomy Hierarch",
            "Control Type 3": "Payment approvals and authorisations",
            "Control Classification": "Key",
            "CAP Testing Scope":
              "Exempt - Not Associated to an Obligation or Material Inherent Risk",
            Folder: "CBA / Legal and Group Governance / Legal Services",
            "Control Effectiveness Rating": "Effective"
          }
        ]
      },
      {
        isMaster: false,
        selected: false,
        Key: 1.11,
        ID: "RK-000161",
        Name:
          "7624EE5E7B0715EFE410C1BF C2C19F7F559170DD7667BC6A 37450A3402CB5700AD91480B BAB28CEC48D76BE05066662A 7389798F6A1AB5B170C6A03A DC0C02215488CA61632834A2 E4",
        "Risk Owner": "Soraya Alali",
        "Risk Taxonomy": "Accounting, Legal & Taxation : CFS-Entity risk",
        "Inherent Risk Rating": "High",
        "Overall Control Effectiveness Rating": "Partially Effective",
        "Residual Risk Rating": "Medium",
        "Residual L2 Approval Status": "Not Reviewed",
        "Residual L2 Date": "25-Feb-2021",
        "Risk Treatment": "Risk Under Review",
        Folder: "CBA / Business & Private Banking / CommSec / Product & Risk"
      }
    ]
  },
  {
    isMaster: false,
    selected: false,
    Key: 2,
    ID: "RA-000390",
    Name: "02FF8A682FA875",
    "Business Profile Owner": "Lissa Webb",
    Folder: "TRN - CBA / Marketing",
    "Profile Type": "Business Profile Instances",
    Risk: [
      {
        isMaster: false,
        selected: false,
        Key: 2.1,
        ID: "RK-000098",
        Name:
          "7624EE5E7B0715EFE410C1BF C2C19F7F559170DD7667BC6A 37450A3402CB5700AD91480",
        "Risk Owner": "Ajay Shivanagol",
        "Risk Taxonomy": "Soraya Alali",
        "Inherent Risk Rating": "Lindgren",
        "Overall Control Effectiveness Rating": "Low",
        "Residual Risk Rating": "Medium",
        "Residual L2 Approval Status": "Lindgren",
        "Residual L2 Date": "25-Mar-2021",
        "Risk Treatment": "Lindgren",
        Folder: "CBA / ASB / People / People Operations",
        Control: [
          {
            isMaster: false,
            selected: false,
            Key: 2.2,
            ID: "CT-000083",
            Name: "91C680FC5F8961F1B3BC5016 D36393A127D0B",
            "Control Owner": "Lissa Webb",
            "Control Taxonomy Hierarchy": "North Laurineshire",
            "Control Type 3": "Jerde Spring",
            "Control Classification": "Arrangement",
            "CAP Testing Scope": "CAP Testing Scope",
            Folder: "Folder / Folder /Folder",
            "Control Effectiveness Rating": "Not Determined"
          },
          {
            isMaster: false,
            selected: false,
            Key: 2.21,
            ID: "CT-000193",
            Name: "91C680FC5F8961F1B3BC5016 D36393A127D0B",
            "Control Owner": "Lissa Webb",
            "Control Taxonomy Hierarchy": "North Laurineshire",
            "Control Type 3": "Jerde Spring",
            "Control Classification": "Arrangement",
            "CAP Testing Scope": "CAP Testing Scope",
            Folder: "Folder / Folder /Folder",
            "Control Effectiveness Rating": "Not Tested"
          }
        ]
      },
      {
        isMaster: false,
        selected: false,
        Key: 2.11,
        ID: "RA-000397",
        Name: "676DAFCNBVGST6767C",
        "Risk Owner": "Lindgren",
        "Risk Taxonomy": "Lindgren",
        "Inherent Risk Rating": "Lindgren",
        "Overall Control Effectiveness Rating": "Very High",
        "Residual Risk Rating": "Medium",
        "Residual L2 Approval Status": "Lindgren",
        "Residual L2 Date": "25-May-2021",
        "Risk Treatment": "Lindgren",
        Folder: "CBA / ASB / People"
      }
    ]
  },
  {
    isMaster: false,
    selected: false,
    Key: 3,
    ID: "RA-000456",
    Name: "F9DE03D61ADAB727BA8C26D4 04D95D3 0940375C025200FAA38ED98A",
    "Business Profile Owner": "Shivanagol",
    Folder: "Audit",
    "Profile Type": "Business Unit (BU) / Support Unit (SU)",
    Risk: [
      {
        isMaster: false,
        selected: false,
        Key: 3.1,
        ID: "RK-0000983",
        Name:
          "C2C19F7F559170DD7667BC6A 37450A3402CB5700AD91480B 7389798F6A1AB5B170C6A03A DC0C02215488CA61632834A2 E4",
        "Risk Owner": "Shivanagol",
        "Risk Taxonomy": "Lindgren",
        "Inherent Risk Rating": "Lindgren",
        "Overall Control Effectiveness Rating": "Low",
        "Residual Risk Rating": "Medium",
        "Residual L2 Approval Status": "Lindgren",
        "Residual L2 Date": "26-Feb-2021",
        "Risk Treatment": "Lindgren",
        Folder: "CBA / TRQ / FOLDER",
        Control: [
          {
            isMaster: false,
            selected: false,
            Key: 3.2,
            ID: "CT-0001983",
            Name: "91C680FC5F8961F1B3BC5016 D36393A127D0B",
            "Control Owner": "567389798F6A1AB5B170C6A03A",
            "Control Taxonomy Hierarchy": "North Laurineshire",
            "Control Type 3": "Jerde Spring",
            "Control Classification": "Arrangement",
            "CAP Testing Scope": "CAP Testing Scope",
            Folder: "Folder / Folder /Folder",
            "Control Effectiveness Rating": "Not Tested"
          },
          {
            isMaster: false,
            selected: false,
            Key: 3.21,
            ID: "CT-0007983",
            Name: "91C680FC5F8961F1B3BC5016 D36393A127D0B",
            "Control Owner": "04D95D3",
            "Control Taxonomy Hierarchy": "North Laurineshire",
            "Control Type 3": "Jerde Spring",
            "Control Classification": "Arrangement",
            "CAP Testing Scope": "CAP Testing Scope",
            Folder: "Folder / Folder /Folder",
            "Control Effectiveness Rating": "Not Tested"
          }
        ]
      },
      {
        isMaster: false,
        selected: false,
        Key: 3.11,
        ID: "RA-000780",
        Name: "0940375C025200FAA38ED98A",
        "Risk Owner": "Lindgren",
        "Risk Taxonomy": "Lindgren",
        "Inherent Risk Rating": "Lindgren",
        "Overall Control Effectiveness Rating": "Low",
        "Residual Risk Rating": "Medium",
        "Residual L2 Approval Status": "Lindgren",
        "Residual L2 Date": "25-Jan-2021",
        "Risk Treatment": "Lindgren",
        Folder: "TRN - CBA / ASB"
      }
    ]
  },
  {
    isMaster: false,
    selected: false,
    Key: 4,
    ID: "RA-000777",
    Name: "ADCCF9DE03D61ADAB727BA8C26D4 04D95D3 0940375C025200FAA38ED98A",
    "Business Profile Owner": "Considine",
    Folder: "/ Audit / CBA / Folder",
    "Profile Type": "Supplier",
    Risk: [
      {
        isMaster: false,
        selected: false,
        Key: 4.1,
        ID: "RA-0041983",
        Name: "04D95D3 0940375C025200FAA38ED98A",
        "Risk Owner": "Lindgren",
        "Risk Taxonomy": "Lindgren",
        "Inherent Risk Rating": "Lindgren",
        "Overall Control Effectiveness Rating": "Low",
        "Residual Risk Rating": "Medium",
        "Residual L2 Approval Status": "Lindgren",
        "Residual L2 Date": "25-Oct-2021",
        "Risk Treatment": "Lindgren",
        Folder: "CBA / TRQ / FOLDER",
        Control: [
          {
            isMaster: false,
            selected: false,
            Key: 4.2,
            ID: "CT-051983",
            Name: "91C680FC5F8961F1B3BC5016 D36393A127D0B",
            "Control Owner": "Ajay",
            "Control Taxonomy Hierarchy": "North Laurineshire",
            "Control Type 3": "Jerde Spring",
            "Control Classification": "Arrangement",
            "CAP Testing Scope": "CAP Testing Scope",
            Folder: "Folder / Folder /Folder",
            "Control Effectiveness Rating": "Effective"
          },
          {
            isMaster: false,
            selected: false,
            Key: 4.21,
            ID: "CT-00651983",
            Name: "91C680FC5F8961F1B3BC5016 D36393A127D0B",
            "Control Owner": "333333",
            "Control Taxonomy Hierarchy": "North Laurineshire",
            "Control Type 3": "Jerde Spring",
            "Control Classification": "Arrangement",
            "CAP Testing Scope": "CAP Testing Scope",
            Folder: "Folder / Folder /Folder",
            "Control Effectiveness Rating": "Effective"
          }
        ]
      },
      {
        isMaster: false,
        selected: false,
        Key: 4.11,
        ID: "RA-0008909",
        Name: "Tiaxxxxxnna",
        "Risk Owner": "Lindgren",
        "Risk Taxonomy": "Lindgren",
        "Inherent Risk Rating": "Lindgren",
        "Overall Control Effectiveness Rating": "Low",
        "Residual Risk Rating": "Medium",
        "Residual L2 Approval Status": "Lindgren",
        "Residual L2 Date": "25-Nov-2021",
        "Risk Treatment": "Lindgren",
        Folder: "CBA / TRQ / FOLDER"
      }
    ]
  }
];
