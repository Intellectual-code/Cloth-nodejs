import { Router } from "express";
import ClothController from "./ClothController.js";

const router = new Router()

router.get('/clothes' , ClothController.getCloth)
router.get('/clothes/:id' , ClothController.getCloth1)
router.post('/addCloth' , ClothController.addCloth)
router.delete("/delcloth/:id", ClothController.deleteCloth)
router.patch('/ChangeCloth/:id' , ClothController.ChangeCloth)


export default router;