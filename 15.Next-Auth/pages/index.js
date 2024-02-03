import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn, faSignOut, faBars } from "@fortawesome/free-solid-svg-icons";

function Index() {

  const signOutHandler = (event)=>{
      event.preventDefault()

      signOut()
      alert("SignOut Successfully")
  }

  return (
    <div className="container">
      <aside className="sidebar">
        <h3 className="sidebar-title">Sidebar</h3>

        <ul className="sidebar-links">
          <>
            {/* User is login */}
            <li>
              <Link href="/dashboard">
                <span>
                  <FontAwesomeIcon icon={faBars} />
                </span>
                Dashboard
              </Link>
            </li>
            <li onClick={signOutHandler}>
              <Link href="#">
                <span>
                  <FontAwesomeIcon icon={faSignOut} />
                </span>
                Logout
              </Link>
            </li>
            {/* User is login */}
          </>
          <>
            {/* User not login */}
            <li>
              <Link href="/signin">
                <span>
                  <FontAwesomeIcon icon={faSignIn} />
                </span>
                Sign in
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <span>
                  <FontAwesomeIcon icon={faSignIn} />
                </span>
                Sign up
              </Link>
            </li>
            {/* User not login */}
          </>
        </ul>
        <img className="wave" src="/Images/wave.svg" alt="wave" />
      </aside>
      <main className="main"></main>
    </div>
  );
}

export default Index;
