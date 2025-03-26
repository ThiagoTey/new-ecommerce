import CategoriesContainer from "@/components/category/CategoriesContainer";
import HeroSlider from "@/components/layout/HeroSlider";
import ProductContainer from "@/components/product/ProductContainer";
import ProductSlider from "@/components/product/ProductSlider";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {

  const products = await getProducts();

  return (
    <main>
      <HeroSlider />
      <ProductSlider products={products.slice(0, 8)} title="NOVIDADES" />
      <ProductContainer products={products.slice(8, 16)}  title="MAIS VENDIDOS" />
      <CategoriesContainer />
    </main>
  );
}
