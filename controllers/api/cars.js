const Car = require('../../models/car');
module.exports = {
    index,
    show, 
    create,
    delete: deleteCar,
    update
}

function update(req, res) {
    Car.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(function(car) {
        res.status(200).json(book);
    })
}

function show(req, res)  {
    Car.findById(req.params.id).then(function(car) {
        res.status(200).json(car);
    })
}

function create(req, res) {
    Car.create(req.body).then(function(car) {
        res.status(201).json(car)
    })
}

function index(req, res) {
    Car.find({}).then(function(cars) {
        res.status(200).json(cars)
    })
}

function deleteCar(req, res) {
    Car.findByIdAndRemove(req.params.id).then(function(car) {
      res.status(200).json(car);
    });
  }