const router = require('express').Router();
const thought-routes = require('./thought-routes');
const user-routes = require('./user-Routes');

router.use('/User', user-routes);
router.use('/Thought', thought-routes);

module.exports = router;
