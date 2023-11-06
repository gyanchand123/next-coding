"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import "./login.css";
import outside from "@/styleFolder/style.module.css";

const Login = () => {
  const router = useRouter();
  return (
    <div>
      <h2 className="heading">Login</h2>
      <Link href="/" className={outside.mainheading}>
        go to home page
      </Link>
      <button onClick={() => router.push("/login/loginStudent")}>
        go to login student page
      </button>
      <button onClick={() => router.push("/login/loginTeacher")}>
        go to login teacher page
      </button>
    </div>
  );
};

export default Login;
