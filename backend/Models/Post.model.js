import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    lng: {
      type: Number,
    },
    lat: {
      type: Number,
    },
    bgColor: {
      type: String,
    },
    PostType: {
      type: String,
      required: true,
    },
    likes: [
      {
        likeID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    comments: [
      {
        commentID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Comment",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
