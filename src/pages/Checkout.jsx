import { useSelector } from "react-redux";
import { CheckoutForm, SectionTitle, CartTotals } from "../components";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().user.user;
    // console.log(user, "user");

    if (!user) {
      toast.error("Please login to continue");
      return redirect("/login");
    }
    return null;
  };

const Checkout = () => {
  const CartTotal = useSelector((store) => store.cart.CartTotal);

  if (CartTotal === 0) {
    return <SectionTitle text='Your cart is empty' />;
  }

  return (
    <>
      <SectionTitle text='Please your order' />
      <div className='mt-8 grid gap-8 md:grid-cols-2 items-start'>

        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
