import { useSelector } from "react-redux";
import { CartItemsList, SectionTitle, CartTotals } from "../components";
import { Link } from "react-router-dom";

const Cart = () => {
  const { user } = useSelector((state) => state.user);

  const numItemsInCart = useSelector((store) => store.cart.numItemsInCart);

  if (numItemsInCart === 0) {
    return <SectionTitle title='Your cart is empty' />;
  }

  return (
    <>
      <SectionTitle title='Your Cart' />
      <div className='mt-8 grid gap-8  lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemsList />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals />
          {/* check if user logged in */}
          {user ? (
            <Link to='/checkout' className='btn btn-primary btn-block mt-8'>
              Proceed to checkout
            </Link>
          ) : (
            <Link to='/login' className='btn btn-primary btn-block mt-8'>
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
