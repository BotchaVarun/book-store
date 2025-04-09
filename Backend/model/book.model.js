import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    image: {
      data: Buffer,
      contentType: String
    }
  });
  
const Book = mongoose.model("Book", BookSchema);

export default Book;