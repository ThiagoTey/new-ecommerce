import { ProductType } from "@/types/ProductType";
import ProductImage from "./ProductImage";
import Link from "next/link";

type Props = {
  product: ProductType;
  small?: boolean;
};

const ProductCard = ({ product, small = false }: Props) => {
  return (
    <div
      className={`h-full cursor-pointer rounded-2xl p-2 transition-all duration-200 hover:scale-[102%] product_shadow flex flex-col ${
        small ? "lg:max-w-[250px]" : "lg:max-w-[280px]"
      }`}
    >
      <Link href={`/product/${product.id}`}>
        {/* Imagem responsiva */}
        <div
          className={`relative aspect-square w-full  ${
            small ? "lg:w-[225px]" : "lg:w-full"
          } `}
          style={{ aspectRatio: "1 / 1" }}
        >
          <ProductImage product={product} fill />
        </div>

        {/* Informações do produto */}
        <div className="flex flex-col gap-2 mt-2 text-center lg:text-left">
          <p className="font-light md:h-14 text-sm sm:text-lg overflow-hidden text-ellipsis line-clamp-2">
            {product.title}
          </p>
          <p className="font-bold text-normal sm:text-xl">R$ {product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
