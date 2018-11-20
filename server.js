// REQUIREMENTS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// MIDDLEWARE
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


// ROUTES
app.get('/', (req, res) => {
	res.send('Hello World, This is Tirapat!');
});

app.post('/api/user', (req, res) => {
	res.send('User created!');
});







// SERVER START
app.listen(3000, () => {
  console.log("HTTP server listening at localhost:3000");
});