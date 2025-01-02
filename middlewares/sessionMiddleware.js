module.exports = (req, res, next) => {
    res.locals.user = req.session.user || null; // Add user session data to locals
    next(); // Proceed to the next middleware or route handler
  };