import express from 'express';
import { submitform } from '../controller/entrepreneur.js';
import { getmyform } from '../controller/entrepreneur.js';
const router = express.Router();

router.post("/new",submitform);
router.get('/my', getmyform);

export default router;