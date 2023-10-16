import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Product() {
  return (
    <>
      <div className="lg:min-h-[248px] min-h-[auto] lg:mx-36 mx-8 my-6 relative lg:pb-0 pb-10">
        <div className="lg:grid grid-cols-2 gap-3">
          <div className="max-w-[640px] lg:pt-[80px] pt-[56px] pb-[64px]">
            <h1 className="lg:text-5xl text-[32px] lg:leading-[1.08349] leading-[1.125] font-semibold lg:tracking-[-.003em] tracking-[.004em] text-[#1d1d1f]">
              Store.
              <span className="lg:text-5xl text-[32px] lg:leading-[1.08349] leading-[1.125] font-semibold lg:tracking-[-.003em] tracking-[.004em] text-[#6e6e73]">
                The best way to buy the products you love.
              </span>
            </h1>
          </div>
          <div className="flex items-center justify-center overflow-y-auto">
            <div className="absolute lg:right-[9rem] left-1 flex flex-col flex-wrap content-end pt-[90px] pb-[74px]">
              <div className="text-sm leading-[1.42859] font-normal  tracking-[-.016em] pb-4 flex items-center">
                <div>
                  <Image
                    className="w-9 h-9 mr-2"
                    width={35}
                    height={35}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon-202305_AV2?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1684947928853"
                  />
                </div>
                <div>
                  <div className="font-semibold">Need shopping help?</div>
                  <Link href="/" className="text-blue-500 hover:underline">
                    Ask a Specialist
                  </Link>
                </div>
              </div>
              <div className="text-sm leading-[1.42859] font-normal  tracking-[-.016em] pb-4 flex items-center">
                <div>
                  <svg
                    viewBox="0 0 35 35"
                    width="35px"
                    height="35px"
                    className="mr-2"
                  >
                    <path fill="none" d="M0 0h35v35H0z"></path>
                    <path d="M17.5 32.217a1.136 1.136 0 01-1-.576l-1.812-2.525c-.053-.087-.1-.116-.156-.116H10.5A4.5 4.5 0 016 24.5V10.518a4.5 4.5 0 014.5-4.5h14a4.5 4.5 0 014.5 4.5V24.5a4.5 4.5 0 01-4.5 4.5h-4.036a.149.149 0 00-.129.074l-1.867 2.609a1.108 1.108 0 01-.968.534zM10.5 7A3.519 3.519 0 007 10.518V24.5a3.5 3.5 0 003.5 3.5h4.036a1.151 1.151 0 011 .576l1.808 2.524c.128.213.211.17.284.042l1.868-2.61a1.125 1.125 0 01.968-.532H24.5a3.5 3.5 0 003.5-3.5V10.518A3.519 3.519 0 0024.5 7z"></path>
                    <path d="M21.35 14.635a2.326 2.326 0 00-1.078 1.94 2.215 2.215 0 001.353 2.051 4.733 4.733 0 01-.693 1.444c-.429.617-.9 1.246-1.584 1.246s-.858-.408-1.661-.408c-.77 0-1.045.419-1.672.419s-1.078-.573-1.584-1.29a6.312 6.312 0 01-1.056-3.363 2.719 2.719 0 012.541-3.021c.682 0 1.232.441 1.65.441s1.023-.463 1.782-.463a2.348 2.348 0 012.002 1.004zm-3.729-1.114c-.055 0-.1-.011-.143-.011 0-.033-.011-.11-.011-.187a2.26 2.26 0 01.561-1.378 2.19 2.19 0 011.485-.772 1.074 1.074 0 01.011.2A2.329 2.329 0 0119 12.794a1.967 1.967 0 01-1.379.727z"></path>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Visit an Apple Store</div>
                  <Link
                    href="/"
                    className="text-blue-500 hover:underline flex items-center gap-1"
                  >
                    Find one near you
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full overflow-x-hidden lg:mx-36 mx-8 my-6 relative product-store w-[90%]">
        <Swiper
          slidesPerView={3}
          navigation={true}
          modules={[Navigation]}
          className="z-30"
          breakpoints={{
            480: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 8,
            },
          }}
        >
          <SwiperSlide>
            <Link href="/">
              <div className="overflow-hidden rounded-2xl lg:h-[148px] lg:min-w-[136px] px-4 lg:py-2 py-1 h-[120px] min-w-[96px]">
                <Image
                  className="block m-auto lg:max-h-[78px] max-h-[60px] w-auto pb-4"
                  width={200}
                  height={130}
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-14-16-mac-nav-202301?wid=200&hei=130&fmt=png-alpha&.v=1670959891635"
                />

                <p className="text-center text-sm leading-[1.42859] font-semibold text-[#1d1d1f] hover:underline whitespace-nowrap">
                  Mac
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/">
              <div className="overflow-hidden rounded-2xl lg:h-[148px] lg:min-w-[136px] px-4 lg:py-2 py-1 h-[120px] min-w-[96px]">
                <Image
                  className="block m-auto lg:max-h-[78px] max-h-[60px] w-auto pb-4"
                  width={200}
                  height={130}
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1692971740190"
                />
                <p className="text-center text-sm leading-[1.42859] font-semibold text-[#1d1d1f] hover:underline whitespace-nowrap">
                  iPhone
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/">
              <div className="overflow-hidden rounded-2xl lg:h-[148px] lg:min-w-[136px] px-4 lg:py-2 py-1 h-[120px] min-w-[96px]">
                <Image
                  className="block m-auto lg:max-h-[78px] max-h-[60px] w-auto pb-4"
                  width={200}
                  height={130}
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664912135437"
                />
                <p className="text-center text-sm leading-[1.42859] font-semibold text-[#1d1d1f] hover:underline whitespace-nowrap">
                  iPad
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/">
              <div className="overflow-hidden rounded-2xl lg:h-[148px] lg:min-w-[136px] px-4 lg:py-2 py-1 h-[120px] min-w-[96px]">
                <Image
                  className="block m-auto lg:max-h-[78px] max-h-[60px] w-auto pb-4"
                  width={200}
                  height={130}
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202309?wid=200&hei=130&fmt=png-alpha&.v=1693703822208"
                />
                <p className="text-center text-sm leading-[1.42859] font-semibold text-[#1d1d1f] hover:underline whitespace-nowrap">
                  Apple Watch
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/">
              <div className="overflow-hidden rounded-2xl lg:h-[148px] lg:min-w-[136px] px-4 lg:py-2 py-1 h-[120px] min-w-[96px]">
                <Image
                  className="block m-auto lg:max-h-[78px] max-h-[60px] w-auto pb-4"
                  width={200}
                  height={130}
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1660676485885"
                />
                <p className="text-center text-sm leading-[1.42859] font-semibold text-[#1d1d1f] hover:underline whitespace-nowrap">
                  AirPods
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/">
              <div className="overflow-hidden rounded-2xl lg:h-[148px] lg:min-w-[136px] px-4 lg:py-2 py-1 h-[120px] min-w-[96px]">
                <Image
                  className="block m-auto lg:max-h-[78px] max-h-[60px] w-auto pb-4"
                  width={200}
                  height={130}
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783380000"
                />
                <p className="text-center text-sm leading-[1.42859] font-semibold text-[#1d1d1f] hover:underline whitespace-nowrap">
                  AirTag
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/">
              <div className="overflow-hidden rounded-2xl lg:h-[148px] lg:min-w-[136px] px-4 lg:py-2 py-1 h-[120px] min-w-[96px]">
                <Image
                  className="block m-auto lg:max-h-[78px] max-h-[60px] w-auto pb-4"
                  width={200}
                  height={130}
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664628458484"
                />
                <p className="text-center text-sm leading-[1.42859] font-semibold text-[#1d1d1f] hover:underline whitespace-nowrap">
                  Apple TV 4K
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/">
              <div className="overflow-hidden rounded-2xl lg:h-[148px] lg:min-w-[136px] px-4 lg:py-2 py-1 h-[120px] min-w-[96px]">
                <Image
                  className="block m-auto lg:max-h-[78px] max-h-[60px] w-auto pb-4"
                  width={200}
                  height={130}
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=200&hei=130&fmt=png-alpha&.v=1670389216654"
                />
                <p className="text-center text-sm leading-[1.42859] font-semibold text-[#1d1d1f] hover:underline whitespace-nowrap">
                  HomePod
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/">
              <div className="overflow-hidden rounded-2xl lg:h-[148px] lg:min-w-[136px] px-4 lg:py-2 py-1 h-[120px] min-w-[96px]">
                <Image
                  className="block m-auto lg:max-h-[78px] max-h-[60px] w-auto pb-4"
                  width={200}
                  height={130}
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202309?wid=200&hei=130&fmt=png-alpha&.v=1692803114952"
                />
                <p className="text-center text-sm leading-[1.42859] font-semibold text-[#1d1d1f] hover:underline whitespace-nowrap">
                  Accessories
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/">
              <div className="overflow-hidden rounded-2xl lg:h-[148px] lg:min-w-[136px] px-4 lg:py-2 py-1 h-[120px] min-w-[96px]">
                <Image
                  className="block m-auto lg:max-h-[78px] max-h-[60px] w-auto pb-4"
                  width={200}
                  height={130}
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=200&hei=130&fmt=png-alpha&.v=1653339351054"
                />
                <p className="text-center text-sm leading-[1.42859] font-semibold text-[#1d1d1f] hover:underline whitespace-nowrap">
                  Apple Gift Card
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/"></Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/"></Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
