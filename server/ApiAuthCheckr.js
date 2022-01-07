/*
 * @ApiAuthCheckr.js
 */
"use strict";


module.exports = function(req, res, next) {
	// protected routes
	//let stokentype = req.headers['Authorization'];
	console.log('stokentypesss : ');
	console.log(req.headers);
	next();
  	// if(stokentype) {
	// 	console.log('Public Stoke Route type : ' + stokentype);
	// 	next();
	// } else {
	// 	res.status(404).end();
	// }
};
