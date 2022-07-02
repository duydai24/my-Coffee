import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { deleteCart, handleCart } from "../../redux/action/cartAction";
import { toast } from "react-toastify";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import { productSelector } from "../../redux/selector/productsSelector";
import { cartSelector, cartsSelector } from "../../redux/selector/cartSelector";

const componentSelector = () =>
  createSelector(
    [productSelector, cartSelector, cartsSelector],
    ({ product }, { cart }, { carts }) => {
      return {
        product,
        cart,
        carts,
      };
    }
  );

function Cart({ onClickOnCart, classNameOnCart, dispatch, cart, carts }) {
  const handleDeleteCart = (id) => {
    dispatch(deleteCart(id));
    toast.success("👌 Product delete to cart successfully !");
  };
  const onChangeQuantityCart = (e, id) => {
    let quantityNumber = e.target.value;
    dispatch(handleCart(id, quantityNumber));
    toast.success("👌 Product update quantity to cart successfully !");
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
                  dispatch={dispatch}
                  cart={cart}
                  onChangeQuantityCart={(e) =>
                    onChangeQuantityCart(e, value.id)
                  }
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

function CartItem({
  deleteCart,
  image,
  name,
  price,
  quantity,
  onChangeQuantityCart,
}) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex">
        <img
          className="max-w-[80px] max-h-[80px]"
          src={image}
          height={80}
          width={80}
          alt="img"
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
        </div>
      </div>
      <input
        className="w-14 h-10 px-3 text-xs border-0 border-[#2f303e] hover:border-white bg-blacks text-white text-center font-bold"
        required
        type="number"
        pattern="^[0-9]+$"
        name="quantity"
        min={1}
        value={Number(quantity)}
        onChange={onChangeQuantityCart}
      />
    </div>
  );
}
export default connect(componentSelector)(Cart);
