import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Latest() {
  return (
    <section className="latest w-full">
      <div className="pb-4 lg:mx-36 mx-8 mt-6">
        <h2 className="lg:text-2xl text-[32px] lg:leading-[1.14286] leading-[1.125] font-semibold lg:tracking-[.007em] tracking-[.004em] text-[#1d1d1f]">
          The latest.
          <span className="lg:text-2xl text-[32px] lg:leading-[1.14286] leading-[1.125] font-semibold lg:tracking-[.007em] tracking-[.004em] text-[#6e6e73]">
            Take a look at what’s new, right now.
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
              className="flex lg:h-[29.41176rem] h-[450px] lg:mr-3 lg:translate-x-36 my-4"
            >
              <div className="lg:w-[23.52941rem] w-[309px] lg:h-[29.41176rem] h-[450px] mx-auto flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,.16)] scale-card ">
                <div className="w-full">
                  <Image
                    className="w-full h-full object-cover block"
                    width={400}
                    height={500}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692910040844"
                  />
                </div>
                <div className="absolute left-0 p-[30px] w-[20rem]">
                  <h3 className="text-xs leading-[1.33337] font-semibold tracking-[-.01em] pb-2 w-[204px] text-[#f5f5f7] mb-[.4em]">
                    IPHONE 15 PRO
                  </h3>
                  <p className="text-[28px] text-white leading-[1.14286] font-semibold">
                    Titanium
                  </p>
                  <p className="text-[15px] leading-[1.23536] font-normal tracking-[-.022em] text-white pt-[10px]">
                    From $999 or $41.62/mo month for 24 mo.*
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="/"
              className="flex lg:w-[23.52941rem] w-[309px] lg:h-[29.41176rem] h-[450px] lg:mr-3 lg:translate-x-36 my-4"
            >
              <div className="lg:w-[23.52941rem] w-[309px] lg:h-[29.41176rem] h-[450px] mx-auto flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,.16)] scale-card">
                <div className="w-full">
                  <Image
                    className="w-full h-full object-cover block"
                    width={400}
                    height={500}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-15-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692719973220"
                  />
                </div>
                <div className="absolute left-0 p-[30px] w-[20rem]">
                  <h3 className="text-xs leading-[1.33337] font-semibold tracking-[-.01em] pb-2 w-[204px] text-[#6e6e73] mb-[.4em]">
                    IPHONE 15
                  </h3>
                  <p className="text-[28px] text-[#1d1d1f] leading-[1.14286] font-semibold">
                    Newphoria
                  </p>
                  <p className="text-[15px] leading-[1.23536] font-normal tracking-[-.022em] text-[#1d1d1f] pt-[10px]">
                    From $799 or $33.29/mo month for 24 mo.*
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="/"
              className=" flex lg:h-[29.41176rem] h-[450px] lg:mr-3 lg:translate-x-36 my-4"
            >
              <div className="lg:w-[23.52941rem] w-[309px] lg:h-[29.41176rem] h-[450px] mx-auto flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,.16)] scale-card">
                <div className="w-full">
                  <Image
                    className="w-full h-full object-cover block"
                    width={400}
                    height={500}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-s9-202309?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1692720183508"
                  />
                </div>
                <div className="absolute left-0 p-[30px] w-[20rem]">
                  <h3 className="text-xs leading-[1.33337] font-semibold tracking-[-.01em] pb-2 w-[204px] text-[#f5f5f7] mb-[.4em]">
                    APPLE WATCH SERIES 9
                  </h3>
                  <p className="text-[28px] text-white leading-[1.14286] font-semibold">
                    Smarter. Brighter. Mightier.
                  </p>
                  <p className="text-[15px] leading-[1.23536] font-normal tracking-[-.022em] text-white pt-[10px]">
                    From $399 or $33.25/mo month for 12 mo.*
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="/"
              className="flex lg:h-[29.41176rem] h-[450px] lg:mr-3 lg:translate-x-36 my-4 "
            >
              <div className="lg:w-[23.52941rem] w-[309px] lg:h-[29.41176rem] h-[450px] mx-auto flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,.16)] scale-card">
                <div className="w-full">
                  <Image
                    className="w-full h-full object-cover block"
                    width={400}
                    height={500}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-ultra-202309?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1692720471465"
                  />
                </div>
                <div className="absolute left-0 p-[30px] w-[20rem]">
                  <h3 className="text-xs leading-[1.33337] font-semibold tracking-[-.01em] pb-2 w-[204px] text-[#6e6e73] mb-[.4em]">
                    APPLE WATCH ULTRA 2
                  </h3>
                  <p className="text-[28px] text-[#1d1d1f] leading-[1.14286] font-semibold">
                    Next level adventure.
                  </p>
                  <p className="text-[15px] leading-[1.23536] font-normal tracking-[-.022em] text-[#1d1d1f] pt-[10px]">
                    From $799 or $66.58/mo month for 12 mo.*
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="/"
              className="flex lg:h-[29.41176rem] h-[450px] lg:mr-3 lg:translate-x-36 my-4"
            >
              <div className="lg:w-[23.52941rem] w-[309px] lg:h-[29.41176rem] h-[450px] mx-auto flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,.16)] scale-card">
                <div className="w-full">
                  <Image
                    className="w-full h-full object-cover block"
                    width={400}
                    height={500}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watchbands-202309?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1692720583186"
                  />
                </div>
                <div className="absolute left-0 p-[30px] w-[20rem]">
                  <h3 className="text-xs leading-[1.33337] font-semibold tracking-[-.01em] pb-2 w-[204px] text-[#6e6e73] mb-[.4em]"></h3>
                  <p className="text-[28px] text-[#1d1d1f] leading-[1.14286] font-semibold">
                    Shop carbon neutral Apple Watch bands.
                  </p>
                  <p className="text-[15px] leading-[1.23536] font-normal tracking-[-.022em] text-[#1d1d1f] pt-[10px]">
                    Learn more at apple.com/2030.
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="/"
              className="flex lg:h-[29.41176rem] h-[450px] lg:mr-3 lg:translate-x-36 my-4"
            >
              <div className="lg:w-[23.52941rem] w-[309px] lg:h-[29.41176rem] h-[450px] mx-auto flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,.16)] scale-card">
                <div className="w-full">
                  <Image
                    className="w-full h-full object-cover block"
                    width={400}
                    height={500}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-airpods-pro-202209?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1661016986712"
                  />
                </div>
                <div className="absolute left-0 p-[30px] w-[20rem]">
                  <h3 className="text-xs leading-[1.33337] font-semibold tracking-[-.01em] pb-2 w-[204px] text-[#f5f5f7] mb-[.4em]">
                    AIRPODS PRO (2ND GENERATION)
                  </h3>
                  <p className="text-[28px] text-white leading-[1.14286] font-semibold">
                    Adaptive Audio. Now playing.
                  </p>
                  <p className="text-[15px] leading-[1.23536] font-normal tracking-[-.022em] text-white pt-[10px]">
                    $249.00 or $41.50/mo.per month for 6 mo.months
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="/"
              className="flex lg:h-[29.41176rem] h-[450px] lg:mr-3 lg:translate-x-36 my-4"
            >
              <div className="lg:w-[23.52941rem] w-[309px] lg:h-[29.41176rem] h-[450px] mx-auto flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,.16)] scale-card">
                <div className="w-full">
                  <Image
                    className="w-full h-full object-cover block"
                    width={400}
                    height={500}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-air-202306?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1683844828182"
                  />
                </div>
                <div className="absolute left-0 p-[30px] w-[20rem]">
                  <h3 className="text-xs leading-[1.33337] font-semibold tracking-[-.01em] pb-2 w-[204px] text-[#1d1d1f] mb-[.4em]">
                    MACBOOK AIR 15”
                  </h3>
                  <p className="text-[28px] text-[#1d1d1f] leading-[1.14286] font-semibold">
                    Impressively big. Impossibly thin.
                  </p>
                  <p className="text-[15px] leading-[1.23536] font-normal tracking-[-.022em] text-[#1d1d1f] pt-[10px]">
                    From $1299 or $108.25/mo month for 12 mo. <sup>1</sup>
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="/"
              className="flex lg:h-[29.41176rem] h-[450px] lg:mr-3 lg:translate-x-36 my-4"
            >
              <div className="lg:w-[23.52941rem] w-[309px] lg:h-[29.41176rem] h-[450px] mx-auto flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,.16)] scale-card">
                <div className="w-full">
                  <Image
                    className="w-full h-full object-cover block"
                    width={400}
                    height={500}
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-air-202203?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1645636337374"
                  />
                </div>
                <div className="absolute left-0 p-[30px] w-[20rem]">
                  <h3 className="text-xs leading-[1.33337] font-semibold tracking-[-.01em] pb-2 w-[204px] text-[#f5f5f7] mb-[.4em]">
                    IPAD AIR
                  </h3>
                  <p className="text-[28px] text-white leading-[1.14286] font-semibold">
                    Light. Bright. Full of might.
                  </p>
                  <p className="text-[15px] leading-[1.23536] font-normal tracking-[-.022em] text-white pt-[10px]">
                    From $599 or $49.91/mo month for 12 mo.<sup>1</sup>
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="help pb-4 lg:mx-36 mx-8 my-6">
        <div className="mt-6">
          <h2 className="lg:text-2xl text-[32px] lg:leading-[1.14286] leading-[1.125] font-semibold lg:tracking-[.007em] tracking-[.004em] text-[#1d1d1f]">
            Help is here.
            <span className="lg:text-2xl text-[32px] lg:leading-[1.14286] leading-[1.125] font-semibold lg:tracking-[.007em] tracking-[.004em] text-[#6e6e73]">
              Whenever and however you need it.
            </span>
          </h2>
        </div>
        <div className="py-4 relative flex items-center">
          <Swiper
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            className="z-30"
            breakpoints={{
              992: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <Link href="/" className="flex lg:h-[29.41176rem] h-[450px] mr-3">
                <div className="lg:h-[29.41176rem] h-[450px] flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,.16)] scale-card">
                  <div className="w-full">
                    <Image
                      className="w-full h-full object-cover block"
                      width={480}
                      height={500}
                      src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-help-202305?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1684946879038"
                    />
                  </div>
                  <div className="absolute left-0 p-[30px]">
                    <h3 className="text-xs leading-[1.33337] font-semibold tracking-[-.01em] pb-2 w-[204px] text-[#1d1d1f] mb-[.4em]">
                      APPLE SPECIALIST
                    </h3>
                    <p className="text-[28px] text-[#1d1d1f] leading-[1.14286] font-semibold">
                      Shop one on one with a Specialist. Online or in a store.
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/" className="flex lg:h-[29.41176rem] h-[450px] mr-3">
                <div className="lg:h-[29.41176rem] h-[450px] flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,.16)] scale-card">
                  <div className="w-full">
                    <Image
                      className="w-full h-full object-cover block"
                      width={480}
                      height={500}
                      src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-video-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1694270835539"
                    />
                  </div>
                  <div className="absolute left-0 p-[30px]">
                    <h3 className="text-xs leading-[1.33337] font-semibold tracking-[-.01em] pb-2 w-[204px] text-[#f56300] mb-[.4em]">
                      NEW
                    </h3>
                    <p className="text-[28px] text-white leading-[1.14286] font-semibold">
                      Shop with a Specialist over video.
                    </p>
                    <p className="text-[15px] leading-[1.23536] font-normal tracking-[-.022em] text-white pt-[10px]">
                      Choose your next device in a guided, <br /> one-way video
                      session.
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/" className="lg:h-[29.41176rem] h-[450px] mr-3">
                <div className="h-[14.11765rem] flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,.16)] scale-card">
                  <div className="w-full">
                    <Image
                      className="w-full h-full object-cover block"
                      width={480}
                      height={240}
                      src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-25-apps-202108?wid=960&hei=480&fmt=p-jpg&qlt=95&.v=1626223748000"
                    />
                  </div>
                  <div className="absolute left-0 p-[30px] mt-5">
                    <p className="text-[20px] text-[#1d1d1f] leading-[1.14286] font-semibold">
                      Get to know your new device with a free Personal Sessions.
                    </p>
                  </div>
                </div>
                <div className="h-[14.11765rem] mt-4 flex flex-row justify-center relative overflow-hidden bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,.16)] scale-card">
                  <div className="w-full">
                    <Image
                      className="w-full h-full object-cover block"
                      width={480}
                      height={240}
                      src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-25-genius-202108?wid=960&hei=480&fmt=p-jpg&qlt=95&.v=1626384443000"
                    />
                  </div>
                  <div className="absolute left-0 p-[30px] pr-60 mt-5">
                    <p className="text-[20px] text-[#1d1d1f] leading-[1.14286] font-semibold">
                      Get expert service and support at the Genius Bar.
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
