import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Special() {
  return (
    <section className="latest w-full pb-10">
      <div className="pb-4 lg:mx-36 mx-8 mt-6">
        <h2 className="lg:text-2xl text-[32px] lg:leading-[1.14286] leading-[1.125] font-semibold lg:tracking-[.007em] tracking-[.004em] text-[#1d1d1f]">
          Special stores.
          <span className="lg:text-2xl text-[32px] lg:leading-[1.14286] leading-[1.125] font-semibold lg:tracking-[.007em] tracking-[.004em] text-[#6e6e73]">
            Exclusive savings for businesses, school, and more.
          </span>
        </h2>
      </div>
      <div className="h-full overflow-x-hidden relative w-full pb-6">
        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className="z-30"
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <Link
              href="/"
              className="flex h-[29.41176rem] lg:mr-3 lg:translate-x-36 my-4"
            >
              <div className="w-[23.52941rem] h-[29.41176rem] flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,.16)] scale-card">
                <div className="w-full">
                  <Image
                    className="w-full h-full object-cover block"
                    width={400}
                    height={500}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-education-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1627664746000"
                  />
                </div>
                <div className="absolute left-0 p-[30px] w-[20rem]">
                  <h3 className="text-xs leading-[1.33337] font-semibold tracking-[-.01em] pb-2 w-[204px] text-[#6e6e73] mb-[.4em]">
                    EDUCATION
                  </h3>
                  <p className="text-[28px] text-black leading-[1.14286] font-semibold">
                    Save on Mac or iPad with education pricing.
                    <sup className="text-xs">1</sup>
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="/"
              className="flex h-[29.41176rem] lg:mr-3 lg:translate-x-36 my-4"
            >
              <div className="w-[23.52941rem] h-[29.41176rem] flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,.16)] scale-card">
                <div className="w-full">
                  <Image
                    className="w-full h-full object-cover block"
                    width={400}
                    height={500}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-business-202209?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1660927783133"
                  />
                </div>
                <div className="absolute left-0 p-[30px] w-[20rem]">
                  <h3 className="text-xs leading-[1.33337] font-semibold tracking-[-.01em] pb-2 w-[204px] text-[#6e6e73] mb-[.4em]">
                    BUSINESS
                  </h3>
                  <p className="text-[28px] text-white leading-[1.14286] font-semibold">
                    From enterprise to small business, we’ll work with you.
                    <sup className="text-xs">1</sup>
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="/"
              className="flex h-[29.41176rem] lg:mr-3 lg:translate-x-36 my-4"
            >
              <div className="w-[23.52941rem] h-[29.41176rem] flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,.16)] scale-card">
                <div className="w-full">
                  <Image
                    className="w-full h-full object-cover block"
                    width={400}
                    height={500}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-gov-202301?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1670437406729"
                  />
                </div>
                <div className="absolute left-0 p-[30px] w-[20rem]">
                  <h3 className="text-xs leading-[1.33337] font-semibold tracking-[-.01em] pb-2 w-[204px] text-[#6e6e73] mb-[.4em]">
                    GOVERNMENT
                  </h3>
                  <p className="text-[28px] text-white leading-[1.14286] font-semibold">
                    Special pricing is available for state, local, and federal
                    agencies.<sup className="text-xs">1</sup>
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="/"
              className="flex h-[29.41176rem] lg:mr-3 lg:translate-x-36 my-4"
            >
              <div className="w-[23.52941rem] h-[29.41176rem] flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,.16)] scale-card">
                <div className="w-full">
                  <Image
                    className="w-full h-full object-cover block"
                    width={400}
                    height={500}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-veteran-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692805927436"
                  />
                </div>
                <div className="absolute left-0 p-[30px] w-[20rem]">
                  <h3 className="text-xs leading-[1.33337] font-semibold tracking-[-.01em] pb-2 w-[204px] text-[#6e6e73] mb-[.4em]">
                    VETERANS AND MILITARY
                  </h3>
                  <p className="text-[28px] text-black leading-[1.14286] font-semibold">
                    Active and veteran members may be eligible for exclusive
                    savings.<sup className="text-xs">1</sup>
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="/"
              className="flex h-[29.41176rem] lg:mr-3 lg:translate-x-36 my-4"
            >
              <div className="w-[23.52941rem] h-[29.41176rem] flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,.16)] scale-card">
                <div className="w-full">
                  <Image
                    className="w-full h-full object-cover block"
                    width={400}
                    height={500}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-refurb-202108?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1627318783000"
                  />
                </div>
                <div className="absolute left-0 p-[30px] w-[20rem]">
                  <h3 className="text-xs leading-[1.33337] font-semibold tracking-[-.01em] pb-2 w-[204px] text-[#6e6e73] mb-[.4em]">
                    CERTIFIED REFURBISHED
                  </h3>
                  <p className="text-[28px] text-black leading-[1.14286] font-semibold">
                    Shop refurbished Apple products backed by a one‑year
                    warranty.
                    <sup className="text-xs">1</sup>
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
