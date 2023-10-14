import Headline from "@/pages/main/headline";
import Headline2 from "@/pages/main/headline2";
import Headline3 from "@/pages/main/headline3";
import Promo from "@/pages/main/promo";
import Slider from "@/pages/main/slider";
export default function Home() {
  return (
    <main id="main" className="relative max-w-[2560px] m-auto z-10">
      <Headline />
      <Headline2 />
      <Headline3 />
      <Promo />
      <Slider />
    </main>
  );
}
