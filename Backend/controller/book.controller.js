import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
  try {
    const books = await Book.find();

    // Convert buffer data to base64 safely
    const formattedBooks = books.map(book => ({
      ...book._doc,
      id: book._id?.toString() || null,
      image: book.image?.data && book.image?.contentType
        ? {
            data: book.image.data.toString("base64"),
            contentType: book.image.contentType
          }
        : null
    }));

    console.log(formattedBooks); // Debug log

    res.json(formattedBooks);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Error fetching books", error: error.message });
  }
};
