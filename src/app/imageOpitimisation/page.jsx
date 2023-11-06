import React from "react";
import Image from "next/image";
import profile from "../../../public/vercel.svg";

const ImageOptimize = () => {
  return (
    <div>
      <h1>ImageOptimize</h1>
      <Image src={profile} height={500} width={500} />
      <Image
        src="https://plus.unsplash.com/premium_photo-1698846880685-4b8b54c28ad3?auto=format&fit=crop&q=80&w=1113&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={200}
        height={200}
        alt='nothing is impossible'
      />
    </div>
  );
};

export default ImageOptimize;
