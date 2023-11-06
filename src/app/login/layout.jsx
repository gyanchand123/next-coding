"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const pathname = usePathname();
  return (
    <div>
      {pathname !== "/login/loginTeacher" ? (
        <ul className="login-menu">
          <li>login navbar</li>
          <li>
            <Link href="/login">login page</Link>
          </li>
          <li>
            <Link href="/login/loginStudent">login student page</Link>
          </li>
          <li>
            <Link href="/login/loginTeacher">login teacher page</Link>
          </li>
          <li>
            <Link href="/productlistclient">go to productList client page</Link>
          </li>
          <li>
            <Link href="/productlistserver">go to productList server page</Link>
          </li>
        </ul>
      ) : (
        <Link href="/login">go to the home page</Link>
      )}
      {children}
    </div>
  );
};

export default Layout;
