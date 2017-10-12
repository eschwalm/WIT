import mongoose, { Schema } from 'mongoose';

// Define post schema
var postSchema = new Schema({
  title: String,
  img: String,
  category: String,
  answers: Array,
  created_at: Date,
});

// Export Mongoose model
export default mongoose.model('post', postSchema);
