import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="footer-bg" data-bg-color="var(--tg-common-color-dark)">
                <div className="footer__top-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer-widget">
                                    <div className="footer__about">
                                        <div className="footer__logo logo">
                                            <Link href="/"><img src="/assets/img/logo/secondary_logo.png" alt="img" /></Link>
                                        </div>
                                        
                                        <ul className="list-wrap m-0 p-0 ">
                                            <li className="address">New Maninagar Ramol Ahmedabad,Gujarat</li>
                                            <li className="number">+91 9824996227</li>
                                            <li className="number">+91 9537269599</li>
                                            <li className="socials">
                                                <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                <Link href="#"><i className="fab fa-twitter" /></Link>
                                                <Link href="#"><i className="fab fa-whatsapp" /></Link>
                                                <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                                <Link href="#"><i className="fab fa-youtube" /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer-widget widget_nav_menu">
                                    <h4 className="fw-title">Resources</h4>
                                    <ul className="list-wrap">
                                        <li><Link href="/about-us">About</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                        <li><Link href="/contact">Help Center</Link></li>
                                        <li><Link href="/refund-policy">Refund</Link></li>
                                        <li><Link href="#">Conditions</Link></li>
                                        <li><Link href="/">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer-widget widget_nav_menu">
                                    <h4 className="fw-title">Courses</h4>
                                    <ul className="list-wrap">
                                        <li><Link href="/course/24">Mearn Stack</Link></li>
                                        <li><Link href="/course/13">Asp.Net</Link></li>
                                        <li><Link href="/course/6">Angular</Link></li>
                                        <li><Link href="/course/23">Android</Link></li>
                                        <li><Link href="/course/19">Figma UI/UX</Link></li>
                                        <li><Link href="/course/14">Java-Spring Boot</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer-widget">
                                    <h4 className="fw-title">Working Hours</h4>
                                    <div className="footer__working-list">
                                        <div className="footer__working-item">
                                            <span className="day">Mon - Sat</span>
                                            <span className="time">10:00 AM - 8:00 PM</span>
                                        </div>
                                        <div className="footer__working-item">
                                            <span className="day">Sunday</span>
                                            <span className="time">off</span>
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright__wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="copyright__text">
                                    <p>Copyright © {new Date().getFullYear()} KP Technologies. All rights reserved.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="copyright__menu">
                                    <ul className="list-wrap d-flex flex-wrap justify-content-center justify-content-lg-end">
                                        <li><Link href="#">Privacy Policy</Link></li>
                                        <li><Link href="#">Terms  Conditions</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
