import Headline from "@/pages/headline";
import Headline2 from "@/pages/headline2";
import Headline3 from "@/pages/headline3";
import Promo from "@/pages/promo";
import Slider from "@/pages/slider";
export default function Home() {
  return (
    <main id="content" className="relative max-w-[2560px] m-auto z-10">
      <Headline />
      <Headline2 />
      <Headline3 />
      <Promo />
      <Slider />
    </main>
  );
}
