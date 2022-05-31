import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import Title from "../../../lib/title";
import Fade from "react-reveal/Fade";

function Products() {
  const { product } = useSelector((state) => state.products);

  return (
    <div className="container py-24">
      <Title text={"MORE PRODUCTS"} />
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {product.map((value, key) => (
          <Fade key={key} bottom>
            <div className="px-3 py-10">
              <div className="relative w-full imgProduct">
                <Link href={"/ProductDetails/" + value.id}>
                  <img src={value.image} width={460} height={460} />
                </Link>
                <Link href={"/ProductDetails/" + value.id}>
                  <button className="bg-white uppercase text-blacks text-xs absolute left-1/2 -translate-x-1/2 bottom-2 invisible w-11/12 py-3 transition-all duration-200 opacity-0 btnProducts">
                    Explore MUGS
                  </button>
                </Link>
              </div>
              <div className="text-center pt-10">
                <Link href={"/ProductDetails/" + value.id}>
                  <p className="text-blacks text-lg">{value.name}</p>
                </Link>
                <p className="text-blacks opacity-60 text-sm">
                  $ {value.price} USD
                </p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
export default Products;
