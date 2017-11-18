const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HighScoreSchema = new Schema({
  name: { type: String, defualt: '' },
  score: {type: Number, default: 0}
});

mongoose.model('HighScore', HighScoreSchema);
