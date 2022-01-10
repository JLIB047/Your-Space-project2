const { Post } = require('../models');

const postData = [{
        title: 'eCommerce',
        post_url: 'www.google.com',
        user_id: 1

    },
    {
        title: 'WordPress',
        post_url: 'www.msn.com',
        user_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;