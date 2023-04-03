const valiadation = (schema) => {
return (req,res,next) => {
    const {error} = schema.validate(req.body);
    if (error) {
        error.status = 400;
        return res.status(400).json({ message: error.details[0].message });
      }
      next()
 }
}

module.exports = valiadation;