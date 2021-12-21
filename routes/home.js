const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

  const username = req.query.username;

  res.render('home', {
    pageTitle: 'Home',
    path: '/',
    username:  typeof username == 'undefined'? '': username
  });
});

exports.routes = router;
