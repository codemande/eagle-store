import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    image: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: ["indoor", "outdoor"],
      default: "indoor",
    },

    stock: {
      type: Number,
      default: 0,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

productSchema.pre("save", function(next) {
  if (!this.slug) {
    this.slug = this.name.toLowerCase().replace(/ /g, "-");
  }
  next();
});

export const Product = mongoose.model("Product", productSchema);