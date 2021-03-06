const PORT = process.env.PORT || 5000;
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const home = require('./routes/home');
const login = require('./routes/login');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(home.routes);
app.use(login.routes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
