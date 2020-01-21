import mongoose from 'mongoose';
import PointSchema from './util/point';

const SpotSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    location: {
      type: PointSchema,
      index: '2dsphere',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Point', SpotSchema);
