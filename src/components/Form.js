import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import StudentInputs from "./StudentInputs";

class Form extends React.Component {
  state = {
    name: "",
    section: "",
    students: [{ name: "" }]
  };

  render() {
    const { students } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
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
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button onClick={this.addStudent}>Add Student</button>
          <label
            css={css`
              display: block;
            `}
            htmlFor="student"
          >
            Student Name
          </label>
          <StudentInputs handleChange={this.handleChange} students={students} />
        </div>
        <div>
          <button type="submit">Store Values</button>
        </div>
      </form>
    );
  }

  handleChange = event => {
    if (event.target.className === "name") {
      const students = [...this.state.students];
      students[event.target.dataset.id][event.target.className] =
        event.target.value;
      this.setState({ students });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  addStudent = event => {
    this.setState(prevState => ({
      students: [...prevState.students, { name: "" }]
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    // localStorage.setItem(this.state);
  };
}

export default Form;
