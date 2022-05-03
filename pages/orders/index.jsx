import Link from "next/link";
import Head from "next/head";

// framer
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
function OrderList({ orders }) {
  console.log(orders);
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
                {orders
                  .slice(0)
                  .reverse()
                  .map((order, idx) => (
                    <Link
                      key={order._id}
                      href={`/orders/${order._id}`}
                      passHref
                    >
                      <motion.a
                        className="order-list__details-header"
                        initial="hidden"
                        animate="visible"
                        exit="removed"
                        variants={{
                          hidden: { opacity: 0, y: -50 * idx },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.2,
                              delay: 0.1,
                            },
                          },
                          removed: {
                            opacity: 0,
                            x: -100,
                          },
                        }}
                      >
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
                      </motion.a>
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
  const res = await fetch("https://kedai-gelato.vercel.app/api/orders");
  const data = await res.json();

  return {
    props: {
      orders: data,
    },
    revalidate: 1,
  };
};
