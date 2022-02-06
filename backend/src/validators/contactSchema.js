import Joi from "joi";

export const contactSchema = Joi.object().keys({
  user_id: Joi.number().integer().required(),
  name: Joi.string().required(),
  phone: Joi.string().required(),
  photo: Joi.string().required(),
  email: Joi.string().email(),
  address: Joi.string(),
  favorites: Joi.boolean(),
});

export const updateContactSchema = Joi.object().keys({
  name: Joi.string().required(),
  phone: Joi.string().required(),
  photo: Joi.string().required(),
  email: Joi.string().email(),
  address: Joi.string(),
  favorites: Joi.boolean(),
});
