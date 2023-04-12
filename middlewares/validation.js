const valiadation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      error.status = 400;
      return res.status(400).json({
        message: `missing required ${error.details[0].context.label} field`,
      });
    }
    next();
  };
};

module.exports = valiadation;
