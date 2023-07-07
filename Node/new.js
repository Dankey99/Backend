const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const productSchema = new Schema({
name:String,
size:String,
            }); 
const productModel = mongoose.model("product", productSchema);
module.exports = productModel;