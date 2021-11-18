import React, { Component } from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import ReactNestedTable from ".";

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
      <Container>
        <Row>
          <Col sm={2}></Col>
          <Col sm={10}>
            <ReactNestedTable
              data={jsonData}
              headersMap={headersMap}
              onCellDisplay={onCellDisplay}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default NesteadTable;

const jsonData = [
  {
    isMaster: false,
    selected: false,
    id: 0,
    firstName: "Janae",
    lastName: "Considine",
    bs: "out-of-the-box strategize methodologies",
    catchPhrase: "Advanced tangible neural-net",
    companyName: "Greenholt, Smith and Brekke",
    detail: [{
      isMaster: false,
      selected: false,
      id: 0.1,
      firstName: "Tiaxxxxxnna",
      lastName: "Hyatt",
      address: [
        {
          isMaster: false,
          selected: false,
          id: 0.2,
          zipCode: "0351s0",
          city: "North Laurineshire",
          street: "Jerde Spring"
        },
        {
          isMaster: false,
          selected: false,
          id: 0.3,
          zipCode: "03510",
          city: "North Laurineshire",
          street: "Jerde Spring"
        }
      ],
      address1: {
          isMaster: false,
          selected: false,
          id: 0.4,
          zipCode: "0351s0",
          city: "North Laurineshire",
          street: "Jerde Spring"
        },
      email: "Niko95@hotmail.com",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/jagan123/128.jpg",
      list: ["repellat", "deserunt", "praesentium"]
    }, {
      isMaster: false,
      selected: false,
      id: 0.12,
      firstName: "Tiaxxxxxnna",
      lastName: "Hyatt",
    }]
  },
  {
    isMaster: false,
    selected: false,
    id: 1,
    firstName: "Kelvin",
    lastName: "Rogahn",
    bs: "efficient leverage deliverables",
    catchPhrase: "Extended zero defect monitoring",
    companyName: "Durgan - Monahan",
    detail: {
      isMaster: false,
      selected: false,
      id: 1.1,
      firstName: "Colt",
      lastName: "Christiansen",
      address: {
        isMaster: false,
        selected: false,
        id: 1.2,
        zipCode: "30922",
        city: "Everettberg",
        street: "Herman Lakes"
      },
      email: "Kris.Veum52@hotmail.com",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/Skyhartman/128.jpg",
      list: ["adipisci", "et", "voluptatem"]
    }
  },
  {
    isMaster: false,
    selected: false,
    id: 2,
    firstName: "Consuelo",
    lastName: "Schulist",
    bs: "scalable monetize platforms",
    catchPhrase: "Centralized explicit success",
    companyName: "Davis, Anderson and Mante",
    detail: {
      isMaster: false,
      selected: false,
      id: 2.1,
      firstName: "Leta",
      lastName: "McDermott",
      address: {
        isMaster: false,
        selected: false,
        id: 2.2,
        zipCode: "46540-8948",
        city: "East Veldaport",
        street: "Douglas Glens"
      },
      email: "Rodrick_Hodkiewicz@yahoo.com",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/noufalibrahim/128.jpg",
      list: ["vel", "veritatis", "occaecati"]
    }
  },
  {
    isMaster: false,
    selected: false,
    id: 3,
    firstName: "Khalil",
    lastName: "Nienow",
    bs: "magnetic iterate technologies",
    catchPhrase: "Fully-configurable analyzing monitoring",
    companyName: "Skiles Inc",
    detail: {
      isMaster: false,
      selected: false,
      id: 3.1,
      firstName: "Michale",
      lastName: "Jones",
      address: {
        isMaster: false,
        selected: false,
        id: 3.2,
        zipCode: "46856-0480",
        city: "Georgettemouth",
        street: "Ryley Haven"
      },
      email: "Edgardo22@gmail.com",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/claudioguglieri/128.jpg",
      list: ["unde", "earum", "aperiam"]
    }
  },
  {
    isMaster: false,
    selected: false,
    id: 4,
    firstName: "Gregg",
    lastName: "Renner",
    bs: "granular leverage infomediaries",
    catchPhrase: "Fundamental fault-tolerant task-force",
    companyName: "Schiller Group",
    detail: {
      isMaster: false,
      selected: false,
      id: 4.1,
      firstName: "Fred",
      lastName: "Parisian",
      address: {
        isMaster: false,
        selected: false,
        id: 4.2,
        zipCode: "33580",
        city: "New Mustafachester",
        street: "Stanley Extensions"
      },
      email: "Ashlynn_Hayes@hotmail.com",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/jehnglynn/128.jpg",
      list: ["et", "enim", "omnis"]
    }
  },
  {
    isMaster: false,
    selected: false,
    id: 5,
    firstName: "Armand",
    lastName: "Stiedemann",
    bs: "seamless exploit technologies",
    catchPhrase: "Sharable attitude-oriented forecast",
    companyName: "Simonis, Spencer and MacGyver",
    detail: {
      isMaster: false,
      selected: false,
      id: 5.1,
      firstName: "Madisyn",
      lastName: "Lindgren",
      address: {
        isMaster: false,
        selected: false,
        id: 5.2,
        zipCode: "58391-2167",
        city: "South Tobin",
        street: "O'Keefe Place"
      },
      email: "Myrtle_Gleichner30@hotmail.com",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/borantula/128.jpg",
      list: ["qui", "perspiciatis", "iusto"]
    }
  },
  {
    isMaster: false,
    selected: false,
    id: 6,
    firstName: "Pete",
    lastName: "Adams",
    bs: "end-to-end morph partnerships",
    catchPhrase: "Fundamental cohesive emulation",
    companyName: "Hansen - Kertzmann",
    detail: {
      isMaster: false,
      selected: false,
      id: 6.1,
      firstName: "Bertha",
      lastName: "Buckridge",
      address: {
        isMaster: false,
        selected: false,
        id: 6.2,
        zipCode: "25904",
        city: "Rippinport",
        street: "Henriette Grove"
      },
      email: "Christop.Ullrich58@hotmail.com",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/rachelreveley/128.jpg",
      list: ["tempore", "qui", "numquam"]
    }
  }
];
