import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    feeling:{
      type:String
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
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
