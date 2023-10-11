import Headline from "@/pages/headline/index";
import Headline2 from "@/pages/headline2/index";
import Headline3 from "@/pages/headline3/index";
export default function Home() {
  return (
    <main id="content" className="relative max-w-[2560px] m-auto">
      <Headline />
      <Headline2 />
      <Headline3 />
    </main>
  );
}
