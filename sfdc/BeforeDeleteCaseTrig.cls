trigger BeforeDeleteCaseTrig on Case (before delete) {

	if(trigger.isbefore && trigger.isdelete) {
        for(Case c: Trigger.old) {
            System.debug(JSON.serialize(c));
            ArchiverCL.archcase(c.Id, JSON.serialize(c));
        }
    }
}
