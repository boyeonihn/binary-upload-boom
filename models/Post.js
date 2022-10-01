const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({   // template of the document for the Post 
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,       // storing it by Date 
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
