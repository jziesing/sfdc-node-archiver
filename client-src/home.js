import React from 'react';

const Home = () => (
  	<div>
	  <div class="slds-grid slds-wrap">
		  <div class="slds-col slds-size_2-of-12">
			  <span>1</span>
		  </div>
		  <div class="slds-col slds-size_8-of-12">
			  <h1>Home</h1>
				  <p>This demo uses Heroku Connect, Salesforce Connect, and a small bit of custom code to archive salesforce data on Heroku Postgres, but still have read access to it using Salesforce Connect.</p>
			      <p>There is custom code running on Heroku that is a small API that takes authenicated requests to archive a Salesforce Case.  When it archives a case, it simple creates a copy of the case in a table that is not mapped with Heroku Connect.</p>
			      <p>There is also custom code running on Salesforce that is a trigger whenever a Case record is deleted.  When Case's are deleted, an archived copy is stored in Heroku Postgres that is viewable in Salesforce using OData and Salesforce Connect, but doesn't eat at Salesforce storage limits.</p>
				  <article class="slds-card">
		  			<div class="slds-card__header slds-grid">
		  				<header class="slds-media slds-media_center slds-has-flexi-truncate">
		  					<div class="slds-media__figure">
		  						<span class="slds-icon_container slds-icon-standard-account" title="account">
		  							<span class="slds-assistive-text">account</span>
		  						</span>
		  					</div>
		  					<div class="slds-media__body">
		  						<h2 class="slds-card__header-title">
		  							<a href="#" class="slds-card__header-link slds-truncate" title="Accounts">
		  								<span>Accounts</span>
		  							</a>
		  						</h2>
		  					</div>
		  					<div class="slds-no-flex">
		  						<button class="slds-button slds-button_neutral">New</button>
		  					</div>
		  				</header>
		  			</div>
		  			<div class="slds-card__body slds-card__body_inner">Anything can go into the card body</div>
		  			<footer class="slds-card__footer">
		  				<a class="slds-card__footer-action" href="#">View All
		  					<span class="slds-assistive-text">Accounts</span>
		  					</a>
		  			</footer>
		  		</article>
		  </div>
		  <div class="slds-col slds-size_2-of-12">
			  <span>3</span>
		  </div>
	  </div>
	</div>
);

export default Home;
