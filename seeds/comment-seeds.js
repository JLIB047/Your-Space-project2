const { Comment } = require('../models');

const commentData = [{
        comment_text: "This is a comment against this blog post.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Why would you post this!!!",
        user_id: 2,
        post_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;