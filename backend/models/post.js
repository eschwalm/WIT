import mongoose, { Schema } from 'mongoose';

// Define post schema
var postSchema = new Schema({
  title: String,
  img: String,
  category: String
},
{
  timestamps: true
});

// Export Mongoose model
export default mongoose.model('post', postSchema);
