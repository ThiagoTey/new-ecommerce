import Container from "@/components/layout/Container";
import ProductContainer from "@/components/product/ProductContainer";
import ProductDescription from "@/components/product/ProductDescription";
import ProductDetails from "@/components/product/ProductDetails";
import ProductImages from "@/components/product/ProductImages";
import SplitBar from "@/components/ui/SplitBar";

async function getProduct(productId: string) {
  const apiLink = `https://fakestoreapi.com/products/${productId}`;
  const res = await fetch(apiLink);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Product = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product = await getProduct(id);
  const products = await getProducts();
  return (
    <main>
      <Container className="mt-16 flex gap-8">
        <ProductImages product={product} />
        <ProductDetails product={product} />
      </Container>
      {/* Parte de baixo */}
      <Container className="mt-16">
        <p className="font-bold text-xl">Descrição do produto</p>
        <SplitBar />
        <ProductDescription />
      </Container>

      <div className="mt-16 h-1" />
      <ProductContainer
        products={products.slice(0, 4)}
        showMoreButton={false}
        title="Você também pode gostar"
      />
    </main>
  );
};

export default Product;
