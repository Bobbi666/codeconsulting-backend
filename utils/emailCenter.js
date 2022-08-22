const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
	console.log(process.env.SMTP_EMAIL);
	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: process.env.SMTP_PORT,
		auth: {
			user: process.env.SMTP_EMAIL,
			pass: process.env.SMTP_PASSWORD,
		},
		secure: false,
		secureConnection: false,
		debug: true,
		tls: {
			rejectUnauthorized: false,
		},
	});

	const message = {
		from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
		to: options.email,
		subject: options.subject,
		html: options.message,
	};

	const info = await transporter.sendMail(message);

	return info;
};

module.exports = sendEmail;
