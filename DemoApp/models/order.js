const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
 /* _id: {
    type: Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId, // Auto-generate if none provided
  },*/
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to a related User model
    required: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product", // Reference to a related Product model
      required: true,

    },
  ],
  address: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;