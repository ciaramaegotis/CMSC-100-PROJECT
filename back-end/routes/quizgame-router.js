const router = require('express').Router();
const QuizGameController = require('../controllers/quizgame-controller');

/**
 * GET    /find-all
 * GET    /find-by-id
 * POST   /add
 * POST   /delete
 */

/*
* GET /getquiz?category1=:cat1&category2=:cat2&category3=:cat3&count=:n
* POST /submitscore
* GET /gethighscores
* GET /get-all-categories
* GET /questions-from-category/:category //for getting questions from a category
* POST /add-category
* POST /delete-category
* POST /edit-category
* GET /view-question/:id
* POST /edit-question
* POST /delete-question
*/

//
// router.get('/find-all', MovieController.findAll);
// router.get('/find-by-id/:_id', MovieController.findById);
// router.post('/add', MovieController.add);
// router.post('/delete', MovieController.delete);
router.get('/getquiz/category1=:cat1&category2=:cat2&category3=:cat3&count=:n', QuizGameController.getquiz);
router.get('/findAll', QuizGameController.findAll);
module.exports = router;
