import mongoose from 'mongoose';
import Post from './models/post';
import db from './config/db';

const posts = [
  { "img":
  "http://res.cloudinary.com/dhuab49yi/image/upload/v1506717168/sample.jpg",
    "category": "Nature",
    "description": "What kind of flower is this?",
    "answers": [],
    "created_at": new Date()
  }
];

// Connect to MongoDB
var promise = mongoose.connect(db.url, {
  useMongoClient: true,
  /* other options */
});


posts.map(data => {
  // Initialize a model with post data
  const post = new Post(data);
  // and save it into the database
  post.save();
});
