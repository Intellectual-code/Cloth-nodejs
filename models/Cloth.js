// название тип категория размер артикул цена
import mongoose from "mongoose"
const clothSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "название обязательно"],
            trim: true
        },
        type: {
            type:String,
            required:  [true , "тип обязателен!"],
            trim: true
        },
        category: {
            type:String,
            required:  [true , "Категория обязательна!"],
            trim: true
        },
        size: {
            type:String,
            required:  [true , "размер обязателен!"],
            trim: true
        },
        art: {
            type: Number,
            required: [true , "артикул обязателен!"],
            min: 0
        },
        price: {
            type: Number,
            required: [true , "цена обязательна!"],
            min: 0
        }
    }
)
export default mongoose.model("Cloth", clothSchema);