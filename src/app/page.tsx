import CategoriesContainer from "@/components/category/CategoriesContainer";
import HeroSlider from "@/components/layout/HeroSlider";
import ProductContainer from "@/components/product/ProductContainer";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <ProductContainer title="NOVIDADES" />
      <ProductContainer title="MAIS VENDIDOS" />
      <CategoriesContainer />
    </main>
  );
}
