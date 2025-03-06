
async function getProduct(productId : string) {
  const apiLink = `https://fakestoreapi.com/products/${productId}`
  const res = await fetch(apiLink);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Product = async ({params} : {params: { id: string };}) => {
  const product = await getProduct(params.id);
  console.log(product);
  return (
    <div>Product</div>
  )
}

export default Product