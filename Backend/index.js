import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();

// ✅ CORS Configuration for Vercel frontend
const allowedOrigins = [
  "http://localhost:3000", // for local dev
  "https://book-store-seven-tawny.vercel.app" // for deployed frontend
];
const path=require('path');
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json());

const PORT = process.env.PORT || 8080;
const URI = "mongodb+srv://varunbotcha:varun123@cluster0.afzwir6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// ✅ MongoDB Connection
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("MongoDB connection error:", error);
}

// ✅ Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
app.use(express.static(path.join(__dirname, "Frontend")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "Frontend","index.html"));
});
