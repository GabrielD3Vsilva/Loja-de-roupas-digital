import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config( );

const url: any = process.env.URLMONGODB;

mongoose.connect(url)
.then(()=>console.log('mongoDb connected'))
.catch((error)=> console.log(error))

const productSchema = new mongoose.Schema({
    title: String,
    value: Number,
    description: String,
    image: String
})

const Product = mongoose.model('Product', productSchema);

export default {
    Product
}
