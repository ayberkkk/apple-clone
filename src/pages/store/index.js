import Breadline from "./pages/breadline";
import Product from "./pages/products";

export default function Home() {
  return (
    <main id="main" className="relative max-w-[2560px] m-auto z-10">
      <Breadline />
      <Product />
    </main>
  );
}
