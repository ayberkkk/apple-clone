import Links from "@/components/link";
import Image from "next/image";
import Link from "next/link";

export default function Hero2() {
  return (
    <section className="bg-black relative w-full lg:h-[90vh] h-[50vh]  mt-3">
      <Link className=" absolute left-0 w-full h-screen z-10" href="/"></Link>
      <div className="top-11 h-11 text-[#1d1d1f] text-center py-14">
        <article className="relative z-[4] flex-grow-0">
          <h2 className="text-[30px] lg:text-[56px] leading-[1.07143] font-semibold">
            iPhone 15
          </h2>
          <h3 className="text-[12px] lg:text-[28px] leading-[1.10722] font-normal mt-2">
            Yeni tasarım. Yeni kamera. Bambaşka.
          </h3>
          <Links />
        </article>
        <div className="absolute top-0 left-0 w-full h-full z-[1]">
          <Image
            className="hidden lg:block w-[3008px] h-[736px]"
            width={3008}
            height={736}
            src="https://www.apple.com/v/home/be/images/heroes/iphone-15/hero_iphone15_announce__uuemlcwczn6u_largetall_2x.jpg"
          />
          <Image
            className="w-[734px] h-[548px] lg:hidden block"
            width={734}
            height={548}
            src=" https://www.apple.com/v/home/be/images/heroes/iphone-15/hero_iphone15_announce__uuemlcwczn6u_small.jpg"
          />
        </div>
      </div>
    </section>
  );
}
