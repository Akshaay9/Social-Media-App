export const postData = [
  {
    _id: "60b4d0d43bc15937f897cd66",
    description: "first-Post, whats up good peopl, how u guys doing",
    userID: {
      _id: "60b476056926ec2b00f3abf1",
      name: "kai",
      profileImage:
        "https://upload.wikimedia.org/wikipedia/commons/0/07/Kai_at_a_Launching_Press_Conference_on_October_2%2C_2019_3.jpg",
    },
    PostType: "text",
    likes: [
      {
        _id: "60b4d1043bc15937f897cd67",
        likeID: {
          _id: "60b476056926ec2b00f3abf1",
          name: "Kai",
          profileImage:
            "https://upload.wikimedia.org/wikipedia/commons/0/07/Kai_at_a_Launching_Press_Conference_on_October_2%2C_2019_3.jpg",
        },
      },
    ],
    comments: [
      {
        _id: "60b4d17002c18f0e04ce2ad0",
        user: {
          _id: "60b476056926ec2b00f3abf1",
          name: "Kai",
          profileImage:
            "https://upload.wikimedia.org/wikipedia/commons/0/07/Kai_at_a_Launching_Press_Conference_on_October_2%2C_2019_3.jpg",
        },
        commentID: {
          _id: "60b4d16f02c18f0e04ce2acf",
          comment: "updat comment testing",
          createdAt: "2021-05-31T12:07:11.545Z",
          updatedAt: "2021-05-31T13:03:08.906Z",
        },
      },
    ],
    createdAt: "2021-05-31T12:04:36.707Z",
    updatedAt: "2021-05-31T12:50:57.623Z",
  },
];
