const router = require('express').Router();
const thought-route = require('./thought-routes');
const user-routes = require('./user-routes');

router.use('/User', user-routes);
router.use('/Thought', thought-routes);

module.exports = router;
