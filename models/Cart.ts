import { Schema, models, model, ObjectId, Model } from "mongoose";

interface CartModelSchema {
  products: Array<{
    product: ObjectId;
    name: string;
    image: string;
    size: string;
    qty: number;
    color: {
      color: string;
      image: string;
    };
    price: number;
  }>;
  cartTotal: number;
  totalAfterDiscount: number;
  user: ObjectId;
}

const cartSchema = new Schema<CartModelSchema>(
  {
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        name: {
          type: String,
        },
        image: {
          type: String,
        },
        size: {
          type: String,
        },
        qty: {
          type: Number,
        },
        color: {
          color: String,
          image: String,
        },
        price: Number,
      },
    ],
    cartTotal: Number,
    totalAfterDiscount: Number,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Cart = models.Cart || model("Cart", cartSchema);

export default Cart as Model<CartModelSchema>;
