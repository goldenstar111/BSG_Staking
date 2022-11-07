import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ProductData } from '../constants/data';

const ProductBox = ({ product: { id, img_1, img_2 }, themeToggling }) => {
  // console.log('productBox ===========', themeToggling)
  return (
    <div className={"p-3 mb-16 d-flex justify-content-center"}>
      <div className='flex justify-between'>
        <img src={themeToggling ? img_2 : img_1} />
      </div>
    </div>
  )
}

const CompanySlider = ({ themeToggling }) => {
  // console.log('companySlider --------', themeToggling);
  return (
    <section className='p-2 pb-8 lg:px-16 text-center dark:bg-[#2F1B58] dark:text-gray-200'>
      <p className='text-sm py-4'>Stellar Partners</p>
      <h2 className='text-3xl'>Built on Stellar</h2>
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
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {
            ProductData.map((product) => (
              <SwiperSlide key={product.id} className="slide">
                <ProductBox product={product} themeToggling={themeToggling} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default CompanySlider