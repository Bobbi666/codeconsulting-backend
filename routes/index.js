var express = require('express');
var router = express.Router();

const sendEmail = require('../utils/emailCenter');
// ea

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/test', function (req, res, next) {
	res.send('test passed');
});
router.post('/sendEmail', async (req, res, next) => {
	const { email, name, message } = req.body;

	//Oskar.johansson@codeconsulting.se

	const options = {
		email: 'alib4111@gmail.com',
		subject: 'test',
		message: message,
	};

	const response = await sendEmail(options);
	console.log(response);
	res.send('done');
});

module.exports = router;
