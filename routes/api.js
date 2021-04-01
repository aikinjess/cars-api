var express = require('express');
var router = express.Router();
const carsCtrl = require('../controllers/api/cars')

router.get("/cars", carsCtrl.index)
router.get("/cars:id", carsCtrl.show)
router.post("/cars", carsCtrl.create)
router.put("/carss/:id", carsCtrl.update)
router.delete("/carss/:id", carsCtrl.delete)

module.exports = router;
