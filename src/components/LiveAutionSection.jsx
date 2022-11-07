import { useState } from "react";
import { NFTItems } from "../constants/data";
import NFTItem from "./NFTItem";
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const LiveAutionSection = () => {
    const [items] = useState(NFTItems);

    return (
        <div className="py-10 bg-bg_secondary dark:bg-[#301B59] px-12">
            <h3 className="text-center text-gray-300 pb-1">Masterpieces</h3>
            <h1 className="text-center text-3xl font-bold dark:text-white">Live Auctions</h1>
            <div>
                <Swiper
                    className="mySwiper product-slider"
                    slidesPerView={1}
                    spaceBetween={10}
                    modules={[Pagination, Navigation, Autoplay]}
                    centeredSlides={true}
                    loop={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {
                        items.map((item, index) => {
                            return (
                                <SwiperSlide key={index} className="slide">
                                    <NFTItem key={index} info={item} />
                                </SwiperSlide>)
                        })
                    }

                </Swiper>
            </div>
        </div>
    )
}
export default LiveAutionSection;