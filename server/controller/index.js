const db = require('../models/index');

module.exports.getProducts = async (req,res,next) => {
    try {
      const {query: {offset}} = req;

      const products = await db.Product.findAll({
          offset,
          limit: 10,
      });
      res.send(products);
    } catch (err) {
        console.log(err);
        res.send(err);
        next(err);
    }
};


