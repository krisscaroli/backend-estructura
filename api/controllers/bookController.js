import Book from "../models/Book.js";

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.json({
      msg: "libros encontrados",
      data: books,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "ERROR AL BUSCAR LIBROS",
      data: error,
    });
  }
};
const createBooks = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    return res.json({
      msg: "libro creado",
      book: newBook,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "ERROR",
      error,
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({
        msg: "No existe el libro",
      });
    }
    return res.json({
      msg: "Libro encontrado",
      data: {
        book,
      },
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al buscar libro por id",
      error,
    });
  }
};

const updateBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({
      msg: "Libro actualizado",
      data: { book: updatedBook },
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al actualizar libro",
      error,
    });
  }
};

const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    return res.json({
      msg: "Elemento eliminado",
      data: { book },
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al borrar libro por id",
      error,
    });
  }
};

export {
  getAllBooks,
  createBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};
