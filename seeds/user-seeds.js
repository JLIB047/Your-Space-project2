const { User } = require('../models');

const userData = [{
    username: 'Matt',
    password: 'test'
}, 
{
    username: 'Mags',
    password: 'test'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;