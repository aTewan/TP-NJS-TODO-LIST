const Sequelize = require('sequelize');
const db = require('../db.js')

const Todo = db.define('todo', {
    message: {
     type: Sequelize.STRING
   },
    completion: {
     type: Sequelize.STRING
   },
   createdAt: {
     type: Sequelize.DATE
   },
   updatedAt: {
       type: Sequelize.DATE
   }
});