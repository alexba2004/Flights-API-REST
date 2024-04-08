import Router from "express";
import flightController from "../controllers/flight.controller.js";
const router = Router();

router.get("/", flightController.getAll);
router.get("/:seat", flightController.getOne);
router.post("/", flightController.insertOne);
router.put("/:seat", flightController.updateOne);
router.delete("/delete/:seat", flightController.deleteOne);

export default router;
