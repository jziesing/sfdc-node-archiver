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
        this.BackupCase = this.BackupCase.bind(this);
    }
    /*  @route: /api/archive/case/
     *     - POST
     */
    ArchiveCase(req, res) {
        res.setHeader('Content-Type', 'application/json');
		console.log('TIME TO ArchiveCase');
        this.mHelper.ArchiveOrBackupCase(req.body, 'archive')
                  .then(result => {
                        res.sendStatus(200);
                  }).catch(err => {
					  	if(typeof(err) == 'number')
						  	res.sendStatus(err);
					  	else
						  	res.sendStatus(500);
                  });
    }
    /*  @route: /api/archive/case/
     *     - POST
     */
    BackupCase(req, res) {
        res.setHeader('Content-Type', 'application/json');
		console.log('TIME TO BackupCase');
        this.mHelper.ArchiveOrBackupCase(req.body, 'backup')
                  .then(result => {
                        res.sendStatus(200);
                  }).catch(err => {
					  	if(typeof(err) == 'number')
						  	res.sendStatus(err);
					  	else
						  	res.sendStatus(500);
                  });
    }
}

module.exports = ApiMethods;
