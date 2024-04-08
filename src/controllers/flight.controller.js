import flightDao from "../dao/flight.dao.js";
const flightController = {};

flightController.getAll = async (req, res) => {
  flightDao
    .getAll()
    .then((flights) => {
      if (flights != null) {
        res.status(200).send(flights);
      } else {
        res.json({
          status: "not found",
        });
      }
    })
    .catch((err) => {
      res.status(404).json("Error");
    });
};

flightController.getOne = async (req, res) => {
  flightDao
    .getOne(req.params.seat)
    .then((flight) => {
      if (flight != null) {
        res.status(200).send(flight);
      } else {
        res.json({
          status: "not found",
        });
      }
    })
    .catch((err) => {
      console.log(err.msg);
      res.status(500).json({ status: "Server unaviable" });
    });
};

flightController.insertOne = async (req, res) => {
  flightDao
    .insertOne(req.body)
    .then((result) => {
      if (result) res.status(201).send({ status: "created" });
    })
    .catch((err) => {
      res.status(500).json({ status: "Server unaviable" });
    });
};

flightController.updateOne = async (req, res) => {
  flightDao
    .updateOne(req.params.seat, req.body)
    .then((result) => {
      if (result) {
        res.status(200).send({ status: "updated", data: result });
      }
    })
    .catch((err) => {
      res.status(500).json({ status: "Server unaviable" });
    });
};

flightController.deleteOne = async (req, res) => {
  flightDao
    .deleteOne(req.params.seat)
    .then((result) => {
      if (result) {
        res.status(200).send({ status: "deleted" });
      }
    })
    .catch((err) => {
      res.status(500).json({ status: "Server unaviable" });
    });
};

export default flightController;
