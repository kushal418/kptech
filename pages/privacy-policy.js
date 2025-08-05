import Layout from "@/components/layout/Layout"
import { useState } from "react"

export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
   return (
  <>
  <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Privacy Policy – KP Technologies">
  <section className="faq-area section-py-120">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-9 col-lg-10">
          <div className="faq-wrap p-4 rounded-4 shadow-sm bg-light">
            <div className="single-faq mb-4">
              <h2 className="faq-title text-primary border-bottom pb-2 mb-3">Privacy Policy – KP Technologies</h2>
              <div className="faq-content">
                <p><strong>1. Introduction</strong><br />
                  At KP Technologies, we are committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, and protect your personal data when you engage with our website, services, or enroll in our training programs.
                </p>

                <p><strong>2. Information We Collect</strong><br />
                  We may collect the following types of personal data:
                  <ul className="mt-2 ps-4">
                    <li>Full Name</li>
                    <li>Email Address</li>
                    <li>Phone Number</li>
                    <li>Billing Information</li>
                    <li>Course Progress and Performance</li>
                    <li>Feedback or Survey Responses</li>
                  </ul>
                </p>

                <p><strong>3. How We Use Your Information</strong><br />
                  The data we collect is used to:
                  <ul className="mt-2 ps-4">
                    <li>Provide access to our online courses</li>
                    <li>Send course updates, announcements, and support emails</li>
                    <li>Enhance user experience and platform improvements</li>
                    <li>Issue certifications upon course completion</li>
                    <li>Maintain payment and financial records</li>
                  </ul>
                </p>

                <p><strong>4. Data Sharing and Disclosure</strong><br />
                  We do not sell or trade your personal information. We may share data with:
                  <ul className="mt-2 ps-4">
                    <li>Authorized instructors and mentors (for course-related communication only)</li>
                    <li>Payment gateways for secure transactions</li>
                    <li>Legal authorities if required by law</li>
                  </ul>
                </p>

                <p><strong>5. Data Security</strong><br />
                  We take appropriate measures to ensure the protection of your personal data against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <p><strong>6. Cookies & Tracking</strong><br />
                  Our website uses cookies to improve functionality and analyze user activity. You can manage your cookie preferences in your browser settings.
                </p>

                <p><strong>7. Your Rights</strong><br />
                  You have the right to:
                  <ul className="mt-2 ps-4">
                    <li>Access your personal information</li>
                    <li>Request correction or deletion of your data</li>
                    <li>Opt-out of promotional communications</li>
                  </ul>
                </p>

                <p><strong>8. Changes to This Policy</strong><br />
                  We may update this Privacy Policy periodically. Any changes will be posted on this page with a revised “Last Updated” date.
                </p>

                <p><strong>9. Contact Us</strong><br />
                  For questions regarding this Privacy Policy, you may contact us at <a href="mailto:support@kp-tech.in">support@kp-tech.in</a>.
                </p>

                <p className="mb-0"><strong>Last Updated:</strong> August 1, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</Layout>


  </>
);

}