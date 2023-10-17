import Accessories from "./pages/accessories";
import AppleStore from "./pages/apple-store";
import Breadline from "./pages/breadline";
import Experience from "./pages/experience";
import Latest from "./pages/latest";
import Product from "./pages/products";
import Special from "./pages/special";

export default function Home() {
  return (
    <main id="main" className="relative max-w-[2560px] m-auto z-10">
      <Breadline />
      <Product />
      <Latest/>
      <AppleStore/>
      <Accessories/> 
      <Experience/>
      <Special/>
    </main>
  );
}
