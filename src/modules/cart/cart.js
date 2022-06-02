import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, updateCart } from "../../redux/action/cartAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart({ onClickOnCart, classNameOnCart }) {
  const { cart } = useSelector((state) => state.carts);
  const { carts } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDeleteCart = (id, key) => {
    cart.splice(key, 1);
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.map((value) => {
      totalQuantity += value.quantity;
      totalPrice += value.price * value.quantity;
    });

    dispatch(deleteCart(cart, totalQuantity, totalPrice));
    toast.success("👌 Product delete to cart successfully !");
  };

  return (
    <div className="flex w-full">
      <div
        className={
          "lg:w-[75%] md:w-[25%] h-screen fixed top-0 left-0 -translate-x-full transition-all bg-slate-200 opacity-60 z-10 lg:block hidden md:block " +
          classNameOnCart
        }
        onClick={onClickOnCart}
      />
      <div
        className={
          "lg:w-[25%] md:w-[75%] w-screen h-screen z-30 fixed top-0 right-0 translate-x-full transition-all bg-[#1d1f2e] " +
          classNameOnCart
        }
      >
        <div className="flex items-center justify-between px-10 py-8 border-b-0 border-[#d2d2d51a]">
          <p className="text-xs leading-4 tracking-[2px] uppercase text-[#ffffffb3] font-medium">
            your cart
          </p>
          <span
            onClick={onClickOnCart}
            className="text-[#ffffffb3] text-2xl hover:text-red-redd cursor-pointer"
          >
            <MdOutlineClose />
          </span>
        </div>
        {cart.length !== 0 ? (
          <div className="px-10 pt-8">
            {cart.map((value, key) => (
              <div key={key}>
                <CartItem
                  id={value.id}
                  image={value.image}
                  name={value.name}
                  price={value.price}
                  quantity={value.quantity}
                  deleteCart={() => handleDeleteCart(value.id, key)}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white text-center mt-32">No Item Cart</p>
        )}
        {cart.length !== 0 ? (
          <div className="px-10 py-8 border-t-0 border-[#d2d2d51a] fixed bottom-0 right-0 w-full z-20">
            <div className="flex justify-between items-center">
              <p className="text-[20px] leading-8 text-white">Total</p>

              <span className="text-[20px] leading-8 text-white">
                $ {carts.totalPrice}
              </span>
            </div>
            <button className="bg-white text-xs uppercase py-5 px-6 w-full font-bold tracking-[2px] mt-5 hover:bg-green-600">
              continue to checkout
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

function CartItem({ deleteCart, image, name, price, quantity, id }) {
  const { cart } = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  const onChangeQuantityCart = (e) => {
    let filterCart = cart.filter((e) => e.id === id);
    let key = cart.indexOf(...filterCart);
    cart[key].quantity = cart[key].quantity + Number(quantity);
    cart[key].quantity = Number(e.target.value);
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.map(
      (value) => (
        (totalQuantity += value.quantity),
        (totalPrice += value.quantity * value.price)
      )
    );

    dispatch(updateCart(cart, totalQuantity, totalPrice));
    toast.success("👌 Product update quantity to cart successfully !");
  };
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex">
        <img
          className="max-w-[80px] max-h-[80px]"
          src={image}
          height={80}
          width={80}
        />
        <div className="flex flex-col items-start ml-10">
          <p className="text-white text-lg leading-8">{name}</p>
          <span className="text-white text-lg leading-8">${price}</span>
          <button
            onClick={deleteCart}
            className="text-xs text-[#ffffff4d] uppercase font-bold hover:text-red-redd"
          >
            REMOVE
          </button>
          <ToastContainer />
        </div>
      </div>
      <input
        className="w-14 h-10 px-3 text-xs border-0 border-[#2f303e] hover:border-white bg-blacks text-white text-center font-bold"
        required
        type="number"
        pattern="^[0-9]+$"
        name="quantity"
        min={1}
        value={quantity}
        onChange={(e) => onChangeQuantityCart(e)}
      />
    </div>
  );
}
export default Cart;
