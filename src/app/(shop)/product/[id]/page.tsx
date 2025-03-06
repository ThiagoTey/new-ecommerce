import Container from "@/components/layout/Container";
import ProductDetails from "@/components/product/ProductDetails";
import ProductImages from "@/components/product/ProductImages";

async function getProduct(productId: string) {
  const apiLink = `https://fakestoreapi.com/products/${productId}`;
  const res = await fetch(apiLink);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Product = async ({ params }: { params: { id: string } }) => {
  const product = await getProduct(params.id);
  console.log(product);
  return (
    <main>
      <Container className="mt-16 flex gap-8">
        <ProductImages />
        <ProductDetails />
      </Container>
    </main>
  );
};

export default Product;
