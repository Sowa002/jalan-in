import React from "react"
import { Link } from "@inertiajs/react"

const Navbar = ({ user }) => {
    return (
        <div>
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
        {/* Template Main CSS File */}
        <link href="assets/css/style.css" rel="stylesheet" />
      
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            {/* <h1><a href="index.html">Flexor</a></h1> */}
            {/* Uncomment below if you prefer to use an image logo */}
            <a href="/"><img src="assets/img/Logo-biru.png" alt="" className="img-fluid" /></a>
          </div>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto " href="#portfolio">Daftar Tempat</a></li>
              <li><a className="nav-link scrollto" href="/#faq">Daftar Makanan</a></li>
            </ul>
            <li class="dropdown"><a href="#"><span>Login</span> <i class="bi bi-chevron-down"></i></a>
            <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52">
                        {!user ?
                            <>
                                <li><Link href={route('login')} as="button">Login</Link></li>
                                <li><Link href={route('register')} as="button">Register</Link></li>
                            </>
                            :
                            <>
                                <li>
                                    <Link href={route('dashboard')} as="button" className="justify-between">
                                        Dashboard
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link href={route('logout')} method="post" as="button">Profile</Link></li>
                                <li><Link href={route('logout')} method="post" as="button">Logout</Link></li>
                            </>
                        }
                    </ul>
          </li>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>{/* .navbar */}
        </div>
        </header>
    </div>
            
            
    )
}

export default Navbar