import { response } from "../../helpers";
import Book from "../../models/Book";

export const getAll = async (req, res) => {
  try {
    const data = await Book.find({});

    return response(res, { data });
  } catch (error) {
    console.log(error);
    return response(res, { message: error.message, code: 500 });
  }
};

export const getOne = async (req, res) => {
  try {
    const data = await Book.find({});

    return response(res, { data });
  } catch (error) {
    console.log(error);
    return response(res, { message: error.message, code: 500 });
  }
};

export const create = async (req, res) => {
  try {
    const data = await Book.find({});

    return response(res, { data });
  } catch (error) {
    console.log(error);
    return response(res, { message: error.message, code: 500 });
  }
};

export const update = async (req, res) => {
  try {
    const data = await Book.find({});

    return response(res, { data });
  } catch (error) {
    console.log(error);
    return response(res, { message: error.message, code: 500 });
  }
};

export const remove = async (req, res) => {
  try {
    const data = await Book.find({});

    return response(res, { data });
  } catch (error) {
    console.log(error);
    return response(res, { message: error.message, code: 500 });
  }
};
