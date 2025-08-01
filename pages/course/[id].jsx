import VideoPopup from "@/components/elements/VidepPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import courses from "../../data/courses.json"

const CourseSingle = () => {
    const router = useRouter()
    const [course, setCourse] = useState({})
    const id = router.query.id

    useEffect(() => {
        if (!id) <h1>Loading...</h1>
        else setCourse(courses.find((item) => item.id == id))
        return () => { }
    }, [id])

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
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
            <Layout headerStyle={3} footerStyle={1}>
                <section className="courses__breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="courses__breadcrumb-content">
                                    <Link href="#" className="category">Graphic Design</Link>
                                    <h3 className="title">{course.courseTitle}</h3>
                                    <p>Master industry-relevant skills through hands-on projects, expert mentorship, and real-time training – all in just 6 months at KP Technologies.</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="courses-details-area section-pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-8">
                                <div className="courses__details-wrapper">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <button className={activeIndex === 1 ? "nav-link active" : "nav-link"}>Course Information</button>
                                        </li>
                                        {/* <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <button className={activeIndex === 2 ? "nav-link active" : "nav-link"}>Reviews</button>
                                        </li> */}
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className={activeIndex === 1 ? "tab-pane active" : "tab-pane"}>
                                            <div className="courses__details-content">
                                                <p>{course.decription1}</p>
                                                <p>{course.decription3}</p>
                                                <p>{course.decription4}</p>
                                               <div className="courses__details-inner">
                                                    <h3 className="title">What Will You Learn?</h3>
                                                    <p>This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or lipsum as it is sometimes known, iaws dumm text used in laying out print, graphic or web designsm dolor sit amet.</p>
                                                    <div className="event-details-list">
                                                        <ul className="list-wrap">
                                                           <li><i className="fas fa-check-circle" />{course.learn1}</li>
                                                                <li><i className="fas fa-check-circle" />{course.learn2}</li>
                                                                <li><i className="fas fa-check-circle" />{course.learn3}</li>
                                                                <li><i className="fas fa-check-circle" />{course.learn4}</li>
                                                                <li><i className="fas fa-check-circle" />{course.learn5}</li>
                                                                <li><i className="fas fa-check-circle" />{course.learn6}</li>
                                                                <li><i className="fas fa-check-circle" />{course.learn7}</li>
                                                                <li><i className="fas fa-check-circle" />{course.learn8}</li>
                                                                <li><i className="fas fa-check-circle" />{course.learn9}</li>
                                                                <li><i className="fas fa-check-circle" />{course.learn10}</li>
                                                                <li><i className="fas fa-check-circle" />{course.learn11}</li>
                                                                <li><i className="fas fa-check-circle" />{course.learn12}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                           {/* <div className="courses__details-curriculum">
                                                <h4 className="title">Curriculum</h4>
                                                <div className="accordion" id="accordionExample">

                                                    <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                                        <button className={isActive.key === 1 ? "accordion-button collapsed" : "accordion-button"}>
                                                        Month 1: Foundations of HTML5 & CSS3
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                        <ul className="list-wrap">
                                                            <li className="course-item"><span>What is Web Development?</span></li>
                                                            <li className="course-item"><span>HTML5 Syntax and Semantic Elements</span></li>
                                                            <li className="course-item"><span>Lists, Tables, and Forms</span></li>
                                                            <li className="course-item"><span>Multimedia: Audio, Video, and Images</span></li>
                                                            <li className="course-item"><span>CSS3 Basics: Selectors, Properties, and Styling</span></li>
                                                            <li className="course-item"><span>Box Model and Layout Techniques</span></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>

                                                    <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                                        <button className={isActive.key === 2 ? "accordion-button collapsed" : "accordion-button"}>
                                                        Month 2: Responsive Design Techniques
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                        <ul className="list-wrap">
                                                            <li className="course-item"><span>Advanced CSS: Shadows, Gradients, and Animations</span></li>
                                                            <li className="course-item"><span>Flexbox Layout: Concepts and Practical Examples</span></li>
                                                            <li className="course-item"><span>CSS Grid Layout: Creating Complex Layouts</span></li>
                                                            <li className="course-item"><span>Media Queries and Breakpoints</span></li>
                                                            <li className="course-item"><span>Mobile-First Responsive Design</span></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>

                                                    <div className="accordion-item">
                                                    <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                                        <button className={isActive.key === 3 ? "accordion-button collapsed" : "accordion-button"}>
                                                        Month 3: Projects, Tools & Deployment
                                                        </button>
                                                    </h2>
                                                    <div className={isActive.key === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                        <div className="accordion-body">
                                                        <ul className="list-wrap">
                                                            <li className="course-item"><span>HTML5 Forms and Validations</span></li>
                                                            <li className="course-item"><span>Chrome DevTools for Debugging</span></li>
                                                            <li className="course-item"><span>Version Control with Git and GitHub</span></li>
                                                            <li className="course-item"><span>Live Project: Build a Responsive Website</span></li>
                                                            <li className="course-item"><span>Hosting Your Site on GitHub or Netlify</span></li>
                                                            <li className="course-item"><span>Portfolio Creation and Interview Preparation</span></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>

                                                </div>
                                                </div> */}

                                          
                                        </div>
                                        {/* <div className={activeIndex === 2 ? "tab-pane active" : "tab-pane"}>
                                            <div className="courses__details-reviews">
                                                <h4 className="title">Student Ratings  Reviews</h4>
                                                <div className="course-rate">
                                                    <div className="course-rate__summary">
                                                        <div className="course-rate__summary-value">4.8</div>
                                                        <div className="course-rate__summary-stars">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <div className="course-rate__summary-text">
                                                            Total 2 Rating
                                                        </div>
                                                    </div>
                                                    <div className="course-rate__details">
                                                        <div className="course-rate__details-row">
                                                            <div className="course-rate__details-row-star">
                                                                5
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="course-rate__details-row-value">
                                                                <div className="rating-gray" />
                                                                <div className="rating" style={{ width: '80%' }} title="80%" />
                                                                <span className="rating-count">2</span>
                                                            </div>
                                                        </div>
                                                        <div className="course-rate__details-row">
                                                            <div className="course-rate__details-row-star">
                                                                4
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="course-rate__details-row-value">
                                                                <div className="rating-gray" />
                                                                <div className="rating" style={{ width: '50%' }} title="50%" />
                                                                <span className="rating-count">1</span>
                                                            </div>
                                                        </div>
                                                        <div className="course-rate__details-row">
                                                            <div className="course-rate__details-row-star">
                                                                3
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="course-rate__details-row-value">
                                                                <div className="rating-gray" />
                                                                <div className="rating" style={{ width: '0%' }} title="0%" />
                                                                <span className="rating-count">0</span>
                                                            </div>
                                                        </div>
                                                        <div className="course-rate__details-row">
                                                            <div className="course-rate__details-row-star">
                                                                2
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="course-rate__details-row-value">
                                                                <div className="rating-gray" />
                                                                <div className="rating" style={{ width: '0%' }} title="0%" />
                                                                <span className="rating-count">0</span>
                                                            </div>
                                                        </div>
                                                        <div className="course-rate__details-row">
                                                            <div className="course-rate__details-row-star">
                                                                1
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="course-rate__details-row-value">
                                                                <div className="rating-gray" />
                                                                <div className="rating" style={{ width: '0%' }} title="0%" />
                                                                <span className="rating-count">0</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="course-reviews">
                                                    <h4 className="course-review-head">Reviews (01)</h4>
                                                    <ul className="list-wrap">
                                                        <li>
                                                            <div className="review-author">
                                                                <img src="/assets/img/blog/comment01.png" alt="img" />
                                                            </div>
                                                            <div className="review-author-info">
                                                                <div className="review-stars-rated">
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <h5 className="user-name">Admin <span className="date">August 5, 2023</span></h5>
                                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu meature areawtyt totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="course-review-form">
                                                    <h4 className="course-review-head">Write a review</h4>
                                                    <form action="#">
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <input type="text" placeholder="Your Name" />
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <input type="email" placeholder="Your Email" />
                                                            </div>
                                                        </div>
                                                        <input type="text" placeholder="Review Title" />
                                                        <div className="course-form-rating">
                                                            <span>Select Rating:</span>
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <textarea placeholder="Type Comments" />
                                                        <button className="btn">Submit your Review</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <aside className="courses__details-sidebar">
                                    <div className="event-widget">
                                        <div className="thumb">
                                            <img src={`/assets/img/courses/${course.logo ? course.logo:"course_thumb02.jpg"}`} alt="img" />
                                            <VideoPopup />
                                        </div>
                                        <div className="event-cost-wrap">
                                            <h4 className="price"><strong>Costs:</strong>$25.00 <span>$84.99</span></h4>
                                            <Link href="#" className="btn">Enroll This Now</Link>
                                            <div className="event-information-wrap">
                                                <h6 className="title">Include This Course</h6>
                                                <ul className="list-wrap">
                                                    <li><i className="flaticon-timer" />Duration <span>{course.duration}</span></li>
                                                    <li><i className="flaticon-file" />Estimated Seat <span>250</span></li>
                                                    <li><i className="flaticon-bars" />Laguage <span>English / Hindi</span></li>
                                                    <li><i className="flaticon-flash" />Category <span>{course.category}</span></li>
                                                    <li><i className="flaticon-share" />Share
                                                        <ul className="list-wrap event-social">
                                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                            <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                   {/* <div className="blog-widget">
                                    <h4 className="widget-title">Related Courses</h4>
                                    {course.map((courses) => (
                                    <div className="rc-post-item" key={courses.id}>
                                        <div className="rc-post-thumb">
                                        <Link href={courses.link}>
                                            <img src={courses.image} alt={courses.title} />
                                        </Link>
                                        </div>
                                        <div className="rc-post-content">
                                        <h4 className="title">
                                            <Link href={courses.link}>{courses.title}</Link>
                                        </h4>
                                        <span className="price">{courses.price}</span>
                                        </div>
                                    </div>
                                    ))}
                                </div> */}
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}

export default CourseSingle
