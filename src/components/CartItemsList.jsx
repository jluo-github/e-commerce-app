import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItemsList = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);

  return (
    <>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />;
      })}
    </>
  );
};
export default CartItemsList;
