import mongoose, { Schema } from 'mongoose';

// Define post schema
var answerSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  upvotes: {
    type: Number,
    required: true
  },
  post_id: {
    type: String,
    required: true
  }
},
{
  timestamps: true
}
);

// Export Mongoose model
export default mongoose.model('answer', answerSchema);
