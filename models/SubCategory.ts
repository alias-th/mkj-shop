import { Schema, model, models, ObjectId, Model } from "mongoose";

interface SubCategoryModelSchema {
  name: string;
  slug: string;
  parent: ObjectId;
}

const subCategorySchema = new Schema<SubCategoryModelSchema>({
  name: {
    type: String,
    required: true,
    minlength: [2, "must be atleast 2 charcters"],
    maxlength: [32, "must be atleast 2 charcters"],
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    index: true,
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const SubCategory = models.SubCategory || model("SubCategory", subCategorySchema);

export default SubCategory as Model<SubCategoryModelSchema>;
