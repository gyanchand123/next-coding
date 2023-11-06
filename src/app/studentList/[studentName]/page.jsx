import React from "react";
import Link from "next/link";

const StudentDetails = ({ params }) => {
  return (
    <div>
      <h2>StudentDetails</h2>
      <p>student name:{params.studentName}</p>
      <Link href="/login">go to home page</Link>
    </div>
  );
};

export default StudentDetails;
