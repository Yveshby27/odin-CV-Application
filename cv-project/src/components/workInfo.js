import React, { Component } from "react";
import "../styles/Info.css";
class PracticalXp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="work-info">
        <h1>Work Information</h1>
        <div>
          <span className="title">Company Name:</span>
          <span className="value">{this.props.workInfo.companyName}</span>
        </div>
        <div>
          <span className="title">Position Title:</span>
          <span className="value">{this.props.workInfo.positionTitle}</span>
        </div>
        <div>
          <span className="title">Date of Start:</span>
          <span className="value">{this.props.workInfo.dateOfStart}</span>
        </div>
        <div>
          <span className="title">Date of End:</span>
          <span className="value">{this.props.workInfo.dateOfEnd}</span>
        </div>
      </div>
    );
  }
}
export default PracticalXp;
