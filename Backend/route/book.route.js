import express from "express";
import { getBook } from "../controller/book.controller.js"; // Ensure the path is correct

const router = express.Router();

router.get("/", getBook); // Using getBook as the handler for the route

export default router;
