import React, { useEffect, useState } from "react";
import { contacts } from "@/data/Contacts";
import ContactItem from "./ContactItem";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar({ username }) {

  const router = useRouter()

  const [isLoginIn, setIsLoginIn] = useState(true);
  const [otherUser, setOtherUser] = useState(false);
  const [adminUser, setAdminUser] = useState(false);

  useEffect(() => {
    const userAuth = async () => {
      const res = await fetch("/api/auth/me");
      if (res.status === 200) {
        setIsLoginIn(true);
      }
      console.log(res);
    };
    userAuth();
  }, []);

  const showUserMenu = () => {
    setIsLoginIn(true);
    setOtherUser(false);
    setAdminUser(false);
  };
  const showOtherUser = () => {
    setIsLoginIn(false);
    setOtherUser(true);
    setAdminUser(false);
  };

  const showAdminUser = () => {
    setIsLoginIn(false);
    setOtherUser(false);
    setAdminUser(true);
  };

  const signOut = async ()=>{
    const res = await fetch("/api/auth/signout")
    const data = await res.json()

    if(res.status === 200){
      router.replace("/")
    }
  }

  return (
    <nav
      className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
      id="navbarVertical"
    >
      <div className="container-fluid">
        {/* <!-- Toggler --> */}
        <button
          className="navbar-toggler ms-n2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarCollapse"
          aria-controls="sidebarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <!-- Brand --> */}

        <a
          className="navbar-brand py-lg-2 px-lg-6 me-0 flex-center-all brand-logo"
          href="#"
        >
          <img src="/images/Brand-Logo.png" alt="..." />
          <span className="online-circle"></span>
        </a>
        <span className="profile-username">{username.firstname}</span>
        {/* <span className="profile-username">نام کاربر</span> */}

        <div
          style={{ textAlign: "center" }}
          className="btn-group-sm"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            onClick={showUserMenu}
            type="button"
            class="btn btn-outline-secondary"
          >
            کاربر
          </button>
          <button
            onClick={showAdminUser}
            type="button"
            class="btn btn-outline-secondary"
          >
            مدیر
          </button>
          <button
            onClick={showOtherUser}
            type="button"
            class="btn btn-outline-secondary"
          >
            مهمان
          </button>
        </div>

        {/* <!-- User menu (mobile) --> */}
        <div className="navbar-user d-lg-none">
          {/* <!-- Dropdown --> */}
          <div className="dropdown">
            {/* <!-- Toggle --> */}
            <a
              href="#"
              id="sidebarAvatar"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="avatar-parent-child">
                <img
                  src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  className="avatar avatar- rounded-circle"
                />
                <span className="avatar-child avatar-badge bg-success"></span>
              </div>
            </a>
            {/* <!-- Menu --> */}
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="sidebarAvatar"
            >
              <a href="#" className="dropdown-item">
                پروفایل
              </a>
              <a href="#" className="dropdown-item">
                تنظیمات
              </a>
              <a href="#" className="dropdown-item">
                حساب کاربری
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                خروج
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Collapse --> */}
        <div className="collapse navbar-collapse" id="sidebarCollapse">
          {/* <!-- Navigation --> */}
          {isLoginIn || adminUser ? (
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-house"></i> داشبورد
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-bar-chart"></i> نمودار تغییرات
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex" href="#">
                  <i className="bi bi-chat"></i> پیام ها
                  <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center mr-0-important persianNumber">
                    6
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-bookmarks"></i> ذخیره شده ها
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-people"></i> کاربران
                </a>
              </li>
            </ul>
          ) : null}

          {/* <!-- Divider --> */}
          <hr className="navbar-divider my-1 opacity-20" />
          {isLoginIn ? (
            <ul className="navbar-nav mb-md-4">
              <li>
                <div
                  className="nav-link text-xs font-semibold text-uppercase text-muted ls-wide"
                  href="#"
                >
                  مخاطبین
                  <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center mr-0-important persianNumber">
                    {contacts.length}
                  </span>
                </div>
              </li>
              {contacts.map((contact) => (
                <div key={contact.id}>
                  <ContactItem {...contact} />
                </div>
              ))}
            </ul>
          ) : null}
          {/* <!-- Navigation --> */}

          {/* <!-- Push content down --> */}
          {/* <div className="mt-auto"></div> */}
          {/* <!-- User (md) --> */}
          <ul className="navbar-nav">
            {isLoginIn || adminUser ? (
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-person-square"></i> حساب کاربری
                </a>
              </li>
            ) : null}

            {otherUser ? (
              <>
                <li className="nav-item">
                  <Link href="/signin" className="nav-link">
                    <i className="bi bi-box-arrow-left"></i>ورود
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/signup" className="nav-link">
                    <i className="bi bi-box-arrow-left"></i>ثبت نام
                  </Link>
                </li>
              </>
            ) : null}

            {adminUser ? (
              <li className="nav-item">
                <Link href="/p-admin" className="nav-link">
                  <i className="bi bi-box-arrow-right"></i>پنل مدیریت
                </Link>
              </li>
            ) : null}

            {isLoginIn || adminUser ? (
              <li className="nav-item">
                <Link onClick={signOut} href="#" className="nav-link">
                  <i className="bi bi-box-arrow-right"></i>خروج
                </Link>
              </li>
            ) : null}
          </ul>
          <div className="my-5"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
