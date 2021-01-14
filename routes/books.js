const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

//GET back a list of all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET back a specific post
router.get('/:postId', async (req, res) => {
  try {
    const book = await Book.findById(req.params.postId);
    res.json(book);
  } catch (err) {
    res.json({ message: err });
  }
});

//POST a new book into directory
router.post('/', async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    hasRead: req.body.hasRead,
  });
  try {
    const savedBook = await book.save();
    res.json(savedBook);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETE a specific post
router.delete('/:postId', async (req, res) => {
  try {
    const removedBook = await Book.deleteOne({ _id: req.params.postId });
    res.json(removedBook);
  } catch (err) {
    res.json({ message: err});
  }
});

//PATCH a specific post (update)
router.patch('/:postId', async (req, res) => {
  try {
    let updatedBook = '';
    for (let key in req.body) {
      let obj = {};
      obj[key] = req.body[key];
      updatedBook = await Book.updateOne(
        { _id: req.params.postId },
        { $set: obj }
      );
    }
    res.json(updatedBook);
  } catch (err) {
    res.json({ message: err});
  }
});

module.exports = router;
