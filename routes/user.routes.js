const { Router } = require('express');
const { getUsers, postUsers, putUsers } = require('../controllers/user');
const { check } = require('express-validator');
const validated = require('../middlewares/validators');

const router = Router();

router.get('/', getUsers);
router.post('/', [
    check('createdDate').not().isEmpty(),
    check('email').isEmail(),
    check('firstName').not().isEmpty(),
    check('lastName').not().isEmpty(),
    check('password').not().isEmpty(),
    check('role').not().isEmpty(),
    //validated
]
    , postUsers);
router.put('/:id', putUsers);



module.exports = router;