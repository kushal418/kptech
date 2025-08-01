import Link from "next/link"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
        
            <header>
                <div id="sticky-header" className={`tg-header__area transparent-header ${scroll ? "sticky-menu" : ""}`}>
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
                                              <li><Link href="/course/1">HTML5 / CSS3</Link></li>
                                              <li><Link href="/course/2 ">JavaScript</Link></li>
                                              <li><Link href="/course/4">React.js</Link></li>
                                              <li><Link href="/course/6">Angular</Link></li>
                                              <li><Link href="/course/7">Vue.js</Link></li>
                                            </ul>
                                          </li>

                                          {/* Backend Development */}
                                          <li className="">
                                            <Link href="/courses">
                                              Backend Development
                                              <span style={{ color: "gray", fontSize: "20px", float: "right", marginTop: "2px" }}>{'>'}</span>
                                            </Link>
                                            <ul className="sub-menu" style={{ minWidth: "240px", left: "100%", top: "0", position: "absolute" }}>
                                              <li><Link href="/course/11">Node.js</Link></li>
                                              <li><Link href="/course/16">PHP</Link></li>
                                              <li><Link href="/course/13">ASP.NET Core</Link></li>
                                              <li><Link href="/course/14">Java</Link></li>
                                              <li><Link href="/course/15">Python (Django/Flask)</Link></li>
                                            </ul>
                                          </li>

                                          {/* Database */}
                                          <li className="">
                                            <Link href="/courses">
                                              Database
                                              <span style={{ color: "gray", fontSize: "20px", float: "right", marginTop: "2px" }}>{'>'}</span>
                                            </Link>
                                            <ul className="sub-menu" style={{ minWidth: "240px", left: "100%", top: "0", position: "absolute" }}>
                                              <li><Link href="/course/17">MySQL</Link></li>
                                              <li><Link href="/course/18">MongoDB</Link></li>
                                            </ul>
                                          </li>
                                          {/* Designing */}
                                          <li className="">
                                            <Link href="/courses">
                                              Designing
                                              <span style={{ color: "gray", fontSize: "20px", float: "right", marginTop: "2px" }}>{'>'}</span>
                                            </Link>
                                            <ul className="sub-menu" style={{ minWidth: "240px", left: "100%", top: "0", position: "absolute" }}>
                                              <li><Link href="/course/19">Figma</Link></li>
                                              <li><Link href="/course/20">Adobe XD</Link></li>
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

                                         <div className="tgmenu__action">
                                            <ul className="list-wrap">
                                                <li className="header-phone d-none d-lg-block d-xl-none d-xxl-block"><Link href="/tel:+919824996227"><i className="flaticon-phone-call" />
                                                    98-24-996227</Link></li>
                                                <li className="header-btn login-btn"><Link href="/contact" className="btn">Log in </Link>
                                                </li>
                                                <li className="header-btn"><Link href="/bookdemo" className="btn">Book Demo</Link></li>
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
                                        <div className="tgmobile__menu-outer">
                                            <MobileMenu />
                                        </div>
                                        <div className="tgmenu__action">
                                            <ul className="list-wrap">
                                                <li className="header-btn login-btn"><Link href="#" className="btn">Log in</Link></li>
                                                <li className="header-btn"><Link href="/bookdemo" className="btn">Book Demo</Link></li>
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
