const router = require('express').Router();
const thoughtroutes = require('./thought-routes');
const userroutes = require('./user-routes');

router.use('/User', user-routes);
router.use('/Thought', thought-routes);

module.exports = router;
