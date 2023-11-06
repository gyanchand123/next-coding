import React from "react";
import { redirect } from "next/navigation";

const Page = () => {
  redirect("/");
  return (
    <div>
      <h2>page should be redirected to home page</h2>
    </div>
  );
};

export default Page;
