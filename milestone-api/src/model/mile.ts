import mongoose, { Schema, Document } from 'mongoose';

interface IMile extends Document {
  address: string
  name: string
  projectType: string
  description?: string
  facebook?: string
  instagram?: string
  twitter?: string
  youTube?: string
  finalValue: number
  startDate: string
  endDate: string
  goal10?: string
  goal35?: string
  goal70?: string
  goal100: string
  token: string
}

const MileSchema: Schema = new Schema({
  address: { type: String, required: true },
  name: { type: String, required: true },
  projectType: { type: String, required: true },
  description: { type: String, required: false },
  facebook: { type: String, required: false },
  instagram: { type: String, required: false },
  twitter: { type: String, required: false },
  youTube: { type: String, required: false },
  finalValue: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  goal10: { type: String, required: false },
  goal35: { type: String, required: false },
  goal70: { type: String, required: false },
  goal100: { type: String, required: true },
  token: { type: String, required: true },
}, {collection: 'miles'});

export const MileModel = mongoose.model<IMile>('Mile', MileSchema);