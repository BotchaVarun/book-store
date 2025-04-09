import Book from "../model/book.model.js"; // Make sure this import is correct

export const getBook = async (req, res) => {
    try {
        const books = await Book.find();

        // Convert buffer data to base64 before sending it to the client
        const formattedBooks = books.map(book => ({
            ...book._doc,
            image: book.image ? {
                data: book.image.data.toString('base64'), 
                contentType: book.image.contentType
            } : null
        }));

        console.log(formattedBooks); // Log the formatted books

        res.json(formattedBooks); // Send the formatted books in the response

    } catch (error) {
        console.error('Error fetching books:', error); // Log the error for debugging
        res.status(500).json({ message: error.message });
    }
};
