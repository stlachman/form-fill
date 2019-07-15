import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Form from "./components/Form";
import "./App.css";

const App = () => {
  return (
    <section
      css={css`
        margin: 0 auto;
        max-width: 300px;
      `}
    >
      <h1>Attendance</h1>
      <Form />
    </section>
  );
};

export default App;
