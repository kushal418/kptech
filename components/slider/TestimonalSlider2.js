import Slider from "react-slick"

const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
        <button type="button" className="slick-prev">
            <i className="flaticon-chevron"></i>
        </button>
    ),
    nextArrow: (
        <button type="button" className="slick-next">
            <i className="flaticon-chevron"></i>
        </button>
    ),
}

export default function TestimonalSlider2() {
    return (
        <>
           <Slider {...settings} className="testimonial-active">
  <div className="testimonial__item">
    <div className="testimonial__quote">
      <img src="/assets/img/icons/quote02.png" alt="icon" />
    </div>
    <div className="testimonial__rating">
      <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
    </div>
    <p>“ Coming from a B.Com background, I never imagined I’d be writing code! KP Technologies made it possible with easy-to-understand training and real-time projects. Now I’m placed at an IT company as a junior developer. ”</p>
    <div className="testimonial__avatar">
      <h4 className="name">Priya Mehta</h4>
      <span className="designation">B.Com Graduate</span>
    </div>
  </div>

  <div className="testimonial__item">
    <div className="testimonial__quote">
      <img src="/assets/img/icons/quote02.png" alt="icon" />
    </div>
    <div className="testimonial__rating">
      <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
    </div>
    <p>“ KP Technologies helped me transition from a BVA degree into the tech world. The instructors are super helpful and focus on practical learning. I’ve now built my own portfolio website and freelance as a UI designer. ”</p>
    <div className="testimonial__avatar">
      <h4 className="name">Rohan Verma</h4>
      <span className="designation">BVA Graduate</span>
    </div>
  </div>

  <div className="testimonial__item">
    <div className="testimonial__quote">
      <img src="/assets/img/icons/quote02.png" alt="icon" />
    </div>
    <div className="testimonial__rating">
      <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
    </div>
    <p>“ I was a B.Tech final year student when I joined KP Technologies. The live project experience was exactly what I needed. Within 3 months, I landed an internship with a top MNC. Thank you for shaping my career path! ”</p>
    <div className="testimonial__avatar">
      <h4 className="name">Akash Singh</h4>
      <span className="designation">B.Tech (CSE)</span>
    </div>
  </div>

  <div className="testimonial__item">
    <div className="testimonial__quote">
      <img src="/assets/img/icons/quote02.png" alt="icon" />
    </div>
    <div className="testimonial__rating">
      <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
    </div>
    <p>“ I had zero knowledge about IT, coming from a commerce stream. KP Technologies gave me the confidence to enter tech with their beginner-friendly curriculum. I’m now working in digital marketing! ”</p>
    <div className="testimonial__avatar">
      <h4 className="name">Sneha Patel</h4>
      <span className="designation">B.Com Student</span>
    </div>
  </div>

  <div className="testimonial__item">
    <div className="testimonial__quote">
      <img src="/assets/img/icons/quote02.png" alt="icon" />
    </div>
    <div className="testimonial__rating">
      <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
    </div>
    <p>“ I joined KP Technologies to upskill during my BVA studies. Their UI/UX design training was very hands-on. I got selected for a design internship right after the course! Highly recommended. ”</p>
    <div className="testimonial__avatar">
      <h4 className="name">Kunal Desai</h4>
      <span className="designation">BVA Student</span>
    </div>
  </div>

  <div className="testimonial__item">
    <div className="testimonial__quote">
      <img src="/assets/img/icons/quote02.png" alt="icon" />
    </div>
    <div className="testimonial__rating">
      <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
    </div>
    <p>“ As a B.Tech graduate, I struggled to find a job. KP Technologies offered personalized mentorship, mock interviews, and helped build my GitHub profile. I got placed as a backend developer in just 4 months. ”</p>
    <div className="testimonial__avatar">
      <h4 className="name">Mehul Rathi</h4>
      <span className="designation">B.Tech (IT)</span>
    </div>
  </div>
</Slider>

        </>
    )
}
