"use client";

import React from "react";
import Script from "next/script";

const SrciptComp = () => {
  return (
    <div>
      <h1>SrciptComp</h1>
      <p>get user location</p>
      <Script src="/location.js" onLoad={() => console.log("file loaded")} />
    </div>
  );
};

export default SrciptComp;
