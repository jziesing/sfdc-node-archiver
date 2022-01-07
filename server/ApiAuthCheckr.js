/*
 * @ApiAuthCheckr.js
 */
"use strict";


module.exports = function(req, res, next) {
	// protected routes
	let stokentype = req.headers['Authorization'];
	console.log('stokentype : ' + stokentype);
	next();
  	// if(stokentype) {
	// 	console.log('Public Stoke Route type : ' + stokentype);
	// 	next();
	// } else {
	// 	res.status(404).end();
	// }
};
