import { Schema, model, models, ObjectId, Model } from "mongoose";

interface CategoryModelSchema {
  name: string;
  slug: string;
}

const categorySchema = new Schema<CategoryModelSchema>(
  {
    name: {
      type: String,
      required: true,
      minlength: [2, "must be at least 2 characters"],
      maxlength: [32, "must be at least 2 characters"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
  },
  { timestamps: true }
);

const Category = models.Category || model("Category", categorySchema);

export default Category as Model<CategoryModelSchema>;
