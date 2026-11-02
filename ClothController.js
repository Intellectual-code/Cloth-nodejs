import Cloth from "./models/Cloth.js";
import fileService from "./fileService.js";

class ClothController {
  async getCloth(req, res) {
    try {
      const clothes = await Cloth.find();
      res.json(clothes);
      console.log(clothes);
    } catch (error) {
      console.log("Ошибка при получении одежды: " + error);
    }
  }
  async getCloth1(req, res) {
    try {
      const { id } = req.params;
      const clothes = await Cloth.find(id);
      res.json(clothes);
      console.log(clothes);
    } catch (error) {
      console.log("Ошибка при получении одежды: " + error);
    }
  }
  async addCloth(req, res) {
    try {
      const { title, type, category, size, art, price } = req.body;
      console.log(req.body);
      let fileName = null;

    if (req.files && req.files.image) {
      fileName = await fileService.saveFile(req.files.image);
      if (!fileName) {
        return res.status(400).send("ошибка при добавлении файла");
      }
    }

      const newCloth = await Cloth.create({
        title,
        type,
        category,
        size,
        art,
        price,
        image: fileName,
      });
      await newCloth.save();
      res.send("одежда успешно добавлена");
    } catch (error) {
      console.log("Ошибка при добавлении одежды: " + error);
    }
  }
  async deleteCloth(req, res) {
    try {
      const { id } = req.params;
      console.log(id);
      const clot = await Cloth.findByIdAndDelete(id);
      res.send("одежда удалена");
    } catch (error) {
      console.log("Ошибка при удалении одежды: " + error);
    }
  }
  async ChangeCloth(req, res) {
    try {
      let fileName = null;
      console.log(req.files.image);

      const { id } = req.params;
      const { title, type, category, size, art, price } = req.body;
      const updateCloth = await Cloth.findByIdAndUpdate(id, {
        title,
        type,
        category,
        size,
        art,
        price,
      });

      if (!updateCloth) {
        res.send("Такой одежды не существует!");
      }

      res.send("Данные успешно изменены!");
    } catch (error) {
      console.log("Ошибка при изменении одежды: " + error);
    }
  }
}

export default new ClothController();
