'use client'

import Link from "next/link"
import { Button } from "./ui/button"

import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules"

import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import { Pagination } from 'swiper/modules'

import ProjectCard from "./ProjectCard"
import { useEffect } from "react"
import { projectData } from "./data/data"


const Work = () => {

  useEffect(() => { console.log(projectData) },[])
    
  return (
    // <section className="mb-[180px] lg:mb-[350px] xl:mb-[180px] ">
    <section>
        <div className="container mx-auto">
            <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col md:justify-center lg:justify-center justify-center md:items-center items-center lg:items-start xl:items-start">
                <h2 className="section-title mb-4">Latest Projects</h2>
                <p className="subtitle mb-8">
                    Kindly go through my projects using the navigation link below, Your feedback will be very much appreciated.
                </p>
                <Link href='/projects'>
                    <Button>All Projects</Button>
                </Link>
            </div>

            <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 lg:top-[138rem] xl:top-[138rem]">
                <Swiper 
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    className='h-[480px]'
                    pagination={{ clickable: 'true' }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    slidesPerView={1}
                    del
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1400: { slidesPerView: 2 },
                    }}
                    spaceBetween={30}
                >
                {/* <div> */}
                    {projectData.slice(0, 4).map((project, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ProjectCard project={project} />
                            </SwiperSlide>
                        )
                    })}
                {/* </div> */}
                </Swiper>
            </div>
        </div>
    </section> 
  )
}

export default Work