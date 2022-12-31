import mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';

const schema = new mongoose.Schema({
  _id: { type: String, default: uuid },
  title: String,
  description: String,
  image: String,
  category: String, // "travel", "photography"
  categorySubtype: String, // "name of country", "food, illuminations, etc..."
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Blog', schema);
