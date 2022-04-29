import Image from "next/image";

import { BsBagCheck } from "react-icons/bs";

function Order() {
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
              <span>fery nuegero</span>
            </div>
            <div>
              <small>Address</small>
              <span>Jalan kasuari no 88</span>
            </div>
            <div>
              <small>Total</small>
              <span>$123</span>
            </div>
          </div>

          <div className="order__details-process">
            <div className="order-status-1">
              <Image src="/assets/paid.png" width={30} height={30} alt="" />
              <span>Preparing</span>
              <div>
                <Image
                  src="/assets/checked.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>
            <div className="order-status-1">
              <Image src="/assets/bake.png" width={30} height={30} alt="" />
              <span>Preparing</span>
              <div>
                <Image
                  src="/assets/checked.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>
            <div className="order-status-1">
              <Image src="/assets/bike.png" width={30} height={30} alt="" />
              <span>Preparing</span>
              <div>
                <Image
                  src="/assets/checked.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>
            <div className="order-status-1">
              <Image
                src="/assets/delivered.png"
                width={30}
                height={30}
                alt=""
              />
              <span>Preparing</span>
              <div>
                <Image
                  src="/assets/checked.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="order__payments">
          <div>
            <h2>Total Paid: $900</h2>
            <span>
              Thank you for ordering our product, we'll be there in a year!
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
