import express from "express";
import asyncHandler from 'express-async-handler';
import {addStore} from "../controllers/store.controller.js";

export const storeRouter = express.Router();

storeRouter.post('/', asyncHandler(addStore));