const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mern-crud-test';
//MERN-CRUD-TEST É O NOME DO BANCO QUE SERÁ CRIADO DENTRO DO MONGODB

mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;
