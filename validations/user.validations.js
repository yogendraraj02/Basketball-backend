const yup = require('yup');
const registerSchema = yup.object({
    body: yup.object({
      email: yup.string().email().required(),
      password: yup.string().min(6).max(30).required(),
      
    }),
    params: yup.object({
      
    }),
});

  
const validate = (schema) => async (req, res, next) => {
try {
    await schema.validate({
    body: req.body,
    query: req.query,
    params: req.params,
    });
    return next();
} catch (err) {
    return res.status(400).json({ type: err.name, message: err.message });
}
};

  module.exports = {validate , registerSchema}