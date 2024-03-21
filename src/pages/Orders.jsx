import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import {
  OrdersList,
  PaginationContainer,
  SectionTitle,
  ComplexPaginationContainer,
} from "../components";

const ordersQuery = (params, user) => {
  return {
    queryKey: [
      "orders",
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch("/orders", {
        params,
        headers: { Authorization: `Bearer ${user.token}` },
      }),
  };
};

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().user.user;

    // if user is not logged in, redirect to login page
    if (!user) {
      toast.error("Please login to view your orders");
      return redirect("/login");
    }

    // get the query params from the request url
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      // get the orders from the server
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user)
      );

      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.log(error);

      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error accessing your orders";

      toast.error(errorMessage);
      if (error?.response?.status === 401 || error?.response?.status === 403)
        return redirect("/login");

      return null;
    }
  };

const Orders = () => {
  const { meta } = useLoaderData();

  if (meta.pagination.total < 1) {
    return <SectionTitle title='No orders yet' />;
  }

  return (
    <>
      <SectionTitle text='Your Orders' />
      <OrdersList />
      {/* <PaginationContainer /> */}
      <ComplexPaginationContainer />
    </>
  );
};
export default Orders;
