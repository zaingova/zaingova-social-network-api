const router = require('express').Router();
const apiRoutes = require('./api');

// tells router to use the apiRoutes dir
router.use('/api', apiRoutes);

// wildcard route
router.use((req, res) => res.send('Wrong route!'));

module.exports = router;
