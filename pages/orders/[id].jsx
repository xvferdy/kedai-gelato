import Image from "next/image";

import { BsBagCheck } from "react-icons/bs";

function Order({ order }) {
  const progressInfo = [
    "cash-payment",
    "salad",
    "delivery-courier",
    "delivered",
  ];
  let status = order.status; // taro di luar? (0 - 3)
  console.log(order);
  const orderProgression = (progress) => {
    if (progress - status < 1) return "done";
    if (progress - status === 1) return "inProgress";
    if (progress - status > 1) return "undone";
  };

  return (
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
              <span>123456789</span>
            </div>
            <div>
              <small>Customer</small>
              <span>{order.customer}</span>
            </div>
            <div>
              <small>Address</small>
              <span>Jalan kasuari no 88</span>
            </div>
            <div>
              <small>Total</small>
              <span>${order.total}</span>
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
            <h2>Total Paid: $900</h2>
            <span>
              Thank you for ordering our product, we'll be there in the blink of
              the eye!
            </span>
          </div>
          <button className="btn btn--paid">
            <BsBagCheck /> Paid
          </button>
        </div>
      </div>
    </section>
  );
}

export default Order;

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.params;

  const res = await fetch(`http://localhost:3000/api/orders/${id}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      order: data,
    },
  };
};
