const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId:{type:String ,required:true},
    products:[
        {
            productId:{type :String},
            quantity :{type:Number,default:1}
        }
    ],
    address:{type:String,reuired:true },
    amount:{type:Number,required:true},
    status:{type:String,default:"pending",required:true}

},{timestamps:true});
mongoose.model = {}
export default  mongoose.model("Order",orderSchema);