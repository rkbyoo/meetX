const Joi = require('joi');
const mongoose = require('mongoose');

exports.registerSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  password: Joi.string().min(6).required()
});

exports.loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

exports.bookingSchema = Joi.object({
  activityId: Joi.string().custom((value, helpers) => {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      return helpers.error('any.invalid');
    }
    return value;
  }, 'ObjectId Validation').required()
});

// Middleware 
exports.validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error)
     return res.status(400).json({ message: error.details[0].message });
  next();
};