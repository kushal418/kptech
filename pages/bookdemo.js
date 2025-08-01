import Layout from "@/components/layout/Layout"
import Link from "next/link"
import styles from "@/components/BookDemo.module.css" // import CSS module
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function BookDemo() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    date: '',
    field_type: '',
    source: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    course: form.course.value,
    date: form.date.value,
    field_type: form.field_type.value,
    source: form.source.value,
    message: form.message.value,
  };
try{
  const res = await fetch('/api/send-demo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  const result = await res.json();
  if (res.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Thank you!',
        text: 'Your demo has been booked successfully. We’ll get in touch with you soon.',
        confirmButtonColor: '#3085d6',
      });

      form.reset(); // Optional: Reset the form
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: result.message || 'Something went wrong. Please try again later.',
        confirmButtonColor: '#d33',
      });
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Failed to send request. Please check your internet or try again.',
      confirmButtonColor: '#d33',
    });
  }
};

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Book Free Demo">
                <div>
                    <section className="contact-area section-py-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="contact-form-wrap">
                                        <h4 className="title">Book Your Free Demo</h4>
                                      <form id="demo-form"  onSubmit={handleSubmit}>
                                            <div className="row">
                                                {/* Full Name */}
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input name="name" type="text" placeholder="Full Name *" required />
                                                    </div>
                                                </div>

                                                {/* Email */}
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input name="email" type="email" placeholder="Email Address *" required />
                                                    </div>
                                                </div>

                                                {/* Phone Number */}
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input name="phone" type="tel" placeholder="Phone Number *" required />
                                                    </div>
                                                </div>

                                                {/* Course Interested */}
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <select name="course" required className={styles.selectInput}>
                                                            <option value="">Select Course *</option>
                                                            <option>Full Stack Development</option>
                                                            <option>Data Science</option>
                                                            <option>Python with Django</option>
                                                            <option>React / Angular</option>
                                                            <option>DevOps / Cloud</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                {/* Preferred Date */}
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input name="date" type="date" placeholder="Preferred Date" />
                                                    </div>
                                                </div>
                                                {/* Preferred Date */}

                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <select name="field_type" required className={styles.selectInput}>
                                                            <option value="">Are you from Tech or Non-Tech background? *</option>
                                                            <option>Tech</option>
                                                            <option>Non-Tech</option>
                                                        </select>
                                                    </div>
                                                    </div>

                                                {/* How did you hear about us? */}
                                                <div className="col-md-12">
                                                    <div className="form-grp">
                                                        <select name="source" className={styles.selectInput}>
                                                            <option value="">How did you hear about us?</option>
                                                            <option>Google</option>
                                                            <option>Instagram</option>
                                                            <option>Facebook</option>
                                                            <option>Friend / Referral</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Message / Questions */}
                                            <div className="form-grp">
                                                <textarea
                                                    name="message"
                                                    placeholder="Any message or question? (Optional)"
                                                    className={styles.textareaInput}
                                                />
                                            </div>

                                            {/* Submit Button */}
                                            <button type="submit" className="btn">Book My Demo</button>
                                        </form>

                                        <p className="ajax-response mb-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                 
                </div>
            </Layout>
        </>
    )
}
