import Link from "next/link"
import Swal from 'sweetalert2';
import { useState } from 'react';

export default function Categories1() {
       const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Sending...',
      text: 'Please wait while we send your message.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'We have received your message. We’ll contact you soon.',
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // reset form
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed to Send',
          text: result.message || 'Something went wrong.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong. Please try again later.',
      });
    }
  };
    return (
        <>
            <section className="categories-area section-py-130">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-8 col-md-10">
                            <div className="categories__title-wrap text-center text-xl-start">
                                <div className="section__title">
                                    <span className="sub-title">Unique online courses</span>
                                    <h2 className="title tg-svg">Get Trained.<span className="position-relative"><span className="svg-icon" id="svg-5" data-svg-icon="assets/img/icons/title_shape.svg" />Get Hired.</span>
                                    </h2>
                                </div>
                                <p>Learn the most in-demand tech skills with hands-on projects and expert guidance.
                                    Our job-oriented training helps you land interviews and succeed in top companies.</p>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-9">
                                    <div className="contact-form-wrap">
                                        <h4 className="title">Inquiry Now</h4>
                                          <form id="contact-form" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input name="name" type="text" placeholder="Name *" required onChange={handleChange} />
                                                </div>
                                                </div>
                                                <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input name="email" type="email" placeholder="E-mail *" required onChange={handleChange} />
                                                </div>
                                                </div>
                                                <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input name="phone" type="number" placeholder="Phone *" required onChange={handleChange} />
                                                </div>
                                                </div>
                                                <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input name="subject" type="text" placeholder="Your Subject *" required onChange={handleChange} />
                                                </div>
                                                </div>
                                            </div>
                                            <div className="form-grp">
                                                <textarea name="message" placeholder="Message" required onChange={handleChange} />
                                            </div>
                                            <button type="submit" className="btn">Send Message</button>
                                            {status && <p style={{ marginTop: '10px' }}>{status}</p>}
                                            </form>
                                        <p className="ajax-response mb-0" />
                                    </div>
                        </div>
                    </div>
                </div>
                <div className="categories__shapes">
                    <div className="categories__shapes-item rotateme"><img src="/assets/img/objects/categories_shape01.png" alt="shape" /></div>
                    <div className="categories__shapes-item" data-aos="fade-up"><img src="/assets/img/objects/categories_shape02.png" alt="shape" /></div>
                </div>
            </section>
        </>
    )
}
