import mongoose from 'mongoose';
import { IRecording } from '../types';

const recordingSchema = new mongoose.Schema<IRecording>(
  {
    userId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    fileUrl: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    tags: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true
  }
);

export const Recording = mongoose.model<IRecording>('Recording', recordingSchema);