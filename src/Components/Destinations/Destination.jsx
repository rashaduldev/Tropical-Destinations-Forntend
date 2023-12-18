// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../../public/assets/card-image.png'
import img2 from '../../../public/assets/card-image-1.png'
import img3 from '../../../public/assets/card-image-2.png'
import img4 from '../../../public/assets/card-image-3.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";


const Destination = () => {
  return (
    <div className="mx-10">
      <h1 className="text-5xl font-bold text-center lg:text-left my-9 lg:ml-16">Our Destinations</h1>
      <div>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
        //   pagination={{
        //     type: "fraction",
        //   }}
        //   navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card w-80 h-full bg-base-100 shadow-xl">
              <figure  className="h-full">
                <img
               
                  src={img1}
                  alt="Harvard University"
                />
              </figure>
              <div className="">
                <h2 className="card-title">Harvard University</h2>
               <div className="flex items-center justify-between mx-5">
               <p className="text-[16px]">Cambridge, Massachusetts, UK</p>
                <BsThreeDots />
               </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-80 h-full bg-base-100 shadow-xl">
              <figure  className="h-full">
                <img
               
                  src={img2}
                  alt="Harvard University"
                />
              </figure>
              <div className="">
                <h2 className="card-title">Oxford University</h2>
               <div className="flex items-center justify-between mx-5">
               <p className="text-[16px]">Oxford, England</p>
                <BsThreeDots />
               </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-80 h-full bg-base-100 shadow-xl">
              <figure  className="h-full">
                <img
               
                  src={img3}
                  alt="Harvard University"
                />
              </figure>
              <div className="">
                <h2 className="card-title">Stanford University</h2>
               <div className="flex items-center justify-between mx-5">
               <p className="text-[16px]">Stanford, California</p>
                <BsThreeDots />
               </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-80 h-full bg-base-100 shadow-xl">
              <figure  className="h-full">
                <img
               
                  src={img4}
                  alt="Harvard University"
                />
              </figure>
              <div className="">
                <h2 className="card-title">Nanyang Technological University</h2>
               <div className="flex items-center justify-between mx-5">
               <p className="text-[16px]">Nanyang Ave, Singapura</p>
                <BsThreeDots />
               </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex items-center justify-center text-xl gap-5">
        <FaChevronLeft />
           <h1> 1/4</h1>
           <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Destination;
