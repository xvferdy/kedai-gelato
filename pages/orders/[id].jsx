import Image from "next/image";
import Head from "next/head";

import { BsBagCheck } from "react-icons/bs";

function Order({ order }) {
  const progressInfo = ["payment", "preparing", "on the way", "delivered"];
  let dollarUSLocale = Intl.NumberFormat("en-US");
  let status = order.status; // (0 - 3)
  const orderProgression = (progress) => {
    if (progress - status < 1) return "done";
    if (progress - status === 1) return "inProgress";
    if (progress - status > 1) return "undone";
  };

  return (
    <>
      <Head>
        <title>{order.customer}'s order</title>
        <meta name="keyword" content="Ice Cream, Gelato, Kedai" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      <section className="order">
        <div className="title">
          <p>You're the Precious Customer</p>
          <h2>Orders Informations</h2>
        </div>
        <div className="container order__container">
          <div className="order__details">
            <div className="order__details-header">
              <div>
                <small>Order ID</small>
                <span>{order._id}</span>
              </div>
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
            </div>

            {/* ORDER PROCESS */}
            <div className="order__details-process">
              {progressInfo.map((text, idx) => (
                <div key={idx} className={orderProgression(idx)}>
                  <Image
                    src={`/assets/${text}.png`}
                    width={30}
                    height={30}
                    alt={text}
                  />
                  <span>{text.toUpperCase()}</span>
                  <div>
                    <img
                      className="checkedIcon"
                      src="/assets/checked.png"
                      width={20}
                      height={20}
                      alt="checkedIcon"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order__payments">
            <div>
              <h2>Total Paid: ${dollarUSLocale.format(order.total)}</h2>
              <p>
                Thank you for ordering our product, we'll be there in the blink
                of the eye!
              </p>
            </div>
            <button className="btn btn--paid">
              <BsBagCheck /> Paid
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Order;

export const getStaticPaths = async () => {
  const res = await fetch(`https://kedai-gelato.vercel.app/api/orders`);
  const data = await res.json();
  const paths = data.map((order) => ({
    params: { id: order._id },
  }));
  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const res = await fetch(`https://kedai-gelato.vercel.app/api/orders/${id}`);
  const data = await res.json();

  return {
    props: {
      order: data,
    },
  };
};
