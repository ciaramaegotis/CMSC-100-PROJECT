// const HighScore = require('mongoose').model('HighScore');
const Question = require('mongoose').model('Question');
// const Movie = require('mongoose').model('Movie');




exports.findAll = (req, res) => {
 Question.find({}, (err, questions) => {
    if (err) {
      console.log(err);
      res.send({});
    } else {
      console.log(questions);
      res.send(questions);
    }
  });
}
//
// exports.findById = (req, res) => {
//   const _id = req.params._id;
//
//   Movie.findOne({ _id }, (err, movie) => {
//     if (err) {
//       console.log(err);
//       res.send({});
//     } else {
//       res.send(movie);
//     }
//   });
// }
//
// exports.add = (req, res) => {
//   const newMovie = new Movie(req.body);
//
//   newMovie.save((err, movie) => {
//     if (err) { res.send({}); }
//     else {
//       res.json(movie);
//     }
//   });
// }
//
// exports.delete = (req, res) => {
//   const _id = req.body._id;
//
//   Movie.remove({ _id }, (err) => {
//     if (err) {
//       res.send(false);
//     } else {
//       res.send(true);
//     }
//   });did
// }

exports.getquiz = (req, res) => {
  console.log("called getquiz");
  //get n random questions from 3 categories
  const categories = [req.params.cat1, req.params.cat2, req.params.cat3];
  const n = parseInt(req.params.n);
  //findAll movies with categories
  let  fetchedQuestions = new Array();

  for(let i = 0; i < 3; i++){
    // get all questions with current category
    Question.findAll({category: categories[i]}, (err, questions) =>
      {
        if(err){
          // if error, send empty object
          console.error();
          res.send({});
        }else{
          fetchedQuestions[i] = questions;
        }

      }
    );
  }
    // get n/3 hard random questions
  let questionsToSubmit = new Array();
  const difficulty = ['easy', 'medium', 'hard'];
  for(let i=0; i < n; i++){
    // get the a random questions from the current list of questions with the current category
    let category = difficulty[i%3];
    let questionSet = new Array();

    for(let j = 0; j < fetchedQuestions[i%3].length; j++){
      if(fetchedQuestions[i%3][j].category == category) questionSet.push(fetchedQuestions[i%3][j]);
    }
    // get the random question
    let randomQuestion = questionSet[Math.floor(Math.random() * questionSet.length)];
    questionsToSubmit.push(randomQuestion);
    // remove the question from fetchedQuestions[i%3]
    fetchedQuestions[i%3].splice(fetchedQuestions[i%3].indexOf(randomQuestion), 1);
  }
  res.send(questionsToSubmit);
}
