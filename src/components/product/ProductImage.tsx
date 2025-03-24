'use client'

import { useState } from "react"
import Image from "next/image";

import { ProductType } from "@/types/ProductType"

type Props = {
  product: ProductType;
  fill?: boolean;
}

const ProductImage = ({ product, fill }: Props) => {
  const [loading, setLoading] = useState(true)

  return fill ? (
    <Image 
      src={product.image} 
      fill 
      alt={product.title} 
      className={`object-contain  aspect-square
      ${loading ? 'scale-110 blur-3xl grayscale'
      : 'scale-100 blur-0 grayscale-0 '
      }`} 
      onLoad={() => setLoading(false)}
    />
  ) : (
    <Image 
      src={product.image} 
      width={400}
      height={400} 
      alt={product.title} 
      className={`object-contain 
      ${loading ? 'scale-110 blur-3xl grayscale'
      : 'scale-100 blur-0 grayscale-0'
      }`} 
      onLoadingComplete={() => setLoading(false)}
  />
  )
}

export default ProductImage