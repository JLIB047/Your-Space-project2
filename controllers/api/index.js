const router = require('express').Router();
const userRoutes = require('./User-Routes.js');
const postRoutes = require('./Post-routes');
const commentRoutes = require('./Comment-routes');
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;