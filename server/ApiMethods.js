/*
 * @ApiMethods.js
 */
"use strict";

let MethodHelper = require('./MethodHelper.js');

class ApiMethods {

    constructor() {
        this.mHelper = new MethodHelper();
		// methods
        this.ArchiveCase = this.ArchiveCase.bind(this);
    }
    /*  @route: /api/archive/case/:caseid
     *     - GET
     */
    ArchiveCase(req, res) {
        res.setHeader('Content-Type', 'application/json');
		console.log('req.body');
		console.log(req.body);
        this.mHelper.ArchiveCase(req.body)
                  .then(result => {
                        res.sendStatus(200);
                  }).catch(err => {
					  	if(typeof(err) == 'number')
						  	res.sendStatus(err);
					  	else
						  	res.sendStatus(500);
                  });
    }
    /*  @route: /api/pb/cli/login
     *     - POST
     */
    // Login(req, res) {
    //     res.setHeader('Content-Type', 'application/json');
	//
    //     this.userH.Login(req.body)
    //               .then(result => {
    //                     res.sendStatus(200);
    //               }).catch(err => {
    //                     if(typeof(err) == 'number')
    //                         res.sendStatus(err);
    //                     else
    //                         res.sendStatus(500);
    //               });
    // }
}

module.exports = ApiMethods;
