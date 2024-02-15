import BlogModel from "../model/model.js";
import asyncHandel from "express-async-handler";
import response from "./replay.js";

const getOne = asyncHandel(async (req, res) => {
  const found = await BlogModel.findOne({ _id: req.params.id });
  response(res, found);
});
const getAll = asyncHandel(async (req, res) => {
  const found = await BlogModel.find({});
  response(res, found);
});
const postOne = asyncHandel(async (req, res) => {
  const created = await BlogModel.create({
    title: req.body.title,
    content: req.body.content,
  });
  response(res, created, "not created", 500, 201);
});
const updateOne = asyncHandel(async (req, res) => {
  const updated = await BlogModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  response(res, updated);
});
const deleteOne = asyncHandel(async (req, res) => {
  const deleteOne = await BlogModel.findByIdAndDelete(req.params.id);
  response(res, deleteOne);
});
export { getOne, postOne, getAll, updateOne, deleteOne };
