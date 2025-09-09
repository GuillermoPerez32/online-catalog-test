import Image from "next/image";
import { AddToCartButton } from "@/components/AddToCartButton";
import { Star } from "lucide-react";
import { getProduct } from "@/api/products";

interface PageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductDetail({ params }: PageProps) {
  const { id } = params;
  const product = await getProduct(id);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="relative h-80 w-full md:h-[28rem]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain rounded-md border bg-secondary"
        />
      </div>
      <div>
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <p className="mt-2 inline-block rounded-full border px-3 py-1 text-xs text-muted-foreground">
          {product.category}
        </p>
        <div className="mt-2 flex items-center text-sm text-muted-foreground">
          <Star className="mr-1 size-4 text-yellow-500 fill-yellow-500" />
          <span className="mr-1">{product.rating.rate.toFixed(1)}</span>
          <span>({product.rating.count})</span>
        </div>
        <p className="mt-4 text-2xl font-bold">${product.price.toFixed(2)}</p>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-6">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
