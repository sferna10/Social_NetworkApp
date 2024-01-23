const router = require('express').Router();
const thoughtroutes = require('./thought-routes');
const userroutes = require('./user-routes');

router.use('/User', userroutes);
router.use('/Thought', thoughtroutes);

module.exports = router;
