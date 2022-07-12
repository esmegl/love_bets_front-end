<template>
	<q-page class="q-px-md">

		<h2 class="center"> Guide to use Lovebets</h2>

   	<div class="row q-pa-sm justify-center">  

   		<div class="col-4">
      	<q-card flat>
      		<div class="text-h6 text-center text-blue-grey-10">Form interface</div>
      		<q-img
		      src="~/assets/minister_form_empty.png"
		      />
      	</q-card>
      </div>  
   		
      <div class="col-4 text-blue-grey-10 text-left">
        <q-card flat>
          <q-card-section> 
            <div class="text-h6">
              Step 1: Plan the wedding
            </div>
          </q-card-section>   

        	<q-card-section>
            Before starting the wedding make sure to choose your minister, your witnesses, the name of the union (Bet Name), the amount each bettor is going to bet (Amount to bet) and the loss percentage you are going to set.
        	</q-card-section>

        	<q-card-section> 
            <div class="text-h6">
              Step 2: Start the wedding
            </div>
          </q-card-section>   

        	<q-card-section>
            After you have everything decided, ask your minister to fill in the form to initiate the wedding with all required data stated before.
        	</q-card-section>

        	<q-card-section> 
            <div class="text-h6">
              Step 3: Witness confirmation
            </div>
          </q-card-section>   

        	<q-card-section>
          	Once the wedding is initiated the witnesses will be able to confirm their participation by signing the contract. 
        	</q-card-section>

        	<q-card-section> 
            <div class="text-h6">
              Step 4: Transfer the funds
            </div>
          </q-card-section>   

        	<q-card-section>
          	Finally, the only thing left is for each bettor to send the amount they bet and once all funds are sent the contract will execute and the wedding will be registered on the blockchain.
        	</q-card-section>

        </q-card>
      </div> 

      <div class="col-4">
      	<q-card flat>
      		<q-card-section>
	      		<div class="text-h6 text-center text-blue-grey-10">Important details</div>
	      	</q-card-section>	

      		<q-card-section>
      			All participants must have a TELOS account to participate, since each account is needed to sign the contract.
      		</q-card-section>

      		<q-card-section>
      			The minimum amount to bet is 30 TLOS.
      		</q-card-section>

      		<q-card-section>
      			Each bettor can bet the amount they prefer, as long as it is an amount equal to or greater than the minimum allowed.
      		</q-card-section>

      		<q-card-section>
      			The loss percentage must be greater than zero.
      		</q-card-section>

      		<q-card-section>
      			The minister is the only participant that can initiate the wedding
      		</q-card-section>

      		<q-card-section>
      			The last bettor registered in the form will be paying the ram costs. Make sure to agree who is going to be.
      		</q-card-section>

      		<q-card-section>
      			All witnesses are required to sign to carry out the wedding.
      		</q-card-section>

      		<q-card-section>
      			Neither the witnesses nor the minister are required to pay.
      		</q-card-section>

      		<q-card-section>
      			Before confirming the wedding, if any of the bettors prefers not to continue with the bet they can cancel it and there will be no money loss, since it will not be transfered yet.
      		</q-card-section>

      		<q-card-section>
      			All bettors must sent exactly the amount they stated in Step 1. Otherwise the transaction will be rejected.
      		</q-card-section>

      		<q-card-section>
      			 Once the contract is executed if any of the bettors wants to cancel the wedding (Divorce) all betors will lose the percentage of the money they sent and the remaining will be refunded. The lost money will be sent to the eosio account.
      		</q-card-section>

      	</q-card>
      </div> 

    </div>    

<!-- 
          <q-card-section> 
            <div class="text-bold">
              Important:
            </div>  
          </q-card-section>  

          <q-card-section> 
            <p>
              - All participants must have a TELOS account to participate, since each account is needed to sign the contract.
            </p>  
            <p>- The "Bet Name" must have 12 characters long. You can choose lowercase letters from a to z and nmbers from 1 to 5.</p>
            <p>- The minimum amount to bet is 30 TLOS.</p>
            <p>- </p>
            <p>- </p>
          </q-card-section>

        </q-card>    
      </div> 

	          <q-card-section>
	          	<div class="text-bold">
              	Important:
            	</div> 
	          </q-card-section>

	          	<q-card-section>
	          		<p>- </p>
	          		<p>- </p>
	          		<p>- If the bettors do not agree on who is going to pay the ram, the minister can choose one randomly.</p>
	          </q-card-section>

	        </q-card>    
	      </div> 


	          <q-card-section>
	          	<div class="text-bold">
              	Notice:
            	</div>
	          </q-card-section>

	          <q-card-section>
	          	<p>- </p>
	          	<p>- </p>
	          	<p>- </p>
	          </q-card-section>

	        </q-card>    
	      </div> 

	      <div class="col-3 text-blue-grey-10 text-left">
	        <q-card flat>
	          <q-card-section> 
	            <div class="text-h6">
	              Step 4: Transfer the funds
	            </div>
	          </q-card-section>   
	          <q-card-section> 
	            <div>
	              Finally, the only thing left is for each bettor to send the amount they bet and once all funds are sent the contract will execute and the wedding will be registered on the blockchain.
	            </div>  
	          </q-card-section>  

	          <q-card-section>
	          	<div class="text-bold">
              	Important:
            	</div>
	          </q-card-section>

	          <q-card-section>
	          	<p>- </p>	          	
	          	<p>-</p>
	          </q-card-section> 


	        </q-card>    
	      </div> 

   	</div> -->

	</q-page>	
</template>

<style>
	.center {
		padding-bottom: 20px;
	    display: flex;
	    justify-content: center;
	    align-items: center; 
	}
</style>


