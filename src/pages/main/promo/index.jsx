import Links from "@/components/link";
import Link from "next/link";
import Image from "next/image";

export default function Promo() {
  return (
    <section className="bg-white grid lg:grid-cols-2 gap-5 lg:p-3 p-2 lg:pt-[80px] pt-[140px]">
      <div className="relative bg-[#fbfbfd]">
        <Link className="absolute left-0 w-full h-screen z-[3]" href="/"></Link>
        <div className="text-[#f5f5f7] w-full lg:h-[580px] h-[56vh]">
          <div className="flex-col flex overflow-hidden bg-[#fbfbfd]">
            <article className="relative z-[4] flex-grow mt-14 text-center">
              <h4 className="flex items-center justify-center mb-1">
                <span className="text-[40px] leading-[1] font-semibold">
                  İpad Pro
                </span>
              </h4>
              <p className="flex items-center justify-center font-light lg:text-[21px]">
                <span>Supercharged by</span>
                <Image
                  className="w-9 h-9"
                  width={37}
                  height={37}
                  src="https://www.apple.com/v/home/be/images/logos/ipad-pro/promo_m2_chip__enw2kz91lsuq_large_2x.png"
                />
              </p>
              <Links />
            </article>
            <div className="absolute top-0 left-0 w-full h-full z-[1]">
              <Image
                className="w-[1262px] h-[580px] bg-auto hidden lg:block"
                width={1262}
                height={580}
                src="https://www.apple.com/v/home/be/images/promos/ipad-pro/promo_ipadpro_refresh__evi9utuixwuq_large_2x.jpg"
              />
              <Image
                className="w-[734px] h-[538px] bg-auto block lg:hidden"
                width={734}
                height={538}
                src="https://www.apple.com/v/home/be/images/promos/ipad-pro/promo_ipadpro_refresh__evi9utuixwuq_small.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-[#fbfbfd]">
        <Link className="absolute left-0 w-full h-screen z-[3]" href="/"></Link>
        <div className="text-[#1d1d1f] w-full lg:h-[580px] h-[56vh]">
          <div className="flex-col flex overflow-hidden bg-[#fbfbfd]">
            <article className="z-[4] flex-grow mt-14 text-center absolute lg:bottom-14 lg:left-[26%] left-[12%] bottom-5">
              <h4 className="flex items-center justify-center">
                <Image
                  className="w-[196px] h-[41px]"
                  width={196}
                  height={41}
                  src="https://www.apple.com/v/home/be/images/logos/apple-vision-pro/promo_logo_apple_vision_pro__90zi46p7dc2y_large_2x.png"
                />
              </h4>
              <p className="font-light lg:text-[21px] mb-3">
                Welcome to the era of spatial computing.
              </p>
              <span className="mb-3 text-base text-[#6e6e73]">
                Available early next year in the U.S.
              </span>
              <Links />
            </article>
            <div className="absolute top-0 left-0 w-full h-full z-[1]">
              <Image
                className="w-[1262px] h-[580px] bg-auto hidden lg:block"
                width={1262}
                height={580}
                src="https://www.apple.com/v/home/be/images/promos/apple-vision-pro/promo_apple_vision_pro__f4v4zp0sum2y_large.jpg"
              />
              <Image
                className="w-[734px] h-[538px] bg-auto block lg:hidden"
                width={734}
                height={538}
                src="https://www.apple.com/v/home/be/images/promos/apple-vision-pro/promo_apple_vision_pro__f4v4zp0sum2y_small.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-[#fbfbfd]">
        <Link className="absolute left-0 w-full h-screen z-[3]" href="/"></Link>
        <div className="text-[#1d1d1f] w-full lg:h-[580px] h-[56vh]">
          <div className="flex-col flex overflow-hidden bg-[#fbfbfd]">
            <article className="relative z-[4] flex-grow mt-14 text-center">
              <h4 className="flex items-center justify-center">
                <span className="text-[40px] leading-[1] font-semibold mb-3">
                  MacBook Air 15”
                </span>
              </h4>
              <p className="font-light lg:text-[21px] leading-[1.2381]">
                Impressively big. Impossibly thin.
              </p>
              <Links />
            </article>
            <div className="absolute top-0 left-0 w-full h-full z-[1]">
              <Image
                className="w-[1262px] h-[580px] bg-auto hidden lg:block"
                width={1262}
                height={580}
                src="https://www.apple.com/v/home/be/images/promos/macbook-air-15/promo_macbook_air_15_midnight__3zojl1nanrme_large_2x.jpg"
              />
              <Image
                className="w-[734px] h-[538px] bg-auto block lg:hidden"
                width={734}
                height={538}
                src="https://www.apple.com/v/home/be/images/promos/macbook-air-15/promo_macbook_air_15_midnight__3zojl1nanrme_small.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-[#fbfbfd]">
        <Link className="absolute left-0 w-full h-screen z-[3]" href="/"></Link>
        <div className="text-[#f5f5f7] w-full lg:h-[580px] h-[56vh]">
          <div className="flex-col flex overflow-hidden bg-[#fbfbfd]">
            <article className="relative z-[4] flex-grow mt-14 text-center">
              <h4 className="flex items-center justify-center">
                <span className="text-[40px] leading-[1] font-semibold mb-3">
                  AirPods Pro
                </span>
              </h4>
              <p className="font-light lg:text-[21px] leading-[1.2381]">
                Adaptive Audio. Now playing.
              </p>
              <Links />
            </article>
            <div className="absolute top-0 left-0 w-full h-full z-[1]">
              <Image
                className="w-[1262px] h-[580px] bg-auto hidden lg:block"
                width={1262}
                height={580}
                src="https://www.apple.com/v/home/be/images/promos/airpods-pro/promo_airpods_pro_order__d8xv36p4uwae_large_2x.jpg"
              />
              <Image
                className="w-[734px] h-[538px] bg-auto block lg:hidden"
                width={734}
                height={538}
                src="https://www.apple.com/v/home/be/images/promos/airpods-pro/promo_airpods_pro_order__d8xv36p4uwae_small.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-[#fbfbfd]">
        <Link className="absolute left-0 w-full h-screen z-[3]" href="/"></Link>
        <div className="text-[#1d1d1f] w-full lg:h-[580px] h-[56vh]">
          <div className="flex-col flex overflow-hidden bg-[#fbfbfd]">
            <article className="relative z-[4] flex-grow mt-14 text-center">
              <h4 className="flex items-center justify-center mb-3">
                <Image
                  className="w-[155px] h-[32px]"
                  width={155}
                  height={32}
                  src="https://www.apple.com/v/home/be/images/logos/iphone-tradein/logo_tradein__d1fpktgipvki_large_2x.png"
                />
              </h4>
              <p className="font-light lg:text-[21px] leading-[1.2381]">
                Get $200-$650 in credit when <br />
                you trade in iPhone 11 or higher.
              </p>
              <Links />
            </article>
            <div className="absolute top-0 left-0 w-full h-full z-[1]">
              <Image
                className="w-[1262px] h-[580px] bg-auto hidden lg:block"
                width={1262}
                height={580}
                src="https://www.apple.com/v/home/be/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_large_2x.jpg"
              />
              <Image
                className="w-[734px] h-[538px] bg-auto block lg:hidden"
                width={734}
                height={538}
                src="https://www.apple.com/v/home/be/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_small.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-[#fbfbfd]">
        <Link className="absolute left-0 w-full h-screen z-[3]" href="/"></Link>
        <div className="text-[#1d1d1f] w-full lg:h-[580px] h-[56vh]">
          <div className="flex-col flex overflow-hidden bg-[#fbfbfd]">
            <article className="relative z-[4] flex-grow mt-14 text-center">
              <h4 className="flex items-center justify-center mb-3">
                <Image
                  className="w-[108px] h-[33px]"
                  width={108}
                  height={33}
                  src="https://www.apple.com/v/home/be/images/logos/apple-card/logo__dcojfwkzna2q_large_2x.png"
                />
              </h4>
              <p className="font-light lg:text-[21px] leading-[1.2381]">
                Get up to 3% Daily Cash back <br />
                with every purchase.
              </p>
              <Links />
            </article>
            <div className="absolute top-0 left-0 w-full h-full z-[1]">
              <Image
                className="w-[1262px] h-[580px] bg-auto hidden lg:block"
                width={1262}
                height={580}
                src="https://www.apple.com/v/home/be/images/promos/apple-card/tile__cauwwcyyn9hy_large_2x.jpg"
              />
              <Image
                className="w-[734px] h-[538px] bg-auto block lg:hidden"
                width={734}
                height={538}
                src="https://www.apple.com/v/home/be/images/promos/apple-card/tile__cauwwcyyn9hy_small.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
