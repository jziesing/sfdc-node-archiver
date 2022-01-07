/*
 * @MethodHelper.js
 */
"use strict";



class MethodHelper {

    constructor() {
		// methods
        this.ArchiveCase = this.ArchiveCase.bind(this);
    }
    /*  @route: /api/pb/cli/signup
     *     - POST
     *   input = { username: '', email: '', firstname: '', lastname: ''  }
     *   output = Promise:
     *              - resolve --> returns status 200, users signed up and confirmation email is sent
     *              - reject:
     *                   - status 500 = error, try again later or try different email
     *                   - status 409 = email or username already exists
     */
    ArchiveCase(reqBodyForm) {
		console.log('reqBodyForm');
		console.log(reqBodyForm);
		let caseToAdd = JSON.parse(reqBodyForm);
		console.log('PARSED reqBodyForm');
		console.log(caseToAdd);
        return new Promise((resolve, reject) => {
            console.log(reqBodyForm);
            resolve(200);
        });
    }
    /*  @route: /api/pb/cli/login
     *     - POST
     *   input = { username: '', password: '' }
     *   output = Promise:
     *              - resolve --> returns sid
     *              - reject --> status 500, error
     */
    // Login(reqBodyForm) {
	//
    //     return new Promise((resolve, reject) => {
    //         console.log(reqBodyForm);
    //         if(typeof(reqBodyForm.username) == 'string' && reqBodyForm.username.length > 3 &&
    //            typeof(reqBodyForm.password) == 'string' && reqBodyForm.password.length > 6) {
	//
    //                 resolve(200);
    //         } else {
    //             console.log('did not meet if check');
    //             reject(500);
    //         }
    //     });
    // }
}

module.exports = MethodHelper;
