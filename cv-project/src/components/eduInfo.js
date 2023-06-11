import React, { Component } from "react";
import "../styles/Info.css";
class EducationalXp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="edu-info">
        <h1>Educational Information</h1>
        <div>
          <span className="title">University:</span>
          <span className="value">{this.props.eduInfo.uniName}</span>
        </div>
        <div>
          <span className="title">Title of Study:</span>
          <span className="value">{this.props.eduInfo.titleOfStudy}</span>
        </div>
        <div>
          <span className="title">Date of Study:</span>
          <span className="value">{this.props.eduInfo.dateOfStudy}</span>
        </div>
      </div>
    );
  }
}
export default EducationalXp;
