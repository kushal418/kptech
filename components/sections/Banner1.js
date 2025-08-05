import Link from "next/link";

export default function Banner1() {
    return (
        <>
            <section className="banner-area banner-bg" data-background="/assets/img/banner/banner_bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner__content">
                                <img src="/assets/img/banner/bshape_01.png" alt="shape" className="shape alltuchtopdown" />
                                <img src="/assets/img/banner/bshape_02.png" alt="shape" className="shape" />
                                <span className="sub-title" data-aos="fade-right" data-aos-delay={200}>
                                    Learn. Build. Get Placed.
                                </span>
                                <h3 className="title tg-svg" data-aos="fade-right" data-aos-delay={400}>
                                    <span className="position-relative">
                                        <span className="svg-icon" id="svg-2" data-svg-icon="assets/img/icons/title_shape.svg" />
                                        KP&nbsp;Technologies
                                    </span><br />
                                    Your Path to IT Career Success
                                    </h3>
                                    <p data-aos="fade-right" data-aos-delay={600}>
                                    KP Technologies offers industry-ready IT training with live projects, expert mentorship, and 100% placement assistance. Join our online/offline programs at affordable fees and kickstart your career in Web, App, or Software Development.
                                </p>
                                <div className="banner__btn-wrap" data-aos="fade-right" data-aos-delay={800}>
                                    <div className="tg-button-wrap">
                                        <Link href="/courses" className="btn tg-svg">
                                            <span className="text">Explore Courses</span>
                                            <span className="svg-icon" id="svg-1" data-svg-icon="assets/img/icons/btn-arrow.svg" />
                                        </Link>
                                    </div>
                                    <div className="banner__phone">
                                        <i className="flaticon-phone-call" />
                                        <div className="number-info">
                                            <span>Have any questions?</span>
                                            <h6 className="number">
                                                <Link href="tel:9824996227">98249 96227</Link>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner__images">
                                <img src="/assets/img/banner/banner_img.png" alt="img" className="main-img" />
                                <img src="/assets/img/banner/bshape_03.png" alt="shape" className="shape" data-aos="fade-down-right" data-aos-delay={1200} />
                                <img src="/assets/img/banner/bshape_04.png" alt="shape" className="shape" data-aos="fade-right" data-aos-delay={1200} />
                                <img src="/assets/img/banner/bshape_05.png" alt="shape" className="shape" data-aos="fade-down-left" data-aos-delay={1200} />
                                <div className="banner__fact">
                                    <div className="banner__fact-item">
                                        <div className="icon">
                                            <i className="flaticon-group" />
                                        </div>
                                        <div className="info">
                                            <span>Total Students</span>
                                            <h4 className="count">150+</h4>
                                        </div>
                                    </div>
                                    <div className="banner__fact-item">
                                        <div className="icon">
                                            <i className="flaticon-graduation-cap" />
                                        </div>
                                        <div className="info">
                                            <span>Placement Success</span>
                                            <h4 className="count">100%</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
