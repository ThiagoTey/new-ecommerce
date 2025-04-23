import { ProductType } from "@/types/ProductType";
import ProductImage from "./ProductImage";
import Link from "next/link";
import Button from "../ui/Button";

type Props = {
  product: ProductType;
  small?: boolean;
};

const ProductCard = ({ product, small = false }: Props) => {
  return (
    <div
      className={`border w-full border-gray-300 h-full cursor-pointer relative rounded-2xl p-2 transition-all duration-200 product_shadow flex flex-col ${
        small ? "lg:max-w-[275px]" : "lg:max-w-[280px]"
      }`}
    >
      {/* Botão de novo produto */}
      <span className="absolute z-10 text-xs bg-sky-900 rounded-sm h-fit text-white px-2 py-1">NOVO</span>

      <Link href={`/product/${product.id}`}>
        {/* Imagem responsiva */}
        <div
          className={`relative aspect-square w-full ${
            small ? "lg:w-full" : "lg:w-full"
          } `}
          style={{ aspectRatio: "1 / 1" }}
        >
          <ProductImage product={product} fill />
        </div>

        {/* Informações do produto */}
        <div className="flex flex-col gap-2 mt-2 text-center lg:text-left">
          <p className="font-light md:h-12 text-sm sm:text-base overflow-hidden text-ellipsis line-clamp-2">
            {product.title}
          </p>
          {/* Preço */}
          <div className="flex gap-4">
            <div>
              <p className="text-sm font-light line-through">
                R$ {(product.price * 1.1).toFixed(2)}
              </p>
              <p className="font-semibold sm:text-base">
                R$ {product.price.toFixed(2)}
              </p>
            </div>
            <span className="text-xs bg-sky-700  rounded-sm h-fit text-white px-2 py-1">
              10% OFF
            </span>
          </div>
        </div>
      </Link>
      <Button black className="rounded-xl bg-stone-950 mt-2">
        Comprar
      </Button>
    </div>
  );
};

export default ProductCard;
