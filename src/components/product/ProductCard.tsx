import { ProductType } from "@/types/ProductType";
import ProductImage from "./ProductImage";

type Props = {
  product: ProductType;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="cursor-pointer rounded-2xl border-[1px] border-transparent hover:border-gray-700 p-2">
      <div className="relative w-[300px] h-[300px]">
        <ProductImage product={product} fill />
      </div>
      <div className="max-w-[300px] max-h-[300px] flex flex-col gap-2 mt-2">
        <p className="font-semibold text-xl">{product.title}</p>
        <p className="font-bold text-2xl">R$ {product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
