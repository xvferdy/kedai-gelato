import dbConnect from "../../../utils/dbConnect";
import Order from "../../../models/Order";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  if (method === "GET") {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
  }
}
