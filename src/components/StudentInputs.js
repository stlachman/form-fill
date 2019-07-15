import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const StudentInputs = props => {
  return props.students.map((student, idx) => {
    const studentId = `student-${idx}`;
    return (
      <div key={idx}>
        <label
          css={css`
            margin-bottom: 10px;
          `}
          htmlFor={studentId}
          id={`student-${idx}`}
        >
          {`Student #${idx + 1}`}
        </label>
        <input
          onChange={props.handleChange}
          type="text"
          name="student"
          data-id={idx}
          className="name"
        />
      </div>
    );
  });
};

export default StudentInputs;
