import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Contact() {
    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Contact With Us">
                <div>
                    <section className="contact-area section-py-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="contact-info-wrap">
                                        <h2 className="title">Keep In Touch With Us</h2>
                                        <p>Join us to start your journey from learning to earning in the tech world.</p>
                                        <ul className="list-wrap">
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-pin-1" />
                                                </div>
                                                <div className="content">
                                                    <p>New Maninagar Ramol  <br /> Ahmedabad,Gujarat</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-phone-call" />
                                                </div>
                                                <div className="content">
                                                    <Link href="tel:0123456789">+91 9824996227</Link>
                                                    <Link href="tel:0123456789">+91 9537269599</Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-email" />
                                                </div>
                                                <div className="content">
                                                    <Link href="mailto:info@gmail.com">enroll@kp-tech.in</Link>
                                                    <Link href="mailto:info@gmail.com">inquiry@kp-tech.in</Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="contact-form-wrap">
                                        <h4 className="title">Get in Touch</h4>
                                        <form id="contact-form" action="assets/mail.php" method="POST">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input name="name" type="text" placeholder="Name *" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input name="email" type="email" placeholder="E-mail *" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input name="phone" type="number" placeholder="Phone *" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input name="subject" type="text" placeholder="Your Subject *" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-grp">
                                                <textarea name="message" placeholder="Message" required />
                                            </div>
                                            <button type="submit" className="btn">Send Message</button>
                                        </form>
                                        <p className="ajax-response mb-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* contact-area-end */}
                    {/* contact-map */}
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.1242035474033!2d72.63804232509055!3d22.98245977920194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8621bd8ac79d%3A0x702d6675ca572133!2sSADGURU%20SANIDHYA%2C%20Janta%20Nagar%2C%20Ahmedabad%2C%20Gujarat%20380038!5e0!3m2!1sen!2sin!4v1753986480098!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>

            </Layout>
        </>
    )
}