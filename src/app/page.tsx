import HeroSlider from "@/components/layout/HeroSlider";
import ProductContainer from "@/components/product/ProductContainer";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <ProductContainer title="NOVIDADES" />
    </main>
  );
}
