import data from "@/util/courses"
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter1() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".courses-active", {
                itemSelector: ".grid-item",
                percentPosition: true,
                masonry: {
                    columnWidth: ".grid-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        debugger
        setFilterKey(key)
    },
        []
    )
    const activeBtn = (value) => (value === filterKey ? "active" : "")
    return (
        <>
            <div className="section__title-wrap">
                <div className="row align-items-end">
                    <div className="col-lg-6">
                        <div className="section__title text-center text-lg-start">
                            <span className="sub-title">50+  Online Courses</span>
                            <h2 className="title tg-svg">Our <span className="position-relative"><span className="svg-icon" id="svg-4" data-svg-icon="assets/img/icons/title_shape.svg" />Top</span>
                                Courses</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                       <div className="courses__nav-active">
                            <button className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All Courses <span>New</span></button>
                            <button className={activeBtn("cat-full")} onClick={handleFilterKeyChange("cat-full")}>Full Stack Development</button>
                            <button className={activeBtn("cat-one")} onClick={handleFilterKeyChange("cat-one")}>Frontend Development</button>
                            <button className={activeBtn("cat-two")} onClick={handleFilterKeyChange("cat-two")}>Backend Development</button>
                            <button className={activeBtn("cat-mobile")} onClick={handleFilterKeyChange("cat-mobile")}>Mobile Development</button>
                            <button className={activeBtn("cat-db")} onClick={handleFilterKeyChange("cat-db")}>Database</button>
                            <button className={activeBtn("cat-design")} onClick={handleFilterKeyChange("cat-design")}>Designing</button>
                            </div>
                    </div>
                </div>
            </div>
            <div className="row courses-active row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                {data.map((item, i) => (
                    <div className={`col grid-item ${item.catcls}`} key={i}>
                        <div className="courses__item shine__animate-item">
                         <div className="courses__item-thumb">
                                    

                                    <Link href={`/course/${item.id}`} className="shine__animate-link">
                                        <img src={`/assets/img/courses/${item.logo}`} alt="img" />
                                    </Link>
                                    </div>

                            <div className="courses__item-content">
                              
                                <h5 className="title"><Link href={`/course/${item.id}`}>{item.courseTitle}</Link></h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
