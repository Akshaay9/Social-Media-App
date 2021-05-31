import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    discription: {
      type: String,
    },
    image: {
      type: String,
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
