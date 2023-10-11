import Links from "@/components/link";
import Image from "next/image";
import Link from "next/link";

export default function Hero3() {
  return (
    <section className="bg-black relative w-full lg:h-[80vh] h-[50vh]">
      <Link className=" absolute left-0 w-full h-screen z-10" href="/"></Link>
      <div className="top-11 h-11 text-white text-center py-14">
        <article className="relative z-[4] flex-grow-0">
          <h2 className="text-[30px] lg:text-[45px] leading-[1.07143] font-semibold text-[#f5f5f7]">
            <div className="flex items-center justify-center gap-3">
              <svg viewBox="0 0 14 44" className="w-3 lg:w-10 text-white">
                <path
                  fill="currentColor"
                  d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"
                ></path>
              </svg>
              WATCH
            </div>
          </h2>
          <span className="text-[10px] lg:text-[20px] leading-[1.07143] font-semibold text-red-700 absolute lg:top-24 lg:left-[48%] left-[44%]">
            SERIES 9
          </span>
          <h3 className="text-[12px] lg:text-[28px] leading-[1.10722] font-normal lg:mt-2 mt-5">
            Titanyum. Çok güçlü. Çok hafif. Çok Pro.
          </h3>
          <Links />
        </article>
        <div className="absolute top-0 left-0 w-full h-full z-[1]">
          <Image
            className="hidden lg:block w-[3008px] h-[736px] bg-[length:3008px_736px]"
            width={3008}
            height={736}
            src="https://www.apple.com/v/home/be/images/heroes/apple-watch-series-9/hero_apple_watch_series_9_order__d0fi9mb84dci_largetall.jpg"
          />
          <Image
            className="w-[734px] h-[548px] lg:hidden block"
            width={734}
            height={548}
            src="https://www.apple.com/tr/home/built_includes/heroes/apple-watch-series-9/images/hero_apple_watch_series_9_order__d0fi9mb84dci_small.jpg"
          />
        </div>
      </div>
    </section>
  );
}
