import mongoose, { Schema, Document } from 'mongoose';

interface IMile extends Document {
  name: string
  projectType: string
  description?: string
  facebook?: string
  instagram?: string
  twitter?: string
  youTube?: string
  finalValue: number
  qtdTokens: number
  startDate: Date
  endDate: Date
  goal10?: string
  goal35?: string
  goal70?: string
  goal100: string
  token: string
  ownerAddress: string
  contractAddress: string
}

const MileSchema: Schema = new Schema<IMile>({
  name: { type: String, required: true },
  projectType: { type: String, required: true },
  description: { type: String, required: false },
  facebook: { type: String, required: false },
  instagram: { type: String, required: false },
  twitter: { type: String, required: false },
  youTube: { type: String, required: false },
  finalValue: { type: Number, required: true },
  qtdTokens: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  goal10: { type: String, required: false },
  goal35: { type: String, required: false },
  goal70: { type: String, required: false },
  goal100: { type: String, required: true },
  token: { type: String, required: true },
  ownerAddress: { type: String, required: true },
  contractAddress: { type: String, required: true },
}, {collection: 'miles'});

export const MileModel = mongoose.model<IMile>('Mile', MileSchema);