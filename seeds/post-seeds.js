const { Post } = require('../models');

const postData = [
    {
        title: 'Dog',
        body: 'A Dog'
    },
    {
        title: 'Cat',
        body: 'A Cat'
    },
    {
        title: 'Fish',
        body: 'Woof'
    },
    {
        title: 'Gecko',
        body: 'Meow'
    },
    {
        title: 'Duck',
        body: 'Quack'
    }
];;

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts