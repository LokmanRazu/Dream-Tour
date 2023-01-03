const router = require("express").Router();
const {
  placesPOSTController,
  placesGetSingleController,
  placesGetController,
  placesUpdateController,
  placesDeleteController,
} = require("../controller/placesController");

router.post('/createPlace',placesPOSTController);
router.get('/singalePlace/:id',placesGetSingleController);
router.get('/allPlace',placesGetController);
router.patch('/updatePlace/:id',placesUpdateController);
router.delete('/deletePlace/:id',placesDeleteController);

module.exports = router;