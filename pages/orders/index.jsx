import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

function OrderList({ orders }) {
  let dollarUSLocale = Intl.NumberFormat("en-US");
  return (
    <>
      <Head>
        <title>Orders</title>
        <meta name="keyword" content="Ice Cream, Gelato, Kedai" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>

      <section className="order-list">
        <div className="title">
          <p>Thank you for Ordering our Product</p>
          <h2>List of Cool customers</h2>
        </div>
        <div className="container order-list__container">
          <div className="order-list__details">
            {orders.length <= 0 ? (
              <small>There's no active order right now . . .</small>
            ) : (
              <>
                {orders.map((order) => (
                  <Link key={order._id} href={`/orders/${order._id}`} passHref>
                    <a className="order-list__details-header">
                      <div>
                        <small>Customer</small>
                        <span>{order.customer}</span>
                      </div>
                      <div>
                        <small>Address</small>
                        <span>{order.address}</span>
                      </div>
                      <div>
                        <small>Total</small>
                        <span>${dollarUSLocale.format(order.total)}</span>
                      </div>
                    </a>
                  </Link>
                ))}
              </>
            )}
          </div>
          <div className="order-list__note">
            <h2>Note</h2>
            <p>Click the order section for more informations</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderList;

export const getStaticProps = async (ctx) => {
  const res = await fetch("http://localhost:3000/api/orders");
  const data = await res.json();

  return {
    props: {
      orders: data,
    },
  };
};
