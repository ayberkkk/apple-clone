import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function AppleStore() {
  return (
    <section className="latest w-full pb-10">
      <div className="pb-4 lg:mx-36 mx-8 my-6">
        <h2 className="lg:text-2xl text-[32px] lg:leading-[1.14286] leading-[1.125] font-semibold lg:tracking-[.007em] tracking-[.004em] text-[#1d1d1f]">
          The Apple Store difference.
          <span className="lg:text-2xl text-[32px] lg:leading-[1.14286] leading-[1.125] font-semibold lg:tracking-[.007em] tracking-[.004em] text-[#6e6e73]">
            Even more reasons to shop with us.
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
              spaceBetween:0
            },
            768: {
              slidesPerView: 3,
              spaceBetween:0
            },
            1024: {
              slidesPerView: 4,
              spaceBetween:-250
            },
          }}
        >
          <SwiperSlide>
            <Link href="/" className="flex h-[14.11765rem] mr-3 lg:translate-x-36">
              <div className="w-[18.41176rem] h-auto p-5 bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)]">
                <div className="w-full h-12">
                  <svg
                    height="56"
                    viewBox="0 0 49 56"
                    width="49"
                    class="as-svgicon as-svgicon-boxtruck as-svgicon-elevated"
                    aria-hidden="true"
                    role="img"
                  >
                    <path d="m0 0h49v56h-49z" fill="none"></path>
                    <path
                      d="m47.8447 27.501-6.6757-7.1289a4.37 4.37 0 0 0 -3.4854-1.3721h-4.6836v-4a5 5 0 0 0 -5-5h-23a5 5 0 0 0 -5 5v21a5 5 0 0 0 5 5h1.15a5.6216 5.6216 0 0 0 11.2 0h13.8a5.6216 5.6216 0 0 0 11.2 0h2.6436c2.5464 0 4.0064-1.4092 4.0064-3.8657v-6.7515a4.15 4.15 0 0 0 -1.1553-2.8818zm-32.5202 13.499a3.6068 3.6068 0 0 1 -7.1489 0 3.2083 3.2083 0 0 1 .2844-2 3.6251 3.6251 0 0 1 6.9155 1.5 3.5555 3.5555 0 0 1 -.051.5zm15.6755-2h-13.8335a5.6187 5.6187 0 0 0 -10.833 0h-1.3335a3.0033 3.0033 0 0 1 -3-3v-21a3.0033 3.0033 0 0 1 3-3h23a3.0033 3.0033 0 0 1 3 3zm9.3245 2a3.6068 3.6068 0 0 1 -7.1489 0 3.2083 3.2083 0 0 1 .2839-2 3.6251 3.6251 0 0 1 6.9155 1.5 3.5555 3.5555 0 0 1 -.0505.5zm6.6755-3.8657c0 1.3257-.581 1.8657-2.0068 1.8657h-2.8267a5.6127 5.6127 0 0 0 -9.1665-2.6843v-15.3157h4.6836a2.4292 2.4292 0 0 1 2.03.7437l6.6875 7.1411a2.18 2.18 0 0 1 .5989 1.498zm-3.3913-8.0216a1.2119 1.2119 0 0 1 .3913.8873h-7.7773a1.1432 1.1432 0 0 1 -1.2227-1.2324v-5.7676h2.4131a1.6822 1.6822 0 0 1 1.3364.6244z"
                      fill="#6CCA4E"
                    ></path>
                  </svg>
                </div>
                <div className="w-auto mt-4">
                  <p className="text-2xl leading-[1.16667] font-semibold tracking-[.009em] text-[#1d1d1f]">
                    Enjoy
                    <span className="text-[#68cc45]">
                      two-hour delivery
                    </span>{" "}
                    from an Apple Store,{" "}
                    <span className="text-[#68cc45]">free delivery</span> ,or{" "}
                    <span className="text-[#68cc45]">easy pickup.²</span>
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/" className="flex h-[14.11765rem] mr-3 lg:translate-x-36">
              <div className="w-[18.41176rem] h-auto p-5 bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)]">
                <div className="w-full h-12">
                  <svg
                    viewBox="0 0 43 56"
                    width="49"
                    height="56"
                    xmlns="http://www.w3.org/2000/svg"
                    class="as-svgicon as-svgicon-financing as-svgicon-elevated as-svgicon-financingelevated"
                    aria-hidden="true"
                    role="img"
                  >
                    <path d="m0 0h43v56h-43z" fill="none"></path>
                    <path
                      d="m38.5 27a.99974.99974 0 0 0 -1 1v11a5.00588 5.00588 0 0 1 -5 5h-22a5.00588 5.00588 0 0 1 -5-5v-3.83594l1.543 1.543a.99989.99989 0 1 0 1.414-1.41406l-3.25-3.25a.99962.99962 0 0 0 -1.41406 0l-3.25 3.25a.99989.99989 0 1 0 1.41406 1.414l1.543-1.543v3.836a7.00818 7.00818 0 0 0 7 7h22a7.00818 7.00818 0 0 0 7-7v-11a.99974.99974 0 0 0 -1-1z"
                      fill="#007AFF"
                    ></path>
                    <path
                      d="m28.17188 32.71533a.31074.31074 0 0 0 -.35157.35156q0 .334.35157.334h2.62792a.29915.29915 0 0 0 .34278-.334.30692.30692 0 0 0 -.34278-.35156z"
                      fill="#007AFF"
                    ></path>
                    <path
                      d="m30.60156 21.32031a1.92007 1.92007 0 0 0 -1.40136-.47021h-15.75a1.94085 1.94085 0 0 0 -1.376.47021 1.81128 1.81128 0 0 0 -.50488 1.39307v10.43262h-.92481a.95033.95033 0 0 0 -.70312.29443 1.00858 1.00858 0 0 0 0 1.41553.9536.9536 0 0 0 .70312.29394h20.74416a1.96828 1.96828 0 0 0 1.415-.51855 1.78331 1.78331 0 0 0 .54492-1.35352v-8.376a1.78328 1.78328 0 0 0 -.54492-1.35352 1.96828 1.96828 0 0 0 -1.415-.51855h-.30762v-.31641a1.8689 1.8689 0 0 0 -.47949-1.39304zm-4.99609 3.58155v8.24414h-12.62109v-10.03711a.74576.74576 0 0 1 .84374-.84375h14.99415a.85949.85949 0 0 1 .63281.21093.827.827 0 0 1 .19971.55372h-2.08936a1.96828 1.96828 0 0 0 -1.415.51855 1.78328 1.78328 0 0 0 -.54496 1.35352zm5.53711-.334v-.35156h.09668a.94481.94481 0 0 1 .67676.23291.83527.83527 0 0 1 .24609.63721v8.00683a.83528.83528 0 0 1 -.24609.63721.94481.94481 0 0 1 -.67676.23291h-3.51563a.95761.95761 0 0 1 -.68554-.23291.83525.83525 0 0 1 -.2461-.63721v-8.00682a.83524.83524 0 0 1 .2461-.63721.95761.95761 0 0 1 .68554-.23291h.09668v.35156a.52959.52959 0 0 0 .14063.37793.48342.48342 0 0 0 .36914.14941h2.30273a.48342.48342 0 0 0 .36914-.14941.52959.52959 0 0 0 .14063-.37793z"
                      fill="#007AFF"
                    ></path>
                    <path
                      d="m42.457 19.293a.99962.99962 0 0 0 -1.41406 0l-1.543 1.543v-3.836a7.00818 7.00818 0 0 0 -7-7h-22a7.00818 7.00818 0 0 0 -7 7v11a1 1 0 0 0 2 0v-11a5.00588 5.00588 0 0 1 5-5h22a5.00588 5.00588 0 0 1 5 5v3.83594l-1.543-1.543a.99989.99989 0 0 0 -1.41394 1.41406l3.25 3.25a.99963.99963 0 0 0 1.41406 0l3.25-3.25a.99962.99962 0 0 0 -.00006-1.414z"
                      fill="#007AFF"
                    ></path>
                  </svg>
                </div>
                <div className="w-auto mt-4">
                  <p className="text-2xl leading-[1.16667] font-semibold tracking-[.009em] text-[#1d1d1f]">
                    <span className="text-[#007aff]">
                      Trade in your current device.
                    </span>{" "}
                    Get credit toward a new one.<sup>3</sup>
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/" className="flex h-[14.11765rem] mr-3 lg:translate-x-36">
              <div className="w-[18.41176rem] h-auto p-5 bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)]">
                <div className="w-full h-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 42 56"
                    width="42"
                    height="56"
                    class="as-svgicon as-svgicon-financing as-svgicon-elevated as-svgicon-financingelevated"
                    aria-hidden="true"
                    role="img"
                  >
                    <g>
                      <rect width="42" height="56" fill="none"></rect>
                      <path
                        d="M37,12H5a5.006,5.006,0,0,0-5,5V39a5.006,5.006,0,0,0,5,5H37a5.006,5.006,0,0,0,5-5V17A5.006,5.006,0,0,0,37,12ZM5,14H37a3,3,0,0,1,3,3v3H2V17A3,3,0,0,1,5,14ZM37,42H5a3,3,0,0,1-3-3V24H40V39A3,3,0,0,1,37,42ZM6,33.5v-4A1.5,1.5,0,0,1,7.5,28h6A1.5,1.5,0,0,1,15,29.5v4A1.5,1.5,0,0,1,13.5,35h-6A1.5,1.5,0,0,1,6,33.5Z"
                        fill="#6cca4e"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="w-auto mt-4">
                  <p className="text-2xl leading-[1.16667] font-semibold tracking-[.009em] text-[#1d1d1f]">
                    Pay in full or{" "}
                    <span className="text-[#68cc45]">pay over time.</span> Your
                    choice.
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/" className="flex h-[14.11765rem] mr-3 lg:translate-x-36">
              <div className="w-[18.41176rem] h-auto p-5 bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)]">
                <div className="w-full h-12">
                  <svg
                    width="36px"
                    height="36px"
                    viewBox="0 0 36 36"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      id="Frictionless-Notification-AOS-Store-Card"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Card-L-V1"
                        transform="translate(-30.000000, -28.000000)"
                        fill="#0066CC"
                      >
                        <g
                          id="applestoreapp.logo_elevated"
                          transform="translate(30.000000, 28.000000)"
                        >
                          <path
                            d="M14.1387,11 C14.3327,9.15 15.9797,7.695 17.9997,7.695 C20.0207,7.695 21.6667,9.15 21.8617,11 L14.1387,11 Z M17.9837,16.698 C17.9837,16.257 18.1447,15.851 18.4747,15.469 C18.6437,15.274 18.8477,15.122 19.1017,14.995 C19.3467,14.868 19.5837,14.792 19.8137,14.783 C19.8217,14.842 19.8217,14.902 19.8217,14.961 C19.8217,15.41 19.6597,15.842 19.3387,16.232 C18.9497,16.698 18.4997,16.91 17.9917,16.867 C17.9837,16.816 17.9837,16.757 17.9837,16.698 L17.9837,16.698 Z M21.5407,21.849 C21.4067,22.163 21.2447,22.451 21.0677,22.722 C20.8217,23.086 20.6177,23.34 20.4567,23.476 C20.2197,23.705 19.9567,23.823 19.6777,23.832 C19.4827,23.832 19.2377,23.772 18.9567,23.654 C18.6777,23.535 18.4147,23.476 18.1777,23.476 C17.9327,23.476 17.6697,23.535 17.3817,23.654 C17.0937,23.772 16.8657,23.832 16.6867,23.84 C16.4237,23.849 16.1607,23.73 15.8907,23.476 C15.7207,23.323 15.5087,23.069 15.2547,22.696 C14.9847,22.298 14.7637,21.849 14.5857,21.324 C14.3997,20.765 14.3057,20.214 14.3057,19.688 C14.3057,19.087 14.4337,18.57 14.6877,18.13 C14.8817,17.782 15.1537,17.503 15.4837,17.299 C15.8227,17.096 16.1787,16.994 16.5687,16.986 C16.7807,16.986 17.0597,17.045 17.4077,17.181 C17.7457,17.316 17.9657,17.384 18.0677,17.384 C18.1447,17.384 18.3897,17.308 18.8047,17.147 C19.1947,17.003 19.5337,16.943 19.8047,16.969 C20.5417,17.028 21.0927,17.325 21.4647,17.867 C20.8047,18.282 20.4737,18.858 20.4827,19.595 C20.4917,20.171 20.6947,20.654 21.0837,21.027 C21.2707,21.205 21.4737,21.341 21.6947,21.434 C21.6517,21.578 21.5917,21.713 21.5407,21.849 L21.5407,21.849 Z M25.4997,11 L22.9617,11 C22.7677,8.54 20.6327,6.595 17.9997,6.595 C15.3677,6.595 13.2327,8.54 13.0377,11 L10.4997,11 C9.1187,11 7.9997,12.119 7.9997,13.5 L7.9997,27.5 C7.9997,28.881 9.1187,30 10.4997,30 L25.4997,30 C26.8807,30 27.9997,28.881 27.9997,27.5 L27.9997,13.5 C27.9997,12.119 26.8807,11 25.4997,11 L25.4997,11 Z M28.9997,0 L6.9997,0 C3.1337,0 -0.0003,3.134 -0.0003,7 L-0.0003,29 C-0.0003,32.866 3.1337,36 6.9997,36 L28.9997,36 C32.8667,36 35.9997,32.866 35.9997,29 L35.9997,7 C35.9997,3.134 32.8667,0 28.9997,0 L28.9997,0 Z M28.9997,2 C31.7567,2 33.9997,4.243 33.9997,7 L33.9997,29 C33.9997,31.757 31.7567,34 28.9997,34 L6.9997,34 C4.2427,34 1.9997,31.757 1.9997,29 L1.9997,7 C1.9997,4.243 4.2427,2 6.9997,2 L28.9997,2 L28.9997,2 Z"
                            id="Fill-1"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="w-auto mt-4">
                  <p className="text-2xl leading-[1.16667] font-semibold tracking-[.009em] text-[#1d1d1f]">
                    Get a{" "}
                    <span className="text-[#007aff]">
                      personalized shopping
                    </span>{" "}
                    experience in the{" "}
                    <span className="text-[#007aff]">Apple Store app.</span>
                    Your choice.
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/" className="flex h-[14.11765rem] mr-3 lg:translate-x-36">
              <div className="w-[18.41176rem] h-auto p-5 bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)]">
                <div className="w-full h-12">
                  <svg
                    height="56"
                    viewBox="0 0 35 35"
                    width="56"
                    class="as-svgicon as-svgicon-personalization as-svgicon-elevated as-svgicon-personalizationelevated"
                    role="img"
                    aria-hidden="true"
                  >
                    <path d="m0 0h35v35h-35z" fill="none"></path>
                    <path
                      d="m17.5 6.1a11.4 11.4 0 1 1 -11.4 11.4 11.4129 11.4129 0 0 1 11.4-11.4m0-1.1a12.5 12.5 0 1 0 12.5 12.5 12.5 12.5 0 0 0 -12.5-12.5zm3.7707 11.3121a1.213 1.213 0 0 0 .9343-.4539 1.8075 1.8075 0 0 0 0-2.269 1.213 1.213 0 0 0 -.9343-.4539 1.2009 1.2009 0 0 0 -.921.4539 1.7981 1.7981 0 0 0 0 2.2624 1.1946 1.1946 0 0 0 .921.4605zm-7.5547 0a1.2454 1.2454 0 0 0 .9476-.4605 1.764 1.764 0 0 0 .0067-2.2624 1.2454 1.2454 0 0 0 -.9543-.4539 1.1813 1.1813 0 0 0 -.9143.4539 1.8311 1.8311 0 0 0 0 2.269 1.1813 1.1813 0 0 0 .9143.4539zm11.9727 2.2157a.655.655 0 0 0 -.6407-.08 27.5372 27.5372 0 0 1 -3.6906.861 24.1545 24.1545 0 0 1 -3.8507.3 24.2809 24.2809 0 0 1 -3.8575-.3 26.9794 26.9794 0 0 1 -3.6839-.861.6922.6922 0 0 0 -.6607.08.6079.6079 0 0 0 -.18.6139 7.7434 7.7434 0 0 0 1.4015 3.6306 8.5219 8.5219 0 0 0 2.9765 2.5961 8.3779 8.3779 0 0 0 4.0043.9677 8.35 8.35 0 0 0 3.9909-.9677 8.5849 8.5849 0 0 0 2.9832-2.5961 7.5976 7.5976 0 0 0 1.3948-3.6306.6384.6384 0 0 0 -.1871-.6139zm-1.4815 2.83a23.8689 23.8689 0 0 1 -3.3169.7008 24.6667 24.6667 0 0 1 -3.3836.2335 24.8628 24.8628 0 0 1 -3.3837-.2335 23.7823 23.7823 0 0 1 -3.33-.7008 6.2135 6.2135 0 0 1 -.694-1.8686 27.7532 27.7532 0 0 0 3.6171.7875 25.529 25.529 0 0 0 3.7908.28 25.5717 25.5717 0 0 0 3.784-.28 27.1787 27.1787 0 0 0 3.61-.7875 6.0407 6.0407 0 0 1 -.6937 1.8682z"
                      fill="#AB39FF"
                    ></path>
                  </svg>
                </div>
                <div className="w-auto mt-4">
                  <p className="text-2xl leading-[1.16667] font-semibold tracking-[.009em] text-[#1d1d1f]">
                    Make them yours.{" "}
                    <span className="text-[#AB39FF]">
                      Engrave a mix of emoji, names, and numbers for free.
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/" className="flex h-[14.11765rem] mr-3 lg:translate-x-36">
              <div className="w-[18.41176rem] h-auto p-5 bg-white rounded-[18px] shadow-[2px_4px_12px_rgba(0,0,0,.08)]">
                <div className="w-full h-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 29 56"
                    width="49"
                    height="56"
                    class="as-svgicon as-svgicon-applelogo as-svgicon-elevated"
                    aria-hidden="true"
                    role="img"
                  >
                    <g>
                      <rect width="29" height="56" fill="none"></rect>
                      <g>
                        <path
                          id="path2324"
                          d="m 14.9,14.43 a 2.581,2.581 0 0 1 -0.472,-0.045 3.083,3.083 0 0 1 -0.067,-0.629 7.531,7.531 0 0 1 1.909,-4.694 7.76,7.76 0 0 1 5.1,-2.628 3.329,3.329 0 0 1 0.067,0.7 7.745,7.745 0 0 1 -1.837,4.825 6.728,6.728 0 0 1 -4.7,2.471 z m 12.807,3.818 a 7.851,7.851 0 0 0 -3.751,6.6 7.64,7.64 0 0 0 4.649,7.008 18.257,18.257 0 0 1 -2.381,4.919 c -1.482,2.134 -3.032,4.268 -5.391,4.268 -2.359,0 -2.965,-1.37 -5.683,-1.37 -2.65,0 -3.594,1.415 -5.75,1.415 -2.156,0 -3.661,-1.977 -5.391,-4.4 A 21.279,21.279 0 0 1 0.395,25.211 c 0,-6.738 4.38,-10.31 8.692,-10.31 2.291,0 4.2,1.5 5.638,1.5 1.37,0 3.5,-1.595 6.109,-1.595 a 8.172,8.172 0 0 1 6.873,3.442 z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="w-auto mt-4">
                  <p className="text-2xl leading-[1.16667] font-semibold tracking-[.009em] text-[#1d1d1f]">
                    <span className="customize-text">Customize</span> your Mac
                    and create your own style of Apple Watch.
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
