import mongoose, { Schema } from 'mongoose';

// Define post schema
var answerSchema = new Schema({
  body: String,
  upvotes: Number,
  created_at: Date
});

// Export Mongoose model
export default mongoose.model('answer', answerSchema);
