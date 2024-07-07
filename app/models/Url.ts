import mongoose, { Document, Schema } from 'mongoose';
import { generate as shortidGenerate } from 'shortid';

interface IUrl extends Document {
  originalUrl: string;
  shortId: string;
}

const UrlSchema: Schema = new Schema({
  originalUrl: { type: String, required: true },
  shortId: { type: String, unique: true, default: shortidGenerate },
});

const Url = mongoose.models.Url || mongoose.model<IUrl>('Url', UrlSchema);
export default Url;
