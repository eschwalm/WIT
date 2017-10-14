import mongoose, { Schema } from 'mongoose';

// Define post schema
var postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
},
{
  timestamps: true
});

// Export Mongoose model
export default mongoose.model('post', postSchema);
