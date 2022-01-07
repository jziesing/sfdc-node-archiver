/*
 * @ApiAuthCheckr.js
 */
"use strict";


module.exports = function(req, res, next) {
	// protected routes
	//let stokentype = req.headers['Authorization'];
	console.log('stokentypesss : ');
	console.log(req.headers.authorization.substring(5, req.headers.authorization.length));
	let buff = Buffer.from(req.headers.authorization.substring(5, req.headers.authorization.length), 'base64');
	let text = buff.toString('ascii');
	console.log('DEccoooodeddd : ');
	console.log(text);
	next();
  	// if(stokentype) {
	// 	console.log('Public Stoke Route type : ' + stokentype);
	// 	next();
	// } else {
	// 	res.status(404).end();
	// }
};
