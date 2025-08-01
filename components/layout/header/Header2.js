import Link from "next/link"
import MobileMenu from "../MobileMenu"
import { Menu } from '@headlessui/react'
export default function Header2({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <div id="header-fixed-height" />
            <header className="tg-header__style-two">
                <div id="sticky-header" className={`tg-header__area ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="tg-flaticon-menu-1" /></div>
                                <div className="tgmenu__wrap">
                                    <nav className="tgmenu__nav">
                                        <div className="logo">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                              <ul className="navigation" style={{ margin: '0px 0px 0px 340px' }}>
                                          <li className="active">
                                            <Link href="#">Home</Link>
                                          </li>

                                          {/* Courses */}
                                          <li className="menu-item-has-children">
                                        <Link href="#">Courses</Link>
                                        <ul className="sub-menu" style={{ minWidth: "290px", position: "absolute", zIndex: 999 }}>

                                          {/* Frontend Development */}
                                          <li className="">
                                            <Link href="/courses">
                                              Frontend Development
                                              <span style={{ color: "gray", fontSize: "20px", float: "right", marginTop: "2px" }}>{'>'}</span>
                                            </Link>
                                            <ul className="sub-menu" style={{ minWidth: "240px", left: "100%", top: "0", position: "absolute" }}>
                                              <li><Link href="/html-css">HTML5 / CSS3</Link></li>
                                              <li><Link href="/javascript">JavaScript</Link></li>
                                              <li><Link href="/react">React.js</Link></li>
                                              <li><Link href="/angular">Angular</Link></li>
                                              <li><Link href="/vue">Vue.js</Link></li>
                                              <li><Link href="/tailwind">Tailwind CSS</Link></li>
                                            </ul>
                                          </li>

                                          {/* Backend Development */}
                                          <li className="">
                                            <Link href="/courses">
                                              Backend Development
                                              <span style={{ color: "gray", fontSize: "20px", float: "right", marginTop: "2px" }}>{'>'}</span>
                                            </Link>
                                            <ul className="sub-menu" style={{ minWidth: "240px", left: "100%", top: "0", position: "absolute" }}>
                                              <li><Link href="/node">Node.js</Link></li>
                                              <li><Link href="/php">PHP</Link></li>
                                              <li><Link href="/dotnet">ASP.NET Core</Link></li>
                                              <li><Link href="/java">Java</Link></li>
                                              <li><Link href="/python">Python (Django/Flask)</Link></li>
                                              <li><Link href="/golang">Golang</Link></li>
                                            </ul>
                                          </li>

                                          {/* Database */}
                                          <li className="">
                                            <Link href="/courses">
                                              Database
                                              <span style={{ color: "gray", fontSize: "20px", float: "right", marginTop: "2px" }}>{'>'}</span>
                                            </Link>
                                            <ul className="sub-menu" style={{ minWidth: "240px", left: "100%", top: "0", position: "absolute" }}>
                                              <li><Link href="/mysql">MySQL</Link></li>
                                              <li><Link href="/mongodb">MongoDB</Link></li>
                                              <li><Link href="/sqlserver">MS SQL Server</Link></li>
                                              <li><Link href="/oracle">Oracle</Link></li>
                                              <li><Link href="/firebase">Firebase</Link></li>
                                            </ul>
                                          </li>

                                          {/* Cloud */}
                                          <li className="">
                                            <Link href="/courses">
                                              Cloud
                                              <span style={{ color: "gray", fontSize: "20px", float: "right", marginTop: "2px" }}>{'>'}</span>
                                            </Link>
                                            <ul className="sub-menu" style={{ minWidth: "240px", left: "100%", top: "0", position: "absolute" }}>
                                              <li><Link href="/aws">AWS</Link></li>
                                              <li><Link href="/azure">Azure</Link></li>
                                              <li><Link href="/gcp">Google Cloud</Link></li>
                                              <li><Link href="/docker">Docker</Link></li>
                                              <li><Link href="/kubernetes">Kubernetes</Link></li>
                                              <li><Link href="/devops">DevOps</Link></li>
                                            </ul>
                                          </li>

                                          {/* Digital Marketing */}
                                          <li className="">
                                            <Link href="/courses">
                                              Digital Marketing
                                              <span style={{ color: "gray", fontSize: "20px", float: "right", marginTop: "2px" }}>{'>'}</span>
                                            </Link>
                                            <ul className="sub-menu" style={{ minWidth: "240px", left: "100%", top: "0", position: "absolute" }}>
                                              <li><Link href="/seo">SEO</Link></li>
                                              <li><Link href="/sem">SEM</Link></li>
                                              <li><Link href="/smm">Social Media Marketing</Link></li>
                                              <li><Link href="/email">Email Marketing</Link></li>
                                              <li><Link href="/affiliate">Affiliate Marketing</Link></li>
                                            </ul>
                                          </li>

                                          {/* Designing */}
                                          <li className="">
                                            <Link href="/courses">
                                              Designing
                                              <span style={{ color: "gray", fontSize: "20px", float: "right", marginTop: "2px" }}>{'>'}</span>
                                            </Link>
                                            <ul className="sub-menu" style={{ minWidth: "240px", left: "100%", top: "0", position: "absolute" }}>
                                              <li><Link href="/uiux">UI/UX</Link></li>
                                              <li><Link href="/figma">Figma</Link></li>
                                              <li><Link href="/photoshop">Photoshop</Link></li>
                                              <li><Link href="/illustrator">Illustrator</Link></li>
                                              <li><Link href="/canva">Canva</Link></li>
                                            </ul>
                                          </li>

                                        

                                        </ul>
                                      </li>


                                          {/* Pages */}
                                          {/* <li className="menu-item-has-children">
                                            <Link href="#">Pages</Link>
                                            <ul className="sub-menu">
                                              <li><Link href="/about-us">About Us</Link></li>
                                              <li><Link href="/instructors">Our Instructors</Link></li>
                                              <li><Link href="/instructor-details">Instructor Details</Link></li>
                                              <li><Link href="/mentors">Our Mentors</Link></li>
                                              <li><Link href="/events">Our Events</Link></li>
                                              <li><Link href="/events-details">Event Details</Link></li>
                                              <li><Link href="/faq">Asked Question</Link></li>
                                              <li><Link href="/404">404 Page</Link></li>
                                              <li><Link href="/contact">Contact</Link></li>
                                            </ul>
                                          </li> */}

                                          {/* Shop */}
                                          <li className="">
                                            <Link href="about-us">About us</Link>
                                          
                                          </li>
                                          <li className="">
                                            <Link href="contact">Contact us</Link>
                                          
                                          </li>

                                          {/* Blog */}
                                          {/* <li className="menu-item-has-children">
                                            <Link href="#">Blog</Link>
                                            <ul className="sub-menu">
                                              <li><Link href="/blog-grid">Blog Grid</Link></li>
                                              <li><Link href="/blog">Blog Standard</Link></li>
                                              <li><Link href="/blog-details">Blog Details</Link></li>
                                            </ul>
                                          </li> */}
                                        </ul>
                                        </div>
                                        <div className="tgmenu__categories d-none d-md-block">
                                            <Menu as="div" className="dropdown">
                                                <Menu.Button as="button" className="dropdown-toggle">
                                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 12H6.85714V6.85714H12V12ZM5.14286 12H0V6.85714H5.14286V12ZM12 5.14286H6.85714V0H12V5.14286ZM5.14286 5.14286H0V0H5.14286V5.14286Z" fill="currentcolor" />
                                                    </svg>
                                                    Browse Categories
                                                </Menu.Button>
                                                <Menu.Items as="ul" className="dropdown-menu d-block" aria-labelledby="dropdownMenuButton1">
                                                    <li><Link className="dropdown-item" href="/courses">Business</Link></li>
                                                    <li><Link className="dropdown-item" href="/courses">Data Science</Link></li>
                                                    <li><Link className="dropdown-item" href="/courses">Art  Design</Link></li>
                                                    <li><Link className="dropdown-item" href="/courses">Marketing</Link></li>
                                                    <li><Link className="dropdown-item" href="/courses">Finance</Link></li>
                                                </Menu.Items>
                                            </Menu>
                                        </div>
                                        <div className="tgmenu__action">
                                            <ul className="list-wrap">
                                                <li className="mini-cart-icon">
                                                    <Link href="/shop" className="cart-count">
                                                        <img src="/assets/img/icons/cart.svg" alt="cart" />
                                                        <span className="mini-cart-count">0</span>
                                                    </Link>
                                                </li>
                                                <li className="header-phone d-none d-lg-block d-xl-none d-xxl-block"><Link href="/tel:993-00-67777"><i className="flaticon-phone-call" />
                                                    993-00-67777</Link></li>
                                                <li className="header-btn login-btn"><Link href="/contact" className="btn">Log in</Link>
                                                </li>
                                                <li className="header-btn"><Link href="/contact" className="btn">Try For Free</Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="tgmobile__menu">
                                    <nav className="tgmobile__menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="tg-flaticon-close-1" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="tgmobile__search">
                                            <form action="#">
                                                <input type="text" placeholder="Search here..." />
                                                <button><i className="fas fa-search" /></button>
                                            </form>
                                        </div>
                                        <div className="tgmobile__menu-outer">
                                            <MobileMenu />
                                        </div>
                                        <div className="tgmenu__action">
                                            <ul className="list-wrap">
                                                <li className="header-btn login-btn"><Link href="#" className="btn">Log in</Link></li>
                                                <li className="header-btn"><Link href="#" className="btn">Try For Free</Link></li>
                                            </ul>
                                        </div>
                                        <div className="social-links">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="tgmobile__menu-backdrop" onClick={handleMobileMenu} />
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
