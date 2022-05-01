import Image from "next/image";
import Link from "next/link";

function OrderList({ orders }) {
  return (
    <section className="order-list">
      <div className="title">
        <p>Thank you for Ordering our Product</p>
        <h2>List of Cool customers</h2>
      </div>
      <div className="container order-list__container">
        <div className="order-list__details">
          {orders.map((order) => (
            <Link href={`/orders/${order._id}`}>
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
                  <span>${order.total}</span>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <div className="order-list__note">
          <h2>Note</h2>
          <p>Click the order section for more informations</p>
        </div>
      </div>
    </section>
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
