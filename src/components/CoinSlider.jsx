import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { coinInfo } from '../constants/data';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import Carousel from "react-multi-carousel";

const CoinBox = ({ coin: { coinImg, coinName, amount, highTime, highTimeAmount, lowTime, lowTimeAmount, trendImg, currency1, currency2 } }) =>
(
  <div className="swiper-container bg-gray-100 p-6 text-gray-700 rounded-2xl m-4 mb-16">
    {/* Row ==> 1 */}
    <div className='flex justify-between'>
      <div className='flex gap-4'>
        <img src={coinImg} alt="" className='w-12' />
        <div>
          <p>{currency1} | {currency2}</p>
          <p>{coinName}</p>
        </div>
      </div>
      {/* <div className='flex gap-4 text-fuchsia-500 text-lg'>
        <span>Change</span>
        <i className='fas fa-angle-down pt-1'></i>
      </div> */}
    </div>
    {/* Row ==> 2 */}
    <div className='flex items-center justify-between pt-2'>
      <h2 className='text-2xl font-bold'>${amount}</h2>
      <img src={trendImg} alt="" className='w-16' />
    </div>
    {/* Row ==> 3 */}
    <div className='flex items-center justify-between pt-4'>
      <div className='text-left'>
        <p className='text-lg'>{highTime}</p>
        <p className='text-1xl font-bold'>$ {highTimeAmount}</p>
      </div>
      <div className='text-left'>
        <p className='text-lg'>{lowTime}</p>
        <p className='text-1xl font-bold'>$ {lowTimeAmount}</p>
      </div>
    </div>
  </div>
)

const CoinSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    bigdesktop: {
      breakpoint: { max: 3000, min: 1800 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1800, min: 1400 },
      items: 4
    },
    smalldesktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 720 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 720, min: 0 },
      items: 1
    }
  };

  return (
    <section className='p-6 pb-14 text-center dark:bg-[#2F1B58] dark:text-gray-200'>
      <p className='text-sm py-4'>Latest Exchanges</p>
      <h2 className='text-3xl'>Deals Updated</h2>
      {/* <Swiper
        className="py-8"
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
          720: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1420: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1800: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {
          coinInfo.map(coin => (
            <SwiperSlide key={coin.id}>
              <CoinBox coin={coin} />
            </SwiperSlide>
          ))
        }
      </Swiper> */}
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        // customTransition="all 2.5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {
          coinInfo.map(coin => (
            <SwiperSlide key={coin.id}>
              <CoinBox coin={coin} />
            </SwiperSlide>
          ))
        }
      </Carousel>
    </section>
  )
}

export default CoinSlider