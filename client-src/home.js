import React from 'react';

const Home = () => (
  	<div>
	  <div class="slds-grid slds-wrap">
		  <div class="slds-col slds-size_2-of-12"></div>
		  <div class="slds-col slds-size_8-of-12">
			    <article class="slds-card">
		  			<div class="slds-card__header slds-grid">
		  				<header class="slds-media slds-media_center slds-has-flexi-truncate">
		  					<div class="slds-media__body">
		  						<h2 class="slds-card__header-title">
		  							<a href="#" class="slds-card__header-link slds-truncate" title="Accounts">
		  								<span>Archive Salesforce Data with Heroku!</span>
		  							</a>
		  						</h2>
		  					</div>
		  					<div class="slds-no-flex">
		  						<span><i>INSTRUCTIONS</i></span>
		  					</div>
		  				</header>
		  			</div>
		  			<div class="slds-card__body slds-card__body_inner">
						<p>This demo uses Heroku Connect, Salesforce Connect, and a small bit of custom code to archive salesforce data on Heroku Postgres, but still have read access to it using Salesforce Connect.</p>
	  			      	<p>There is custom code running on Heroku that is a small API that takes authenicated requests to archive a Salesforce Case.  When it archives a case, it simple creates a copy of the case in a table that is not mapped with Heroku Connect.</p>
	  			      	<p>There is also custom code running on Salesforce that is a trigger whenever a Case record is deleted.  When Case's are deleted, an archived copy is stored in Heroku Postgres that is viewable in Salesforce using OData and Salesforce Connect, but doesn't eat at Salesforce storage limits.</p>
						<h3>Follow the steps in the slideshow below to setup this demo for yourself, or view a recording of this demo below.</h3>
					</div>
		  			<footer class="slds-card__footer">
		  				<p>Heroku Architects</p>
		  			</footer>
		  		</article>
		  </div>
		  <div class="slds-col slds-size_2-of-12"></div>
	  </div>
	</div>
);

export default Home;
