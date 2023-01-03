const Place = require("../model/places");

exports.placesPOSTController = async (req, res, next) => {
    const { name,thumbnail,description,is_visited,visited_date,temperature,bus } = req.body
  try {
    const places = new Place({
      name,
      thumbnail,
      description,
      is_visited,
      visited_date,
      temperature,
      bus,
    });
    const place = await places.save();
    res.status(200).json({
      message: "Sucessfully Data has been save",
      How_many_Data: place.length,
      data: place,
    });
  } catch (e) {
    console.log(`i am from placesPOSTController: ${e} `);
    next(e);
  };
};

exports.placesGetController = async (req, res, next) => {
  try {
    const place = await Place.find(req.query);
    console.log(req.query)
    res.status(200).json({
      message: "Here is your All Data",
      How_many_Data: place.length,
      data: place,
    });
  } catch (e) {
    console.log(`i am from placesGetController: ${e} `);
    next(e);
  }
};

exports.placesGetSingleController = async (req, res, next) => {
  try {
    const place = await Place.findById(req.params.id);
    res.status(200).json({
      message: "Here is your Data",
      How_many_Data: place.length,
      data: place,
    });
  } catch (e) {
    console.log(`i am from placesGetSingleController: ${e} `);
    next(e);
  }
};

exports.placesUpdateController = async (req, res, next) => {
  try {
    const place = await Place.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      message: "Here is your Updated Data",
      data: place,
    });
  } catch (e) {
    console.log(`i am from placesUpdateController: ${e} `);
    next(e);
  }
};

exports.placesDeleteController = async (req, res, next) => {
    try {
      const place = await Place.findByIdAndUpdate(req.params.id)
      res.status(200).json({
        message: "Here is your Deleted Data",
        data: place,
      });
    } catch (e) {
      console.log(`i am from placesDeleteController: ${e} `);
      next(e);
    }
  };
