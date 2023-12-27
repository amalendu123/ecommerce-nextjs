import mongoose from "mongoose";

const connectDb = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            console.log("Already connected to the database");
            return;
        }

        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

export default connectDb;
