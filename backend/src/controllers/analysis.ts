import { Response } from 'express';
import { AuthenticatedRequest } from '../types';
import { Analysis } from '../models/analysis';
import { Recording } from '../models/recording';

export const getAnalysis = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const recording = await Recording.findOne({
      _id: req.params.id,
      userId: req.user?.id
    });

    if (!recording) {
      return res.status(404).json({ error: 'Recording not found' });
    }

    const analysis = await Analysis.findOne({ recordingId: req.params.id });
    if (!analysis) {
      return res.status(404).json({ error: 'Analysis not found' });
    }

    res.json(analysis);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const compareRecordings = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { recordingIds } = req.body;

    if (!Array.isArray(recordingIds) || recordingIds.length < 2) {
      return res.status(400).json({ error: 'At least two recordings are required for comparison' });
    }

    const recordings = await Recording.find({
      _id: { $in: recordingIds },
      userId: req.user?.id
    });

    if (recordings.length !== recordingIds.length) {
      return res.status(404).json({ error: 'One or more recordings not found' });
    }

    const analyses = await Analysis.find({
      recordingId: { $in: recordingIds }
    });

    if (analyses.length !== recordingIds.length) {
      return res.status(404).json({ error: 'Analysis not available for all recordings' });
    }

    const comparison = {
      recordings,
      pitchDifference: calculatePitchDifference(analyses),
      volumeDifference: calculateVolumeDifference(analyses),
      clarityComparison: analyses.map(a => a.clarity),
      timestamp: new Date()
    };

    res.json(comparison);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Helper functions for analysis calculations
function calculatePitchDifference(analyses: any[]): number {
  const pitches = analyses.map(a => a.pitch.average);
  const max = Math.max(...pitches);
  const min = Math.min(...pitches);
  return max - min;
}

function calculateVolumeDifference(analyses: any[]): number {
  const volumes = analyses.map(a => a.volume.average);
  const max = Math.max(...volumes);
  const min = Math.min(...volumes);
  return max - min;
}