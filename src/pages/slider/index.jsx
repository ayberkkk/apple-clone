import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillPlayCircle } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function Slider() {
  return (
    <section className="container mx-auto pb-10 pt-10 relative">
      <Swiper
        modules={[Pagination, Autoplay, EffectCoverflow]}
        spaceBetween={10}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        <SwiperSlide className="relative">
          <Image
            width={1250}
            height={100}
            className="w-[1250px] h-full mx-auto lg:table hidden"
            src="https://is1-ssl.mzstatic.com/image/thumb/-AiwUH5SvHJdsktfhM7pAw/2500x1406.jpg"
          />
          <Image
            width={274}
            height={100}
            className="w-[274px] h-full mx-auto lg:hidden table"
            src="https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/9d/9b/92/9d9b925a-7219-fec1-1c78-6dedbd1f1fee/d1ee2bdc-2a40-462b-b9b5-c05183c6f1ca.png/548x1186.jpg"
          />
          <article className="absolute bottom-10 left-48 lg:block hidden">
            <ul className="flex items-center justify-start gap-5">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 bg-white px-5 py-3 text-[#1d1d1f] text-sm leading-[1.42859] rounded-3xl"
                >
                  Stream now
                  <AiFillPlayCircle size={20} />
                </Link>
              </li>
              <li>
                <p
                  className="text-xl leading-2 flex items-center justify-center gap-3 text-white"
                  style={{ textShadow: "0px 0px 5px rgba(0,0,0,0.6)" }}
                >
                  <span className="font-semibold">Documentery</span>
                  <span className="pb-1 text-2xl">.</span>
                  <span> Coming to theaters October 20.</span>
                </p>
              </li>
            </ul>
          </article>
          <article className="absolute bottom-10 left-32 text-center w-[40%] lg:hidden block">
            <ul>
              <li>
                <p
                  className="text-lg leading-2  text-white mb-3"
                  style={{ textShadow: "0px 0px 5px rgba(0,0,0,0.6)" }}
                >
                  <span className="font-semibold">Documentery</span>
                  <span> Coming to theaters October 20.</span>
                </p>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 bg-white px-5 py-3 text-[#1d1d1f] text-sm leading-[1.42859] rounded-3xl"
                >
                  Stream now
                  <AiFillPlayCircle size={20} />
                </Link>
              </li>
            </ul>
          </article>
        </SwiperSlide>
         <SwiperSlide className="relative">
          <Image
            width={1250}
            height={100}
            className="w-[1250px] h-full mx-auto lg:table hidden"
            src="https://is1-ssl.mzstatic.com/image/thumb/ynfGAYhMnc6Dygh6pj9xsw/2500x1406.jpg"
          />
          <Image
            width={274}
            height={100}
            className="w-[274px] h-full mx-auto lg:hidden table"
            src="https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/9d/9b/92/9d9b925a-7219-fec1-1c78-6dedbd1f1fee/d1ee2bdc-2a40-462b-b9b5-c05183c6f1ca.png/548x1186.jpg"
          />
          <article className="absolute bottom-10 left-48 lg:block hidden">
            <ul className="flex items-center justify-start gap-5">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 bg-white px-5 py-3 text-[#1d1d1f] text-sm leading-[1.42859] rounded-3xl"
                >
                  Stream now
                  <AiFillPlayCircle size={20} />
                </Link>
              </li>
              <li>
                <p
                  className="text-xl leading-2 flex items-center justify-center gap-3 text-white"
                  style={{ textShadow: "0px 0px 5px rgba(0,0,0,0.6)" }}
                >
                  <span className="font-semibold">Documentery</span>
                  <span className="pb-1 text-2xl">.</span>
                  <span> Coming to theaters October 20.</span>
                </p>
              </li>
            </ul>
          </article>
             <article className="absolute bottom-10 left-32 text-center w-[40%] lg:hidden block">
            <ul>
              <li>
                <p
                  className="text-lg leading-2  text-white mb-3"
                  style={{ textShadow: "0px 0px 5px rgba(0,0,0,0.6)" }}
                >
                  <span className="font-semibold">Documentery</span>
                  <span> Coming to theaters October 20.</span>
                </p>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 bg-white px-5 py-3 text-[#1d1d1f] text-sm leading-[1.42859] rounded-3xl"
                >
                  Stream now
                  <AiFillPlayCircle size={20} />
                </Link>
              </li>
            </ul>
          </article>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image
            width={1250}
            height={100}
            className="w-[1250px] h-full mx-auto lg:table hidden"
            src="https://is1-ssl.mzstatic.com/image/thumb/QIAKXHQ0HAoakvZEUBgyCA/2500x1406.jpg"
          />
          <Image
            width={274}
            height={100}
            className="w-[274px] h-full mx-auto lg:hidden table"
            src="https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/9d/9b/92/9d9b925a-7219-fec1-1c78-6dedbd1f1fee/d1ee2bdc-2a40-462b-b9b5-c05183c6f1ca.png/548x1186.jpg"
          />
          <article className="absolute bottom-10 left-48 lg:block hidden">
            <ul className="flex items-center justify-start gap-5">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 bg-white px-5 py-3 text-[#1d1d1f] text-sm leading-[1.42859] rounded-3xl"
                >
                  Stream now
                  <AiFillPlayCircle size={20} />
                </Link>
              </li>
              <li>
                <p
                  className="text-xl leading-2 flex items-center justify-center gap-3 text-white"
                  style={{ textShadow: "0px 0px 5px rgba(0,0,0,0.6)" }}
                >
                  <span className="font-semibold">Documentery</span>
                  <span className="pb-1 text-2xl">.</span>
                  <span> Coming to theaters October 20.</span>
                </p>
              </li>
            </ul>
          </article>
             <article className="absolute bottom-10 left-32 text-center w-[40%] lg:hidden block">
            <ul>
              <li>
                <p
                  className="text-lg leading-2  text-white mb-3"
                  style={{ textShadow: "0px 0px 5px rgba(0,0,0,0.6)" }}
                >
                  <span className="font-semibold">Documentery</span>
                  <span> Coming to theaters October 20.</span>
                </p>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 bg-white px-5 py-3 text-[#1d1d1f] text-sm leading-[1.42859] rounded-3xl"
                >
                  Stream now
                  <AiFillPlayCircle size={20} />
                </Link>
              </li>
            </ul>
          </article>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image
            width={1250}
            height={100}
            className="w-[1250px] h-full mx-auto lg:table hidden"
            src="https://is1-ssl.mzstatic.com/image/thumb/ynfGAYhMnc6Dygh6pj9xsw/2500x1406.jpg"
          />
          <Image
            width={274}
            height={100}
            className="w-[274px] h-full mx-auto lg:hidden table"
            src="https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/9d/9b/92/9d9b925a-7219-fec1-1c78-6dedbd1f1fee/d1ee2bdc-2a40-462b-b9b5-c05183c6f1ca.png/548x1186.jpg"
          />
          <article className="absolute bottom-10 left-48 lg:block hidden">
            <ul className="flex items-center justify-start gap-5">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 bg-white px-5 py-3 text-[#1d1d1f] text-sm leading-[1.42859] rounded-3xl"
                >
                  Stream now
                  <AiFillPlayCircle size={20} />
                </Link>
              </li>
              <li>
                <p
                  className="text-xl leading-2 flex items-center justify-center gap-3 text-white"
                  style={{ textShadow: "0px 0px 5px rgba(0,0,0,0.6)" }}
                >
                  <span className="font-semibold">Documentery</span>
                  <span className="pb-1 text-2xl">.</span>
                  <span> Coming to theaters October 20.</span>
                </p>
              </li>
            </ul>
          </article>
             <article className="absolute bottom-10 left-32 text-center w-[40%] lg:hidden block">
            <ul>
              <li>
                <p
                  className="text-lg leading-2  text-white mb-3"
                  style={{ textShadow: "0px 0px 5px rgba(0,0,0,0.6)" }}
                >
                  <span className="font-semibold">Documentery</span>
                  <span> Coming to theaters October 20.</span>
                </p>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 bg-white px-5 py-3 text-[#1d1d1f] text-sm leading-[1.42859] rounded-3xl"
                >
                  Stream now
                  <AiFillPlayCircle size={20} />
                </Link>
              </li>
            </ul>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
