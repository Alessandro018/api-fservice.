module.exports = routes => {
    const router = require('express').Router();
    const UserController = require('../controllers/UserController');

    router.post('/register', UserController.store);

    routes.use('/users', router);
    // module.exports = router;
}