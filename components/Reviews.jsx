'use client'

import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules"

import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import { Pagination } from 'swiper/modules'

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"
import Image from "next/image"

import { reviewData } from "./data/data";

const Reviews = () => {
  return (
    // <section className="mb-12 xl:mb-32">
    <section>
        <div className="container mx-auto w-[80%]">
            <h2 className="section-title mb-12 text-center mx-auto">
                Reviews
            </h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                // navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1400: { slidesPerView: 2 },
                }}
                spaceBetween={30}
                className="h-[350px]"
            >
                {reviewData.map((person, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                                <CardHeader className="p-0 mb-10 flex flex-row gap-x-4">
                                    <div className='flex items-center gap-x-4'>
                                        <Image 
                                            src={person.avatar}
                                            width={70}
                                            height={70}
                                            alt=''
                                            priority
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <CardTitle>{person.name}</CardTitle>
                                        <p>{person.job}</p>
                                    </div>
                                </CardHeader>
                                <CardDescription className='text-lg text-muted-foreground'>
                                    {person.review}
                                </CardDescription>
                            </Card>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    </section>
  )
}

export default Reviews