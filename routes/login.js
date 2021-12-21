const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next) => {
  res.render('login', {
    pageTitle: 'Login',
    path: '/login',
    username: ''
  });
});

router.post('/login', (req, res, next) => {
  
  res.redirect('/?username=' + req.body.title);
});

exports.routes = router;
