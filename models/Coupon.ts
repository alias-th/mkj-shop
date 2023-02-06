import { Schema, models, model, Model } from "mongoose";

interface couponModelSchema {
  coupon: string;
  startDate: string;
  endDate: string;
  discount: number;
}

const couponSchema = new Schema<couponModelSchema>(
  {
    coupon: {
      type: String,
      trim: true,
      unique: true,
      uppercase: true,
      required: true,
      minLength: 4,
      maxLength: 10,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Coupon = models.Coupon || model("Coupon", couponSchema);

export default Coupon as Model<couponModelSchema>;
