import { response } from "../../helpers";
import BookRead from "../../models/BookRead";
import Joi from "joi";
import optionsJoi from "../../helpers/validations";

const SchemaValidation = Joi.object({
  title: Joi.string(),
  start_date: Joi.date(),
  end_date: Joi.date(),
  qualification: Joi.number(),
  review: Joi.string(),
  id_open_library: Joi.string(),
  info_open_library: Joi.any(),
});

export const getAll = async (req, res) => {
  try {
    const data = await BookRead.find({}).sort({ start_date: -1 });

    return response(res, { data });
  } catch (error) {
    console.log(error);
    return response(res, { message: error.message, code: 500 });
  }
};

export const getOne = async (req, res) => {
  try {
    const data = await BookRead.findOne({ _id: req.params.id });
    if (!data) {
      throw { message: "No se encontro" };
    }

    return response(res, { data });
  } catch (error) {
    console.log(error);
    return response(res, { message: error.message, code: 500 });
  }
};

export const create = async (req, res) => {
  try {
    const value = await SchemaValidation.validateAsync(req.body);

    const isMoreBig = await dateMoreBigger(value.start_date, value.end_date);
    if (isMoreBig) {
      throw {
        message: "La fecha inicial no puede ser mas que la fecha final",
      };
    }

    const data = await BookRead.create({ ...value });

    return response(res, { data, message: "Registro Creado" });
  } catch (error) {
    console.log(error);
    return response(res, { message: error.message, code: 500 });
  }
};

export const update = async (req, res) => {
  try {
    const value = await SchemaValidation.validateAsync(req.body);

    const isMoreBig = await dateMoreBigger(value.start_date, value.end_date);
    if (isMoreBig) {
      throw {
        message: "La fecha inicial no puede ser mas que la fecha final",
      };
    }

    const data = await BookRead.findByIdAndUpdate(req.params.id, { ...value });

    return response(res, { data, message: "Registro Actualizado" });
  } catch (error) {
    console.log(error);
    return response(res, { message: error.message, code: 500 });
  }
};

export const remove = async (req, res) => {
  try {
    const data = await BookRead.findByIdAndDelete(req.params.id);

    return response(res, { data, message: "Registro Eliminado" });
  } catch (error) {
    console.log(error);
    return response(res, { message: error.message, code: 500 });
  }
};

const dateMoreBigger = (a, b) => {
  return new Date(a) > new Date(b);
};
