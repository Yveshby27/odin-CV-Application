import React, { Component } from "react";
import "../styles/Info.css";
class GeneralInformation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="general-info">
        <h1>General Information</h1>
        <div>
          <span className="title">Name:</span>
          <span className="value">
            {this.props.generalInfo.fn + " " + this.props.generalInfo.ln}
          </span>
        </div>
        <div>
          <span className="title">Email:</span>
          <span className="value">{this.props.generalInfo.email}</span>
        </div>
        <div>
          <span className="title">Phone Number:</span>
          <span className="value">{this.props.generalInfo.pn}</span>
        </div>
        <div>
          <span className="title">Age:</span>
          <span className="value">{this.props.generalInfo.age}</span>
        </div>
      </div>
    );
  }
}
export default GeneralInformation;
