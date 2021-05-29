const {
  addNewBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    path: '/books',
    method: 'GET',
    handler: getAllBooksHandler,
  },
  {
    path: '/books',
    method: 'POST',
    handler: addNewBookHandler,
  },
  {
    path: '/books/{bookId}',
    method: 'GET',
    handler: getBookByIdHandler,
  },
  {
    path: '/books/{bookId}',
    method: 'PUT',
    handler: editBookHandler,
  },
  {
    path: '/books/{bookId}',
    method: 'DELETE',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
