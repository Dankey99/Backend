const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const productSchema = new Schema({
name:String,
size:String,
            }); 
const productModel = mongoose.model("product", productSchema);
module.exports = productModel;

async function setupTestData(){
       
         
                await productModel.create({
                    name:"pixel",
                    size:"large"
                 })
                 await productModel.create({
                    name:"sonyxperia",
                    size:"small"
})
}