const express = require('express');
const router = express.Router({ mergeParams: true });
const meals = require('../controllers/meal.controller');
const secure = require('../middleware/secure.middleware');
const user = require('../middleware/user.middleware');
const reviews = require('../controllers/review.controller')

router.get('/', meals.list);
router.post('/', meals.create);
router.get('/:id', meals.get);
router.delete('/:id', meals.delete);

router.post('/:id/reviews', reviews.create)
router.get('/:id/reviews', reviews.listByMeal)
router.delete('/:id/reviews/:id', reviews.delete);


module.exports = router;
