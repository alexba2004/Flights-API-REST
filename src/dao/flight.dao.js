import Flight from "../models/flight.model.js";
const flightDao = {};
flightDao.getAll = async (req, res) => {
  const flights = await Flight.find();
  return flights;
};

flightDao.getOne = async (seat) => {
  const flight = await Flight.findOne({ seat: seat });
  return flight;
};

flightDao.insertOne = async (flight) => {
  const flightSaved = new Flight(flight);
  await flightSaved.save();
  return true;
};

flightDao.updateOne = async (seat, flight) => {
  const updateOne = await Flight.findOneAndUpdate({ seat: seat }, flight);
  if (updateOne != null) {
    return updateOne;
  } else {
    return false;
  }
};

flightDao.deleteOne = async (seat) => {
  const deleteOne = await Flight.findOneAndDelete({ seat: seat });
  if (deleteOne != null) {
    return true;
  } else {
    return false;
  }
};

export default flightDao;
