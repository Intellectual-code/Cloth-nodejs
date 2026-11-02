import { v4 as uuidv4 } from "uuid";
class FileService {
  async saveFile(file) {
    try {
      if(!file){
        throw new Error("файл не добавлен")
      }
      const MAX_SIZE = 5 * 1024 * 1024
      if(file.size > MAX_SIZE){
        throw new Error("файл большой, макс 5 мб")
      }
      const fileType = file.name.split(".").pop();
      const fileName = `${uuidv4()}.${fileType}`;
      const filePath = `./files/${fileName}`;
      await file.mv(filePath);
      return fileName;
    } catch (error) {
      console.log('ошибка при добавлении файла:' + error);
    }
  }
}
export default new FileService;