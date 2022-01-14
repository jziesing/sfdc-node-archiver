/*
 * @MethodHelper.js
 */
"use strict";

const { Client } = require('pg');

class MethodHelper {

    constructor() {
		// methods
        this.ArchiveOrBackupCase = this.ArchiveOrBackupCase.bind(this);
    }
    /*  @route: /api/archive/case/signup
     *     - POST
     */
    ArchiveOrBackupCase(reqBodyForm, rec_type) {
		// build query string
		let qrystr = "INSERT INTO sfdc_archive.archived_cases(record_type, ";

		if(typeof reqBodyForm.Id != "undefined" && reqBodyForm.Id != "" && reqBodyForm.Id != null) {
			qrystr = qrystr + "sfid, ";
		}
		if(typeof reqBodyForm.ContactEmail != "undefined" && reqBodyForm.ContactEmail != "" && reqBodyForm.ContactEmail != null) {
			qrystr = qrystr + "contactemail, ";
		}
		if(typeof reqBodyForm.CreatedDate != "undefined" && reqBodyForm.CreatedDate != "" && reqBodyForm.CreatedDate != null) {
			qrystr = qrystr + "createddate, ";
		}
		if(typeof reqBodyForm.SLAViolation__c != "undefined" && reqBodyForm.SLAViolation__c != "" && reqBodyForm.SLAViolation__c != null) {
			qrystr = qrystr + "slaviolation__c, ";
		}
		if(typeof reqBodyForm.IsEscalated != "undefined" && reqBodyForm.IsEscalated != "" && reqBodyForm.IsEscalated != null) {
			qrystr = qrystr + "isescalated, ";
		}
		if(typeof reqBodyForm.Type != "undefined" && reqBodyForm.Type != "" && reqBodyForm.Type != null) {
			qrystr = qrystr + "type, ";
		}
		if(typeof reqBodyForm.SystemModstamp != "undefined" && reqBodyForm.SystemModstamp != "" && reqBodyForm.SystemModstamp != null) {
			qrystr = qrystr + "systemmodstamp, ";
		}
		if(typeof reqBodyForm.Subject != "undefined" && reqBodyForm.Subject != "" && reqBodyForm.Subject != null) {
			qrystr = qrystr + "subject, ";
		}
		if(typeof reqBodyForm.Priority != "undefined" && reqBodyForm.Priority != "" && reqBodyForm.Priority != null) {
			qrystr = qrystr + "priority, ";
		}
		if(typeof reqBodyForm.ContactMobile != "undefined" && reqBodyForm.ContactMobile != "" && reqBodyForm.ContactMobile != null) {
			qrystr = qrystr + "contactmobile, ";
		}
		if(typeof reqBodyForm.Status != "undefined" && reqBodyForm.Status != "" && reqBodyForm.Status != null) {
			qrystr = qrystr + "status, ";
		}
		if(typeof reqBodyForm.Product__c != "undefined" && reqBodyForm.Product__c != "" && reqBodyForm.Product__c != null) {
			qrystr = qrystr + "product__c, ";
		}
		if(typeof reqBodyForm.CaseNumber != "undefined" && reqBodyForm.CaseNumber != "" && reqBodyForm.CaseNumber != null) {
			qrystr = qrystr + "casenumber, ";
		}
		if(typeof reqBodyForm.OwnerId != "undefined" && reqBodyForm.OwnerId != "" && reqBodyForm.OwnerId != null) {
			qrystr = qrystr + "ownerid, ";
		}
		if(typeof reqBodyForm.CreatedById != "undefined" && reqBodyForm.CreatedById != "" && reqBodyForm.CreatedById != null) {
			qrystr = qrystr + "createdbyid, ";
		}
		if(typeof reqBodyForm.ContactPhone != "undefined" && reqBodyForm.ContactPhone != "" && reqBodyForm.ContactPhone != null) {
			qrystr = qrystr + "contactphone, ";
		}
		if(typeof reqBodyForm.Reason != "undefined" && reqBodyForm.Reason != "" && reqBodyForm.Reason != null) {
			qrystr = qrystr + "reason, ";
		}
		if(typeof reqBodyForm.IsClosed != "undefined" && reqBodyForm.IsClosed != "" && reqBodyForm.IsClosed != null) {
			qrystr = qrystr + "isclosed, ";
		}
		if(typeof reqBodyForm.ContactId != "undefined" && reqBodyForm.ContactId != "" && reqBodyForm.ContactId != null) {
			qrystr = qrystr + "contactid, ";
		}
		if(typeof reqBodyForm.AccountId != "undefined" && reqBodyForm.AccountId != "" && reqBodyForm.AccountId != null) {
			qrystr = qrystr + "accountid, ";
		}
		if(typeof reqBodyForm.LastModifiedDate != "undefined" && reqBodyForm.LastModifiedDate != "" && reqBodyForm.LastModifiedDate != null) {
			qrystr = qrystr + "lastmodifieddate, ";
		}
		if(typeof reqBodyForm.Origin != "undefined" && reqBodyForm.Origin != "" && reqBodyForm.Origin != null) {
			qrystr = qrystr + "origin, ";
		}
		if(typeof reqBodyForm.Description != "undefined" && reqBodyForm.Description != "" && reqBodyForm.Description != null) {
			qrystr = qrystr + "description, ";
		}
		if(typeof reqBodyForm.Comments != "undefined" && reqBodyForm.Comments != "" && reqBodyForm.Comments != null) {
			qrystr = qrystr + "comments, ";
		}

		qrystr = qrystr.substring(0, qrystr.length - 2);
		qrystr = qrystr + ")VALUES(\'"+ rec_type + "'\, ";

		if(typeof reqBodyForm.Id != "undefined" && reqBodyForm.Id != "" && reqBodyForm.Id != null) {
			qrystr = qrystr + "\'" + reqBodyForm.Id + "\', ";
		}
		if(typeof reqBodyForm.ContactEmail != "undefined" && reqBodyForm.ContactEmail != "" && reqBodyForm.ContactEmail != null) {
			qrystr = qrystr + "\'" + reqBodyForm.ContactEmail + "\', ";
		}
		if(typeof reqBodyForm.CreatedDate != "undefined" && reqBodyForm.CreatedDate != "" && reqBodyForm.CreatedDate != null) {
			qrystr = qrystr + "\'" + reqBodyForm.CreatedDate + "\', ";
		}
		if(typeof reqBodyForm.SLAViolation__c != "undefined" && reqBodyForm.SLAViolation__c != "" && reqBodyForm.SLAViolation__c != null) {
			qrystr = qrystr + "\'" + reqBodyForm.SLAViolation__c + "\', ";
		}
		if(typeof reqBodyForm.IsEscalated != "undefined" && reqBodyForm.IsEscalated != "" && reqBodyForm.IsEscalated != null) {
			qrystr = qrystr + reqBodyForm.IsEscalated + ", ";
		}
		if(typeof reqBodyForm.Type != "undefined" && reqBodyForm.Type != "" && reqBodyForm.Type != null) {
			qrystr = qrystr + "\'" + reqBodyForm.Type + "\', ";
		}
		if(typeof reqBodyForm.SystemModstamp != "undefined" && reqBodyForm.SystemModstamp != "" && reqBodyForm.SystemModstamp != null) {
			qrystr = qrystr + "\'" + reqBodyForm.SystemModstamp + "\', ";
		}
		if(typeof reqBodyForm.Subject != "undefined" && reqBodyForm.Subject != "" && reqBodyForm.Subject != null) {
			qrystr = qrystr + "\'" + reqBodyForm.Subject + "\', ";
		}
		if(typeof reqBodyForm.Priority != "undefined" && reqBodyForm.Priority != "" && reqBodyForm.Priority != null) {
			qrystr = qrystr + "\'" + reqBodyForm.Priority + "\', ";
		}
		if(typeof reqBodyForm.ContactMobile != "undefined" && reqBodyForm.ContactMobile != "" && reqBodyForm.ContactMobile != null) {
			qrystr = qrystr + "\'" + reqBodyForm.ContactMobile + "\', ";
		}
		if(typeof reqBodyForm.Status != "undefined" && reqBodyForm.Status != "" && reqBodyForm.Status != null) {
			qrystr = qrystr + "\'" + reqBodyForm.Status + "\', ";
		}
		if(typeof reqBodyForm.Product__c != "undefined" && reqBodyForm.Product__c != "" && reqBodyForm.Product__c != null) {
			qrystr = qrystr + "\'" + reqBodyForm.Product__c + "\', ";
		}
		if(typeof reqBodyForm.CaseNumber != "undefined" && reqBodyForm.CaseNumber != "" && reqBodyForm.CaseNumber != null) {
			qrystr = qrystr + "\'" + reqBodyForm.CaseNumber + "\', ";
		}
		if(typeof reqBodyForm.OwnerId != "undefined" && reqBodyForm.OwnerId != "" && reqBodyForm.OwnerId != null) {
			qrystr = qrystr + "\'" + reqBodyForm.OwnerId + "\', ";
		}
		if(typeof reqBodyForm.CreatedById != "undefined" && reqBodyForm.CreatedById != "" && reqBodyForm.CreatedById != null) {
			qrystr = qrystr + "\'" + reqBodyForm.CreatedById + "\', ";
		}
		if(typeof reqBodyForm.ContactPhone != "undefined" && reqBodyForm.ContactPhone != "" && reqBodyForm.ContactPhone != null) {
			qrystr = qrystr + "\'" + reqBodyForm.ContactPhone + "\', ";
		}
		if(typeof reqBodyForm.Reason != "undefined" && reqBodyForm.Reason != "" && reqBodyForm.Reason != null) {
			qrystr = qrystr + "\'" + reqBodyForm.Reason + "\', ";
		}
		if(typeof reqBodyForm.IsClosed != "undefined" && reqBodyForm.IsClosed != "" && reqBodyForm.IsClosed != null) {
			qrystr = qrystr + reqBodyForm.IsClosed + ", ";
		}
		if(typeof reqBodyForm.ContactId != "undefined" && reqBodyForm.ContactId != "" && reqBodyForm.ContactId != null) {
			qrystr = qrystr + "\'" + reqBodyForm.ContactId + "\', ";
		}
		if(typeof reqBodyForm.AccountId != "undefined" && reqBodyForm.AccountId != "" && reqBodyForm.AccountId != null) {
			qrystr = qrystr + "\'" + reqBodyForm.AccountId + "\', ";
		}
		if(typeof reqBodyForm.LastModifiedDate != "undefined" && reqBodyForm.LastModifiedDate != "" && reqBodyForm.LastModifiedDate != null) {
			qrystr = qrystr + "\'" + reqBodyForm.LastModifiedDate + "\', ";
		}
		if(typeof reqBodyForm.Origin != "undefined" && reqBodyForm.Origin != "" && reqBodyForm.Origin != null) {
			qrystr = qrystr + "\'" + reqBodyForm.Origin + "\', ";
		}
		if(typeof reqBodyForm.Description != "undefined" && reqBodyForm.Description != "" && reqBodyForm.Description != null) {
			qrystr = qrystr + "\'" + reqBodyForm.Description + "\', ";
		}
		if(typeof reqBodyForm.Comments != "undefined" && reqBodyForm.Comments != "" && reqBodyForm.Comments != null) {
			qrystr = qrystr + "\'" + reqBodyForm.Comments + "\', ";
		}

		qrystr = qrystr.substring(0, qrystr.length - 2);
		qrystr = qrystr + ")";

		console.log('qryyy strrr');
		console.log(qrystr);

        let currclient = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false
              }
        });

        return new Promise((resolve, reject) => {
            currclient.connect();

            console.log('is connectED');

            currclient.query(qrystr, (err, resp) => {
                if (err){
                    console.log('is ERROR');
                    console.log(err);
                    reject(400);
                }
                console.log(resp);
                currclient.end();
                resolve(200);
            });
        });
    }
}

module.exports = MethodHelper;
