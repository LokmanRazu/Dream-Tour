const Gellary = require('../model/gellary')

exports.gellaryGetController = async (req, res, next) => {
    try {
      const gellary = await Gellary.find();
      res.status(200).json({
        message: "Here is your All Data",
        How_many_Data: gellary.length,
        data: gellary,
      });
    } catch (e) {
      console.log(`I am from gellaryGetController: ${e} `);
      next(e);
    }
  };