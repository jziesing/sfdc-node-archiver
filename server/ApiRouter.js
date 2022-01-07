/*
 * @ApiRouter.js
 */
"use strict";


let express = require('express'),
    ApiMethods = require('./ApiMethods.js'),
    ApiRouter = express.Router(),
    ApiMethodsRouter = new ApiMethods();
/*
 *  api routes
 */
ApiRouter.post("/api/archive/case/:caseid", ApiMethodsRouter.ArchiveCase);



/*
 * export
 */
module.exports = ApiRouter;
