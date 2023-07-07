
const mongoose = require("mongoose")
//mongoose.connect("mongodb://127.0.0.1:27017").then(() => {
  //  console.log("connected!")
    //mongoose.disconnect().then(() =>
    //console.log("disconnect"))})

    //console.log("end of file")
    const input = require("prompt-sync")()
    const productModel = require("/Users/Admin/Backend/Node/new")
    mongoose.connect("mongodb://127.0.0.1:27017/").then(async() => {
 
    console.log("Connected!");
    
    await productModel.deleteMany().then(async() => {
    const name = input("what is the name?")
    const size = input("what is the size?")
    await productModel.create({
        name:"Samsung",
        size:"small"})

    await productModel.create({
        name:"Iphone",
        size:"Large"
   }).then(()=> {

       productModel.find({}).then(res => {
           for (let product of res){
               console.log(product)
           }
 
    
           
            mongoose.disconnect()
        })
            })
                })  
                    }) 