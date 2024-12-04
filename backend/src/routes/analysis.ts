import express from 'express';
import { auth } from '../middleware/auth';
import * as analysisController from '../controllers/analysis';

const router = express.Router();

router.get('/recording/:id', auth, analysisController.getAnalysis);
router.post('/compare', auth, analysisController.compareRecordings);

export default router;