import React from 'react';

const Home = () => (
  <div>
    <h1>Home</h1>
    <strong>Home page</strong>
    <p>This demo uses Heroku Connect, Salesforce Connect, and a small bit of custom code to archive salesforce data on Heroku Postgres, but still have read access to it using Salesforce Connect.</p>
    <p>There is custom code running on Heroku that is a small API that takes authenicated requests to archive a Salesforce Case.  When it archives a case, it simple creates a copy of the case in a table that is not mapped with Heroku Connect.</p>
    <p>There is also custom code running on Salesforce that is a trigger whenever a Case record is deleted.  When Case's are deleted, an archived copy is stored in Heroku Postgres that is viewable in Salesforce using OData and Salesforce Connect, but doesn't eat at Salesforce storage limits.</p>
  </div>
);

export default Home;
