let database  = require('./database.json');
let users = require('./users.json');
let books = require('./books.json');
// var thirdRoute  = require('./jsonfile3.json');
// var fourthRoute = require('./jsonfile4.json');
// and so on

module.exports = function() {
    return {
        database  : database,
        users : users,
        books: books,
        // thirdRoute  : thirdRoute,
        // fourthRoute : fourthRoute
        // and so on
    }
}
