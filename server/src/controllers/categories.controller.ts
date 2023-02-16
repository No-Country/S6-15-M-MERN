import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Category from "../models/categories.model";

const createCategory = (req: Request, res: Response, _next: NextFunction) => {
  const { service, description, categoryImageUrl } = req.body;

  const category = new Category({
    _id: new mongoose.Types.ObjectId(),
    service,
    description,
    categoryImageUrl
  });

  return category
    .save()
    .then(category => {
      res.status(201).json({ category });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
};

const getCategoryById = (req: Request, res: Response, _next: NextFunction) => {
  const categoryId = req.params.categoryId;
  return Category.findById(categoryId)
    .then(category => {
      category
        ? res.status(200).json({ category })
        : res.status(404).json({ message: "Service type Not Found" });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
};

const getAllCategories = (_req: Request, res: Response, _next: NextFunction) => {
  return Category.find()
    .then(categories => {
      categories
        ? res.status(200).json({ categories })
        : res.status(404).json({ message: "Categories Not Found" });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
};

const updateCategory = (req: Request, res: Response, _next: NextFunction) => {
  const categoryId = req.params.categoryId;
  return Category.findById(categoryId)
    .then(category => {
      if (category) {
        category.set(req.body);
        return category
          .save()
          .then(category => res.status(201).json({ category }))
          .catch(error => res.status(500).json({ error }));
      } else {
        return res.status(404).json({ message: "No categories Found" });
      }
    })
    .catch(err => {
      return res.status(500).json({ err });
    });
};

const deleteCategory = (req: Request, res: Response, _next: NextFunction) => {
  const categoryId = req.params.categoryId;
  return Category.findByIdAndDelete(categoryId)
    .then(Category => {
      Category
        ? res.status(200).json({ message: "Category Deleted" })
        : res.status(404).json({ message: "Category Not Found" });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
};

export default {
  createCategory,
  getCategoryById,
  getAllCategories,
  updateCategory,
  deleteCategory
};
