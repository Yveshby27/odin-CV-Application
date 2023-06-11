import React, { Component } from "react";
import PracticalXp from "./workInfo";
import EducationalXp from "./eduInfo";
import GeneralInformation from "./generalInfo";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      generalInfo: {
        fn: "",
        ln: "",
        email: "",
        pn: "",
        age: "",
      },
      eduInfo: {
        uniName: "",
        titleOfStudy: "",
        dateOfStudy: "",
      },
      workInfo: {
        companyName: "",
        positionTitle: "",
        dateOfStart: "",
        dateOfEnd: "",
      },
      showCV: false,
      showForm: true,
    };
    this.Submit = this.Submit.bind(this);
    this.edit = this.edit.bind(this);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.email = React.createRef();
    this.phoneNumber = React.createRef();
    this.age = React.createRef();
    this.uniName = React.createRef();
    this.titleOfStudy = React.createRef();
    this.dateOfStudy = React.createRef();
    this.companyName = React.createRef();
    this.positionTitle = React.createRef();
    this.dateOfStart = React.createRef();
    this.dateOfEnd = React.createRef();
  }

  edit() {
    this.setState({
      showCV: false,
      showForm: true,
    });
  }

  Submit(e) {
    this.setState({
      generalInfo: {
        fn: this.firstName.current.value,
        ln: this.lastName.current.value,
        email: this.email.current.value,
        pn: this.phoneNumber.current.value,
        age: this.age.current.value,
      },
      eduInfo: {
        uniName: this.uniName.current.value,
        titleOfStudy: this.titleOfStudy.current.value,
        dateOfStudy: this.dateOfStudy.current.value,
      },
      workInfo: {
        companyName: this.companyName.current.value,
        positionTitle: this.positionTitle.current.value,
        dateOfStart: this.dateOfStart.current.value,
        dateOfEnd: this.dateOfEnd.current.value,
      },
      showCV: true,
      showForm: false,
    });
    e.preventDefault();
  }

  render() {
    const { generalInfo, eduInfo, workInfo, showCV, showForm } = this.state;

    return (
      <div>
        <form
          id="cv-form"
          onSubmit={this.Submit}
          style={{ display: showForm ? "block" : "none" }}
        >
          <h3>General Information</h3>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              ref={this.firstName}
              type="text"
              id="firstName"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              ref={this.lastName}
              type="text"
              id="lastName"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="Email">Email</label>
            <input ref={this.email} type="email" id="Email" required></input>
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              ref={this.phoneNumber}
              type="text"
              id="phoneNumber"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              ref={this.age}
              type="number"
              id="age"
              min={1}
              max={120}
              required
            ></input>
          </div>
          <h3>Educational Information</h3>
          <div>
            <label htmlFor="uni-name">University Name</label>
            <input
              ref={this.uniName}
              type="text"
              id="uni-name"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="title-of-study">Title of Study</label>
            <input
              ref={this.titleOfStudy}
              type="text"
              id="title-of-study"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="date-of-study">Date of Study</label>
            <input
              ref={this.dateOfStudy}
              type="date"
              id="date-of-study"
              required
            ></input>
          </div>
          <h3>Work Information</h3>
          <div>
            <label htmlFor="work-name">Company Name</label>
            <input
              ref={this.companyName}
              type="text"
              id="uni-name"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="position-title">Position Title</label>
            <input
              ref={this.positionTitle}
              type="text"
              id="position-title"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="date-of-start">Date of start</label>
            <input
              ref={this.dateOfStart}
              type="date"
              id="date-of-start"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="date-of-end">Date of End</label>
            <input
              ref={this.dateOfEnd}
              type="date"
              id="date-of-end"
              required
            ></input>
          </div>

          <button type="submit" id="submit-button">
            Submit
          </button>
        </form>
        <div style={{ display: showCV ? "block" : "none" }}>
          <GeneralInformation generalInfo={generalInfo}></GeneralInformation>
          <EducationalXp eduInfo={eduInfo}></EducationalXp>
          <PracticalXp workInfo={workInfo}></PracticalXp>
          <button id="edit-button" onClick={this.edit}>
            Edit
          </button>
        </div>
      </div>
    );
  }
}

export default App;
