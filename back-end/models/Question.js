const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: {type: String, defualt: ''},
  type: { type: String, default: '' },
  difficulty: { type: String, default: '' },
  category: { type: String, default: '' },
  answer: { type: String, default: '' },
  choices: {type: Array, default: []}
});

mongoose.model('Question', QuestionSchema);
