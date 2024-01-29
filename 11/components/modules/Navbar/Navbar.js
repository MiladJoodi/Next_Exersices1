import React, { useState } from "react";
import {contacts} from "@/data/Contacts"
import ContactItem from './ContactItem'

function Navbar() {

  return (
    <nav
      class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
      id="navbarVertical"
    >
      <div class="container-fluid">
        {/* <!-- Toggler --> */}
        <button
          class="navbar-toggler ms-n2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarCollapse"
          aria-controls="sidebarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        {/* <!-- Brand --> */}
        <a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
          <img
            src="https://preview.webpixels.io/web/img/logos/clever-primary.svg"
            alt="..."
          />
        </a>
        {/* <!-- User menu (mobile) --> */}
        <div class="navbar-user d-lg-none">
          {/* <!-- Dropdown --> */}
          <div class="dropdown">
            {/* <!-- Toggle --> */}
            <a
              href="#"
              id="sidebarAvatar"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div class="avatar-parent-child">
                <img
                  alt="Image Placeholder"
                  src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  class="avatar avatar- rounded-circle"
                />
                <span class="avatar-child avatar-badge bg-success"></span>
              </div>
            </a>
            {/* <!-- Menu --> */}
            <div
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="sidebarAvatar"
            >
              <a href="#" class="dropdown-item">
                Profile
              </a>
              <a href="#" class="dropdown-item">
                Settings
              </a>
              <a href="#" class="dropdown-item">
                Billing
              </a>
              <hr class="dropdown-divider" />
              <a href="#" class="dropdown-item">
                Logout
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Collapse --> */}
        <div class="collapse navbar-collapse" id="sidebarCollapse">
          {/* <!-- Navigation --> */}
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="bi bi-house"></i> داشبورد
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="bi bi-bar-chart"></i> نمودار تغییرات
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex" href="#">
                <i class="bi bi-chat"></i> پیام ها
                <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center mr-0-important">
                  6
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="bi bi-bookmarks"></i> ذخیره شده ها
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="bi bi-people"></i> کاربران
              </a>
            </li>
          </ul>
          {/* <!-- Divider --> */}
          <hr class="navbar-divider my-1 opacity-20" />
          {/* <!-- Navigation --> */}
          <ul class="navbar-nav mb-md-4">
            <li>
              <div
                class="nav-link text-xs font-semibold text-uppercase text-muted ls-wide"
                href="#"
              >
                مخاطبین
                <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center mr-0-important">
                  {contacts.length}
                </span>
                
              </div>
            </li>
            {
              contacts.map(contact=>(
                <ContactItem {...contact} />
              ))
            }
          </ul>
          {/* <!-- Push content down --> */}
          <div class="mt-auto"></div>
          {/* <!-- User (md) --> */}
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="bi bi-person-square"></i> حساب کاربری
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="bi bi-box-arrow-left"></i>ورود
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="bi bi-box-arrow-right"></i>خروج
              </a>
            </li>
          </ul>
          <div class="my-5"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
