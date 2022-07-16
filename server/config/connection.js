const mongoose = require('mongoose');

const mongoString = process.env.MONGODB_URI ? `${process.env.MONGODB_URI}/googlebooks` : 'mongodb://localhost/googlebooks';

console.log(mongoString)

mongoose.connect(mongoString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
