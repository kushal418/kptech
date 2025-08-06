import React from 'react';
import Image from 'next/image';
import bannerImg from '@/public/assets/img/banner/banner_img.png';
import Link from 'next/link';

const Banner1 = () => {
  return (
    <section className="banner-area banner-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-12 col-lg-6">
            <div className="banner__content text-center text-lg-start">
              <h2 className="title">
                <span>KP Technologies</span> <br className="d-block d-lg-none" />
                 <br />
                Your Path to IT Career Success
              </h2>
              <p>
                KP Technologies offers industry-ready IT training with live projects, expert mentorship, and 100% placement assistance. Join our online programs at affordable fees and kickstart your career in Web, App, or Software Development.
              </p>
              <Link href="/contact" className="btn btn-primary mt-3">
                Book Free Demo Class
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="banner__images text-center text-lg-end mt-4 mt-lg-0">
              <Image src={bannerImg} alt="Banner" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner1;
