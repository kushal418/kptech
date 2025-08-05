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
    <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Find Answers Here">
      <section className="faq-area section-py-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10">
              <div className="faq-wrap">
                <div className="single-faq mb-4">
                  <h4 className="faq-title">Refund Policy – KP Technologies</h4>
                  <div className="faq-content">
                    <p><strong>Refund Eligibility:</strong><br />
                      Students are eligible to request a refund <strong>within the first 30 days</strong> (1 month) of course enrollment.
                      <br /><br />
                      <strong>No refund requests will be accepted after the completion of 1 month</strong> from the enrollment date, under any circumstances.
                    </p>
                    <p><strong>Non-Refundable Cases Include:</strong><br />
                      - Course access granted for more than 30 days.<br />
                      - Course materials downloaded or extensively accessed.<br />
                      - Certification issued.<br />
                      - Participation in live sessions or project submissions post the first month.
                    </p>
                    <p><strong>Refund Process:</strong><br />
                      To request a refund, email us at <a href="mailto:support@kp-tech.in">support@kp-tech.in</a> with your full name, enrollment date, and reason for the request.
                      <br />
                      Refunds will be processed to the original payment method within 7–10 business days after approval.
                    </p>
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