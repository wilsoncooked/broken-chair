import Image from "next/image";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "@/graphql/queries";

export default function Home() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.products.map((product: any) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <Image
              src={product.photos[0].url}
              alt="chair"
              width={product.photos[0].width}
              height={product.photos[0].width}
              placeholder="blur"
              blurDataURL={product.photos[0].url}
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
