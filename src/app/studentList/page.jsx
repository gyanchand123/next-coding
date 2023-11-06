import React from "react";
import Link from "next/link";

const StudentList = () => {
  const studentName = ["Anil", "Peter", "Sam", "Smith"];

  return (
    <div>
      <h1>StudentList</h1>
      <ul>
        {studentName.map((studentName, index) => (
          <li key={index}>
            <Link href={`/studentList/${studentName}`}>{studentName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
