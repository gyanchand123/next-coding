"use client";
import React from "react";
import { useState } from "react";

const Page = () => {
  const [file, setFile] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(file);
  };
  return (
    <div>
      <h2>upload form</h2>
      <form onSubmit={onSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <button type="submit">Upload image</button>
      </form>
    </div>
  );
};

export default Page;
