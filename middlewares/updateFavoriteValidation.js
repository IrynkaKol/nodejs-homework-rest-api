const updateFavoriteValiadation = (schema) => {
    return (req, res, next) => {
      const { error, value } = schema.validate(req.body);
      if (error || !Object.keys(value).length) {
        return res.status(400).json({ message: "missing fields favorite" });
      }
      next();
    };
  };
  
  module.exports = updateFavoriteValiadation; 