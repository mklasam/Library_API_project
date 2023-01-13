const express = require("express");
const bookModel = require("./models");
const app = express();

app.post("/add_book", async (request, response) => {
    const book = new bookModel(request.body);
  
    try {
      await book.save();
      response.send(book);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/books", async (request, response) => {
    const books = await bookModel.find({});
  
    try {
      response.send(books);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  module.exports = app;