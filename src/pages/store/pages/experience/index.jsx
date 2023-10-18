import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Experience() {
  return (
    <section className="latest w-full pb-10">
      <div className="pb-4 lg:mx-36 mx-8 mt-6">
        <h2 className="lg:text-2xl text-[32px] lg:leading-[1.14286] leading-[1.125] font-semibold lg:tracking-[.007em] tracking-[.004em] text-[#1d1d1f]">
          The Apple experience.
          <span className="lg:text-2xl text-[32px] lg:leading-[1.14286] leading-[1.125] font-semibold lg:tracking-[.007em] tracking-[.004em] text-[#6e6e73]">
            Do even more with Apple products and services.
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
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <Link
              href="/"
              className="flex lg:mx-0 mx-4 lg:translate-x-36 my-4"
            >
              <div className="flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,.16)] scale-card">
                <div className="w-full">
                  <Image
                    className="w-full h-full object-cover block"
                    width={480}
                    height={500}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-tv-services-lessons-in-chemistry-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1696949431686"
                  />
                </div>
                <div className="absolute left-0 p-[30px] pr-32">
                  <h3 className="text-xs leading-[1.33337] font-semibold tracking-[-.01em] pb-2 w-[204px] text-[#f5f5f7] mb-[.4em]">
                    APPLE TV+
                  </h3>
                  <p className="text-[28px] text-white leading-[1.14286] font-semibold">
                    Get 3 months of Apple TV+ free when you buy an Apple
                    device.°
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="/"
              className="flex lg:mx-0 mx-4 lg:translate-x-36 my-4"
            >
              <div className="flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,.16)] scale-card">
                <div className="w-full">
                  <Image
                    className="w-full h-full object-cover block"
                    width={480}
                    height={500}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-subscriptions-202108_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1626375546000"
                  />
                </div>
                <div className="absolute left-0 p-[30px] pr-32">
                  <p className="text-[28px] text-[#1d1d1f] leading-[1.14286] font-semibold">
                    Six Apple services. One easy subscription.
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="/"
              className="flex lg:mx-0 mx-4 lg:translate-x-36 my-4"
            >
              <div className="flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,.16)] scale-card">
                <div className="w-full">
                  <Image
                    className="w-full h-full object-cover block"
                    width={480}
                    height={500}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applecare-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1692730497948"
                  />
                </div>
                <div className="absolute left-0 p-[30px] pr-32">
                  <p className="text-[28px] text-[#1d1d1f] leading-[1.14286] font-semibold">
                    We've got you covered.
                  </p>
                  <p className="text-[15px] leading-[1.23536] font-normal tracking-[-.022em] text-[#1d1d1f] pt-[10px]">
                    AppleCare+ now comes with unlimited repairs for accidental
                    damage protection.
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="/"
              className="flex lg:mx-0 mx-4 lg:translate-x-36 my-4"
            >
              <div className="flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,.16)] scale-card">
                <div className="w-full">
                  <Image
                    className="w-full h-full object-cover block"
                    width={480}
                    height={500}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applepay-202303?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1677655420359"
                  />
                </div>
                <div className="absolute left-0 p-[30px] pr-32">
                  <p className="text-[28px] text-[#1d1d1f] leading-[1.14286] font-semibold">
                    Discover all the ways to use Apple Pay.
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="/"
              className="flex lg:mx-0 mx-4 lg:translate-x-36 my-4"
            >
              <div className="flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,.16)] scale-card">
                <div className="w-full">
                  <Image
                    className="w-full h-full object-cover block"
                    width={480}
                    height={500}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-homekit-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1692730632477"
                  />
                </div>
                <div className="absolute left-0 p-[30px] pr-32">
                  <h3 className="text-xs leading-[1.33337] font-semibold tracking-[-.01em] pb-2 w-[204px] text-[#1d1d1f] mb-[.4em]">
                    HOME
                  </h3>
                  <p className="text-[28px] text-[#1d1d1f] leading-[1.14286] font-semibold">
                    See how one app can control your entire home.
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
