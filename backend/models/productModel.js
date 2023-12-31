const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema(
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
    },
    threeMonthPrice: {
      type: Number,
      required: true,
    },
    sixMonthPrice: {
      type: Number,
      required: true,
    },
    nineMonthPrice: {
      type: Number,
      required: true,
    },
    twelveMonthPrice: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      default: "Leelu chacha",
    },
    size: {
      type: String,
    },
    material: {
      type: String,
      default: "Standard",
    },
    color: {
      type: String,
      default: "Natural",
    },
    stock: {
      type: String,
      default: "In Stock",
      enum: ["In Stock", "Out Of Stock"],
    },
    Discount: {
      default: 0,
      max: 100,
      type: Number,
    },
    sold: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: String,
        url: String,
      },
    ],
    ratings: [
      {
        star: Number,
        comment: String,
        user: String,
        postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
    totalrating: {
      type: String,
      default: 0,
    },
    created: {
      posted: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Product", productSchema);
