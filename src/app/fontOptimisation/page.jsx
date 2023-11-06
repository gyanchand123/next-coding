import React from "react";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
  display: "swap",
});

const FontOptimise = () => {
  return (
    <div>
      <h1>FontOptimise</h1>
     {/*  <h1 style={{ fontFamily: "Roboto", fontWeight: 100 }}>
        chekcing font family
      </h1> */}
      <h1 className={roboto.className}>chekcing font family with nextjs</h1>
    </div>
  );
};

export default FontOptimise;
