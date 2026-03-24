import mongoose from "mongoose"

const connectDb = async () => {
    try {
        console.log("ENV VALUE:", process.env.MONGODB_URL); // 👈 ADD THIS

        await mongoose.connect(process.env.MONGODB_URL)

        console.log("✅ DB connected")
    } catch (error) {
        console.log("❌ DB ERROR:", error.message) // 👈 improve error
    }
}

export default connectDb