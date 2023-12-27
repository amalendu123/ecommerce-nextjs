import product from "../../models/product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
    try {
        // Fetch products from the database
        let products = await product.find();

        // Send the products as a response
        res.status(200).json({ products });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default handler;
