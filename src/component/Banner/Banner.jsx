import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css'

import BannerFirst from './BannerFirst';
import BannerSec from './BannerSec';
import BannerThird from './BannerThird';

const Banner = () => {





    return (
        <div className='h-[700px] md:h-[600px] lg:h-[600px]'>
          {
             <Swiper
             modules={[Navigation, Pagination, Scrollbar, A11y]}
             spaceBetween={50}
             slidesPerView={1}
             navigation
             pagination={{ clickable: true }}
             scrollbar={{ draggable: true }}
           
            
           >
             <SwiperSlide><BannerFirst></BannerFirst></SwiperSlide>
             <SwiperSlide><BannerSec></BannerSec></SwiperSlide>
             <SwiperSlide><BannerThird></BannerThird></SwiperSlide>
           
           </Swiper>
          }
  

        </div>
    );
};

export default Banner;