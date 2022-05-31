import React, { useState } from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { MdLightbulbOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Title from "../../lib/title";
import Link from "next/link";
import { useRouter } from "next/router";
import { addCart } from "../../redux/action/cartAction";

function ProductDetails() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.carts);
  const { carts } = useSelector((state) => state);

  const router = useRouter();
  const { productDetails } = router.query;
  let new_product = product.filter((e) => e.id == productDetails);

  let categoryId;
  new_product.map((value) => (categoryId = value.categoryId));
  let category_product = product.filter((e) => e.categoryId == categoryId);

  const [quantity, setQuantity] = useState(1);
  const onChangeQuantiTy = (e) => {
    setQuantity(e.target.value);
  };

  const addToCart = (id, name, image, price) => {
    const checkCart = cart.some((el) => el.id === id);
    if (!checkCart) {
      let new_cart = {
        id: id,
        name: name,
        image: image,
        price: price,
        quantity: Number(quantity),
      };
      cart = [...cart, new_cart];
      let totalQuantity = 0;
      let totalPrice = 0;
      cart.map(
        (value) => (
          (totalQuantity += value.quantity),
          (totalPrice += value.quantity * value.price)
        )
      );
      dispatch(addCart(cart, totalQuantity, totalPrice));
    } else {
      let filterCart = cart.filter((e) => e.id === id);
      let totalQuantity = 0;
      let totalPrice = 0;
      let key = cart.indexOf(...filterCart);
      cart[key].quantity = cart[key].quantity + Number(quantity);
      cart.map(
        (value) => (
          (totalQuantity += value.quantity),
          (totalPrice += value.quantity * value.price)
        )
      );
      dispatch(addCart(cart, totalQuantity, totalPrice));
    }
    alert("Thêm vào giỏ hàng thành công");
  };

  return (
    <div className="">
      {new_product.map((value, key) => (
        <div key={key} className="container grid grid-cols-2 gap-16 py-24">
          <img src={value.image} height={460} width={460} />
          <div className="items-start flex flex-col justify-center">
            <p className="text-4xl">{value.name}</p>
            <p className="text-lg leading-7 text-[#1d1f2eb3] my-5">
              {value.desciption}
            </p>
            <p className="text-3xl leading-10 text-[#a25f4b]">
              ${Math.round(value.price * 100) / 100}.00
            </p>
            <label className="text-xs leading-5 font-bold text-[#1d1f2e99] uppercase my-2">
              quantity
            </label>
            <div className="flex">
              <input
                pattern="[0-9]*"
                className="border-0 border-blacks py-3 pl-5 pr-2 w-1/4 outline-none"
                type="number"
                min={1}
                value={Number(quantity)}
                onChange={(e) => onChangeQuantiTy(e)}
              />
              <button
                onClick={() =>
                  addToCart(
                    value.id,
                    value.name,
                    value.image,
                    value.price,
                    value.quantity
                  )
                }
                className="ml-3 py-5 px-6 bg-blacks text-white font-bold text-xs text-center uppercase hover:opacity-95 hover:bg-[#2f3247]"
              >
                add to cart
              </button>
            </div>
          </div>
          <div>
            <label className="text-xs leading-5 font-bold text-[#1d1f2e99] uppercase my-2">
              DETAILS
            </label>
            <p className="text-[#1d1f2eb3] leading-7 mt-5 opacity-80">
              {value.details}
            </p>
          </div>
          <div>
            <label className="text-xs leading-5 font-bold text-[#1d1f2e99] uppercase my-2">
              DIMENSIONS
            </label>
            <ul className="list-disc text-black mt-5">
              <li className="text-[#1d1f2eb3] leading-7 opacity-80">
                Lenght (in):20.0
              </li>
              <li className="text-[#1d1f2eb3] leading-7 opacity-80">
                Height (in)40.0
              </li>
              <li className="text-[#1d1f2eb3] leading-7 opacity-80">
                Width (in):30.0
              </li>
              <li className="text-[#1d1f2eb3] leading-7 opacity-80">
                Weight (oz):500.0
              </li>
            </ul>
          </div>
        </div>
      ))}

      <div className="w-full h-auto flex">
        <div className="bg-[url('/bg-productsDetails.jpg')] bg-center bg-cover w-1/2" />
        <div className="bg-blacks w-1/2 pl-20 py-16">
          <div className="w-1/2">
            <p className="text-white font-normal text-2xl leading-9">
              Handmade by{" "}
              <span className="text-white text-2xl leading-9 font-bold">
                CoffeeStyle.
              </span>
            </p>
            <p className="text-white opacity-90 text-lg leading-9">
              The most versatile furniture system ever created. Designed to fit
              your life.
            </p>
            <div className="flex mt-5">
              <span className="text-white text-2xl mr-5">
                <IoDiamondOutline />
              </span>
              <div>
                <p className="text-white">Premium Quality</p>
                <p className="text-[#ffffffb3]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in.
                </p>
              </div>
            </div>
            <div className="flex mt-5">
              <span className="text-white text-2xl mr-5">
                <MdLightbulbOutline />
              </span>
              <div>
                <p className="text-white">Premium Quality</p>
                <p className="text-[#ffffffb3]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20">
        <Title text={"YOU MIGHT ALSO LIKE THESE"} />
      </div>
      <div className="container grid grid-cols-3">
        {category_product.map((value, key) => (
          <div key={key} className="px-3 py-10">
            <div className="relative w-full imgProduct">
              <Link href={"/ProductDetails/" + value.id}>
                <img className="" src={value.image} width={460} height={460} />
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
                $ {value.price}.00
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductDetails;
