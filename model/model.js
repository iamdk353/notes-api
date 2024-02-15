import mongoose from "mongoose";
const { Schema, model } = mongoose;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
      maxlength: [450, "Content has attained the maximum length"],
    },
    color: {
      type: String,
      default: "purple",
    },
    isColorReq: {
      type: Boolean,
      default: false,
    },
    pin: {
      type: Boolean,
      default: false,
    },
    section: {
      type: String,
      default: "left",
    },
  },
  { timestamps: true }
);

const BlogModel = model("Blog", blogSchema); // Corrected model creation

export default BlogModel;
