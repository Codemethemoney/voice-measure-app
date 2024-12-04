import mongoose from 'mongoose';
import { IAnalysis } from '../types';

const analysisSchema = new mongoose.Schema<IAnalysis>(
  {
    recordingId: {
      type: String,
      required: true
    },
    pitch: {
      average: {
        type: Number,
        required: true
      },
      range: {
        min: {
          type: Number,
          required: true
        },
        max: {
          type: Number,
          required: true
        }
      }
    },
    volume: {
      average: {
        type: Number,
        required: true
      },
      peaks: {
        type: [Number],
        required: true
      }
    },
    clarity: {
      type: Number,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

export const Analysis = mongoose.model<IAnalysis>('Analysis', analysisSchema);