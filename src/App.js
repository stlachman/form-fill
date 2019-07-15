import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      section: "",
      students: []
    };
  }

  render() {
    const { name, section } = this.state;
    return (
      <section>
        <h1>Attendance</h1>
        <div>
          <form>
            <div>
              <label htmlFor="name">Your Name</label>
              <input
                name="name"
                id="name"
                placeholder="Captain Marvel"
                type="text"
                value={name.value}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="section">Section</label>
              <input
                name="section"
                id="section"
                placeholder="WEB22"
                type="text"
                value={section.value}
                onChange={this.handleChange}
              />
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
}

export default App;
