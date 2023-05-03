const { Comment } = require('../models');
const commentData = [
    {
      body: "nice bulldog",
      post_id: 1,
      user_id: 1
    },
    {
        body: "nice bulldog",
      post_id: 2,
      user_id: 2
    },
    {
        body: "nice bulldog",
        post_id: 3,
        user_id: 3
    },
    {
        body: "nice bulldog",
        post_id: 4,
        user_id: 4
    },
    {
      nbody: "nice bulldog",
      post_id: 5,
      user_id: 5
    }
  ];

const seedComments = () => Comment.bulkCreate(commentData)

module.exports = seedComments