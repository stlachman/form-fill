import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      section: "",
      students: [],
      student: ""
    };
  }

  render() {
    const { name, section, student } = this.state;
    return (
      <section
        css={css`
          margin: 0 auto;
          max-width: 300px;
        `}
      >
        <h1>Attendance</h1>
        <div>
          <form>
            <div>
              <label
                css={css`
                  display: block;
                `}
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                css={css`
                  margin-bottom: 10px;
                `}
                name="name"
                id="name"
                placeholder="Captain Marvel"
                type="text"
                value={name.value}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label
                css={css`
                  display: block;
                `}
                htmlFor="section"
              >
                Section
              </label>
              <input
                css={css`
                  margin-bottom: 10px;
                `}
                name="section"
                id="section"
                placeholder="WEB22"
                type="text"
                value={section.value}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label
                css={css`
                  display: block;
                `}
                htmlFor="student"
              >
                Student Name
              </label>
              {this.state.students.map((student, index) => {
                return (
                  <div>
                    <input
                      onChange={this.handleChange}
                      key={index}
                      type="text"
                      name="student"
                      value={student}
                    />
                  </div>
                );
              })}
              <button type="button" onClick={this.addStudent}>
                Add Student
              </button>
            </div>
            <div>
              <button>Store Values</button>
            </div>
          </form>
        </div>
      </section>
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  addStudent = event => {
    this.setState({ students: [...this.state.students, ""] });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { student, students } = this.state;
  };
}

export default App;
