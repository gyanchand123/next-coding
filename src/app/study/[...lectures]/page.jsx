import React from "react";

const Lecture = ({ params }) => {
  console.log(params);
  return (
    <>
      <h1>Lecture1</h1>
      <p>
        accessing dynamic url params:
        {params.lectures?.map((each, index) => (
          <span key={Math.random()}>{each}</span>
        ))}
      </p>
    </>
  );
};

export default Lecture;
