import product from "../../models/product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method = "POST") {
        for(let i= 0 ;i<req.body.length;i++){
        let p = await product.findByIdAndUpdate(req.body[i]._id,req.body[i])
    }
    } else {
        res.status(500).json({ error: "This method is not allowed" });
    }
    
};

export default handler;
