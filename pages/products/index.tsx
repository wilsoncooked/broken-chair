import Image from "next/image";
import { GET_PRODUCTS } from "@/graphql/queries";
import apolloClient from "@/lib/apolloClient";

export default function Home({ products }: { products: any }) {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product: any) => (
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
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const client = apolloClient();

  const { data } = await client.query({
    query: GET_PRODUCTS,
  });

  return {
    props: {
      products: data.products,
    },
  };
}
