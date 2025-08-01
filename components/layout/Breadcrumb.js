import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            <section className="breadcrumb-area breadcrumb-bg" data-background="/assets/img/bg/breadcrumb_bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-content">
                                <h3 className="title">{breadcrumbTitle}</h3>
                                <nav className="breadcrumb">
                                    
                                    
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
