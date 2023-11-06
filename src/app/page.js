"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigate = (path) => {
    router.push(path);
  };

  return (
    <main>
      <h1>Home Page</h1>
      <Link href="/about"> about page</Link>
      <br />
      <br />
      <Link href="/login"> login page</Link>
      <br />
      <br />
      <button onClick={() => navigate("/about")}> go to about page</button>
      <button onClick={() => navigate("/login")}> go to Login page</button>
      <br />
      <br />
      <Link href="/about/aboutCollege">go to about college page</Link>
      <Link href="/about/aboutStudent">go to about student page</Link>
    </main>
  );
}
