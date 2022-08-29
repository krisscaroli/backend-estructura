import express from "express";
import * as bookController from "../controllers/bookController.js";
import createBookValidator from "../middlewares/createBookValidator.js";

const router = express.Router();

/**
 * TODO aca vab todas las rutas
 */
router
  .route("/books")
  .get(bookController.getAllBooks)
  .post(createBookValidator,bookController.createBooks);

router
  .route("/books/:id")
  .get(bookController.getBookById)
  .put(bookController.updateBookById)
  .delete(bookController.deleteBookById);

export default router;
