import { Schema, model, models, ObjectId, Model } from "mongoose";

interface ProductModelSchema {
  name: string;
  description: string;
  brand: string;
  slug: string;
  category: ObjectId;
  subCategories: Array<ObjectId>;
  details: Array<{ name: string; value: string }>;
  reviews: ReviewModelSchema;
  refundPolicy: string;
  rating: number;
  numReviews: number;
  shipping: number;
  subProducts: Array<{
    sku: string;
    images: [];
    description_images: [];
    color: { color: string; image: string };
    sizes: Array<{ size: string; qty: number; price: number }>;
    discount: number;
    sold: number;
  }>;
}
interface ReviewModelSchema {
  reviewBy: ObjectId;
  rating: number;
  review: string;
  size: string;
  images: [];
}

const reviewSchema = new Schema<ReviewModelSchema>({
  reviewBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  review: {
    type: String,
    required: true,
  },
  size: {
    type: String,
  },
  images: [],
});

const productSchema = new Schema<ProductModelSchema>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      //lowercase: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    subCategories: [
      {
        type: Schema.Types.ObjectId,
        ref: "subCategory",
      },
    ],
    details: [
      {
        name: String,
        value: String,
      },
    ],
    reviews: [reviewSchema],
    refundPolicy: {
      type: String,
      default: "30 days",
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    shipping: {
      type: Number,
      required: true,
      default: 0,
    },
    subProducts: [
      {
        sku: String,
        images: [],
        description_images: [],
        series: String,
        color: {
          color: {
            type: String,
          },
          image: {
            type: String,
          },
        },
        sizes: [
          {
            size: String,
            qty: Number,
            price: Number,
          },
        ],
        discount: {
          type: Number,
          default: 0,
        },
        sold: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = models.Product || model("Product", productSchema);

export default User as Model<ProductModelSchema>;
