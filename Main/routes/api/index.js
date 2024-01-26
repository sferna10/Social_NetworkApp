const router = require('express').Router();
const thoughtroutes = require('./thought-routes');
const userroutes = require('./user-routes');

router.use('/Users', userroutes);
router.use('/Thoughts', thoughtroutes);

module.exports = router;
