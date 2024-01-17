import React from 'react'
import styles from '@/styles/Navbar.module.css'
// import styles from "./../../../styles/Navbar.module.css"

function Navbar() {
    return (
        <div class={`container-fluid p-0 ${styles.nav_bar}`}>
            <nav class={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}>
                <a href="index.html" class={`${styles.navbar_brand} px-lg-4 m-0`}>
                    <h1 class="m-0 display-4 text-uppercase text-white">Next-Coffee</h1>
                </a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav ml-auto p-4">
                        <a href="index.html" class="nav-item nav-link active">Home</a>
                        <a href="about.html" class="nav-item nav-link">About</a>
                        <a href="service.html" class="nav-item nav-link">Service</a>
                        <a href="menu.html" class="nav-item nav-link">Menu</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu text-capitalize">
                                <a href="reservation.html" class="dropdown-item">Reservation</a>
                                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                            </div>
                        </div>
                        <a href="contact.html" class="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar