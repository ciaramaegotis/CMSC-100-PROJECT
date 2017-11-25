const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: {type: String, default: ''},
  image :{type: String,default: '' },
  type: { type: String, default: '' },
  difficulty: { type: String, default: '' },
  category: { type: String, default: '' },
  answer: { type: String, default: '' },
  choices: {type: Array, default: []}
},
{collection: 'Question'}
);

mongoose.model('Question', QuestionSchema);
