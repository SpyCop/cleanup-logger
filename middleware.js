/*
 * Javascript for the application server middleware
 * 14 Sept 2021, SpyCop
 */

 module.exports = {
	logger: function(req, res, next) {
		console.log('Request: '+ new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	};
};