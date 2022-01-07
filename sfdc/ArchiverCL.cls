public class ArchiverCL {

    @future (callout=true)
	public static void archcase(String caseId, String caseStr){

        HttpRequest req = new HttpRequest();
        // setup named credential to heroku app 
        req.setEndpoint('callout:archiver_heroku/api/archive/case/');
        req.setMethod('POST');
        req.setHeader('Content-Type', 'application/json;charset=UTF-8');
        req.setBody(caseStr);

        Http http = new Http();
        HTTPResponse res = http.send(req);
        if(res.getStatusCode() != 201) {
    		System.debug('The status code returned was not expected: ' + res.getStatusCode() + ' ' + res.getStatus());
		} else {
    		System.debug(res.getBody());
		}
    }
}
