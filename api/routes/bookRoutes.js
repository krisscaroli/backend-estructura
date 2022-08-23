import express from "express";
import * as bookController from "../controllers/bookController.js";

const router = express.Router();

/**
 * TODO aca vab todas las rutas
 */
router
  .route("/books")
  .get(bookController.getAllBooks)
  .post(bookController.createBooks);

router
  .route("/books/:id")
  .get(bookController.getBookById)
  .put(bookController.updateBookById)
  .delete(bookController.deleteBookById);

export default router;
