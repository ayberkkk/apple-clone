import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Accessories() {
  return (
    <section className="latest w-full pb-10">
      <div className="pb-4 lg:mx-36 mx-8 my-6">
        <h2 className="lg:text-2xl text-[32px] lg:leading-[1.14286] leading-[1.125] font-semibold lg:tracking-[.007em] tracking-[.004em] text-[#1d1d1f]">
          Accessories.
          <span className="lg:text-2xl text-[32px] lg:leading-[1.14286] leading-[1.125] font-semibold lg:tracking-[.007em] tracking-[.004em] text-[#6e6e73]">
            Essentials that pair perfectly with your favorite devices.
          </span>
        </h2>
      </div>
      <div className="h-full overflow-x-hidden relative w-full">
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
              spaceBetween:-100
            },
          }}
        >
          <SwiperSlide>
            <Link
              href="/"
              className="flex w-[23.52941rem] h-[29.41176rem] mr-3 lg:translate-x-36"
            >
              <div className="w-[23.52941rem] h-[29.41176rem] flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] ">
                <div className="w-full">
                  <Image
                    className="w-full h-full object-cover block"
                    width={400}
                    height={500}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-accessories-fine-woven-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692804127327"
                  />
                </div>
                <div className="absolute left-0 p-[30px]">
                  <h3 className="text-[28px] leading-[1.14286] font-semibold tracking-[-.01em] pb-2 w-[204px] text-[#1d1d1f] mb-[.4em]">
                    Introducing FineWoven accessories.
                  </h3>
                  <p className="text-[17px] text-[#1d1d1f] leading-[1.23536] font-normal tracking-[-.022em]">
                    Durable microtwill with a luxurious suedelike feel, made
                    from 68 percent post-consumer recycled content.
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="/"
              className="flex h-[29.41176rem] mr-3 lg:translate-x-36"
            >
              <div className="w-[18.41176rem] h-[29.41176rem] relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)]">
                <div className="w-full pt-10 pb-0 m-auto  ">
                  <Image
                    className="w-[230px] table m-auto"
                    width={100}
                    height={100}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4J3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1693594197616"
                  />
                </div>
                <div className="px-4 py-10 relative">
                  <ul className="absolute top-0 left-0 w-full pb-4 m-auto text-center">
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4L3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069953764"
                      />
                    </li>
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4U3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069984396"
                      />
                    </li>
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4L3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069953764"
                      />
                    </li>
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4U3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069984396"
                      />
                    </li>
                  </ul>
                  <h3 className="text-xs leading-[1.33337] font-normal tracking-[-.01em] pb-2 text-[#bf4800] mb-[.4em]">
                    New
                  </h3>
                  <p className="text-[17px] text-[#1d1d1f] leading-[1.23536] tracking-[-.022em] font-semibold">
                    iPhone 15 Pro FineWoven Case with MagSafe - Taupe
                  </p>
                  <p className="text-[14px] leading-[1.28577] font-normal tracking-[-.016em] text-[#1d1d1f] pt-[10px]">
                    $59.00
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="/"
              className="flex h-[29.41176rem] mr-3 lg:translate-x-36"
            >
              <div className="w-[18.41176rem] h-[29.41176rem] relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)]">
                <div className="w-full pt-10 pb-0 m-auto  ">
                  <Image
                    className="w-[230px] table m-auto"
                    width={100}
                    height={100}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT2N3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1692994298447"
                  />
                </div>
                <div className="px-4 py-10 relative">
                  <ul className="absolute top-0 left-0 w-full pb-4 m-auto text-center">
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4L3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069953764"
                      />
                    </li>
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4U3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069984396"
                      />
                    </li>
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4L3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069953764"
                      />
                    </li>
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4U3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069984396"
                      />
                    </li>
                  </ul>
                  <h3 className="text-xs leading-[1.33337] font-normal tracking-[-.01em] pb-2 text-[#bf4800] mb-[.4em]">
                    New
                  </h3>
                  <p className="text-[17px] text-[#1d1d1f] leading-[1.23536] tracking-[-.022em] font-semibold">
                    iPhone FineWoven Wallet with MagSafe - Black
                  </p>
                  <p className="text-[14px] leading-[1.28577] font-normal tracking-[-.016em] text-[#1d1d1f] pt-[10px]">
                    $59.00
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="/"
              className="flex h-[29.41176rem] mr-3 lg:translate-x-36"
            >
              <div className="w-[18.41176rem] h-[29.41176rem] relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)]">
                <div className="w-full pt-10 pb-0 m-auto  ">
                  <Image
                    className="w-[230px] table m-auto"
                    width={100}
                    height={100}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJC3ref?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1692936507700"
                  />
                </div>
                <div className="px-4 py-10 relative">
                  <ul className="absolute top-0 left-0 w-full pb-4 m-auto text-center">
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4L3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069953764"
                      />
                    </li>
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4U3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069984396"
                      />
                    </li>
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4L3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069953764"
                      />
                    </li>
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4U3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069984396"
                      />
                    </li>
                  </ul>
                  <h3 className="text-xs leading-[1.33337] font-normal tracking-[-.01em] pb-2 text-[#bf4800] mb-[.4em]">
                    New
                  </h3>
                  <p className="text-[17px] text-[#1d1d1f] leading-[1.23536] tracking-[-.022em] font-semibold">
                    45mm Evergreen Magnetic Link - M/L
                  </p>
                  <p className="text-[14px] leading-[1.28577] font-normal tracking-[-.016em] text-[#1d1d1f] pt-[10px]">
                    $99.00
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="/"
              className="flex h-[29.41176rem] mr-3 lg:translate-x-36"
            >
              <div className="w-[18.41176rem] h-[29.41176rem] relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)]">
                <div className="w-full pt-10 pb-0 m-auto  ">
                  <Image
                    className="w-[230px] table m-auto"
                    width={100}
                    height={100}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MUH73ref?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1692936516435"
                  />
                </div>
                <div className="px-4 py-10 relative">
                  <ul className="absolute top-0 left-0 w-full pb-4 m-auto text-center">
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4L3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069953764"
                      />
                    </li>
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4U3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069984396"
                      />
                    </li>
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4L3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069953764"
                      />
                    </li>
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4U3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069984396"
                      />
                    </li>
                  </ul>
                  <h3 className="text-xs leading-[1.33337] font-normal tracking-[-.01em] pb-2 text-[#bf4800] mb-[.4em]">
                    New
                  </h3>
                  <p className="text-[17px] text-[#1d1d1f] leading-[1.23536] tracking-[-.022em] font-semibold">
                    41mm Mulberry Modern Buckle - Medium
                  </p>
                  <p className="text-[14px] leading-[1.28577] font-normal tracking-[-.016em] text-[#1d1d1f] pt-[10px]">
                    $149.00
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="/"
              className="flex h-[29.41176rem] mr-3 lg:translate-x-36"
            >
              <div className="w-[18.41176rem] h-[29.41176rem] relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)]">
                <div className="w-full pt-10 pb-0 m-auto  ">
                  <Image
                    className="w-[230px] table m-auto"
                    width={100}
                    height={100}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT3G3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1693593632903"
                  />
                </div>
                <div className="px-4 py-10 relative">
                  <ul className="absolute top-0 left-0 w-full pb-4 m-auto text-center">
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4L3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069953764"
                      />
                    </li>
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4U3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069984396"
                      />
                    </li>
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4L3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069953764"
                      />
                    </li>
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4U3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069984396"
                      />
                    </li>
                  </ul>
                  <h3 className="text-xs leading-[1.33337] font-normal tracking-[-.01em] pb-2 text-[#bf4800] mb-[.4em]">
                    New
                  </h3>
                  <p className="text-[17px] text-[#1d1d1f] leading-[1.23536] tracking-[-.022em] font-semibold">
                    iPhone 15 FineWoven Case with MagSafe - Pacific Blue
                  </p>
                  <p className="text-[14px] leading-[1.28577] font-normal tracking-[-.016em] text-[#1d1d1f] pt-[10px]">
                    $59.00
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="/"
              className="flex h-[29.41176rem] mr-3 lg:translate-x-36"
            >
              <div className="w-[18.41176rem] h-[29.41176rem] relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)]">
                <div className="w-full pt-10 pb-0 m-auto  ">
                  <Image
                    className="w-[230px] table m-auto"
                    width={100}
                    height={100}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT2H3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1692915693368"
                  />
                </div>
                <div className="px-4 py-10 relative">
                  <ul className="absolute top-0 left-0 w-full pb-4 m-auto text-center">
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4L3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069953764"
                      />
                    </li>
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4U3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069984396"
                      />
                    </li>
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4L3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069953764"
                      />
                    </li>
                    <li className="inline-block mr-2">
                      <Image
                        width={32}
                        height={32}
                        className="h-3 w-3"
                        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4U3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693069984396"
                      />
                    </li>
                  </ul>
                  <h3 className="text-xs leading-[1.33337] font-normal tracking-[-.01em] pb-2 text-[#bf4800] mb-[.4em]">
                    New
                  </h3>
                  <p className="text-[17px] text-[#1d1d1f] leading-[1.23536] tracking-[-.022em] font-semibold">
                    AirTag FineWoven Key Ring - Black
                  </p>
                  <p className="text-[14px] leading-[1.28577] font-normal tracking-[-.016em] text-[#1d1d1f] pt-[10px]">
                    $35.00
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="/"
              className="flex w-[23.52941rem] h-[29.41176rem] mr-3 lg:translate-x-36"
            >
              <div className="w-[23.52941rem] h-[29.41176rem] flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] ">
                <div className="w-full">
                  <Image
                    className="w-full h-full object-cover block"
                    width={400}
                    height={500}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-accessories-explore-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692730370680"
                  />
                </div>
                <div className="absolute left-0 p-[30px]">
                  <h3 className="text-[28px] leading-[1.14286] font-semibold tracking-[-.01em] pb-2 w-[204px] text-[#1d1d1f] mb-[.4em]">
                    Explore all accessories.
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
