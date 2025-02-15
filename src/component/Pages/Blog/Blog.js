import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import '../Home/Home.css';


const blogPosts = [
    {
      title: "15 Best Earning Apps For Students in 2025 – Earn ₹500 Daily",
      date: "February 12, 2025",
      image: "1.webp",
    },
    {
      title: "Best Games to Play Online in India in 2025",
      date: "February 10, 2025",
      image: "4.webp",
    },
    {
      title: "20+ Best Rummy Apps of All Rummy Apps in India To Earn Real Money",
      date: "February 10, 2025",
      image: "2.webp",
    },
    {
      title: "Top 7 Work-From-Home Jobs For Housewives in 2025",
      date: "February 7, 2025",
      image: "3.webp",
    },
    {
      title: "10 Best Ways to Earn Rs.1000 Real Money Daily in 2025",
      date: "February 6, 2025",
      image: "4.webp",
    },
    {
      title: "Top 10 Captcha Typing Jobs in India – Earn Money by Solving Captchas",
      date: "February 6, 2025",
      image: "1.webp",
    },
  ];
  
export default function Blog() {
    return (
        <>
            <div className='container position-relative'>
                <div className='row mx-5 my-5'>
                    <div className='col-md-12 my-5'>
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={30}
                            navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="./images/casino-banner-with-falling-gold-coins-aces-abstract-green-backgroun.jpg" className='img-fluid' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='./images/22_1.png' className='img-fluid'   />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='./images/1064079_OM6SIT0 (1).jpg' className='img-fluid' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='./images/15717681_SL_120319_25700_12 (1).jpg' className='img-fluid' />
                            </SwiperSlide>
                        </Swiper>

                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>

                    </div>
                </div>

            </div>
            <div className="container mt-4">
                <div className="row g-3">
                    {blogPosts.map((post, index) => (
                        <div className="col-md-6 d-flex" key={index}>
                            <div className="card mb-3 w-100 border-0">
                                <div className="row g-0">
                                    <div className="col-4">
                                        <img
                                            src={`/images/${post.image}`}
                                            alt={post.title}
                                            className="img-fluid rounded"
                                        />
                                    </div>
                                    <div className="col-8">
                                        <div className="card-body p-2">
                                            <h6 className="card-title fw-bold">{post.title}</h6>
                                            <p className="card-text text-muted">{post.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
