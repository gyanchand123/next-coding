import React from "react";
import { API_BASE_URL } from "../../envVariable/config";

const Page = () => {
  console.log(process.env.SERVER_PASSWORD);
  return (
    <div>
      <h2>testing development VS production phase with environment variable</h2>
      {process.env.NODE_ENV == "development" ? (
        <h2>we are in the development phase</h2>
      ) : (
        <h2> we are in the development phase</h2>
      )}

      <h2>selecting the right url base on the build type</h2>
      <span>show url : {API_BASE_URL}</span>
    </div>
  );
};

export default Page;
