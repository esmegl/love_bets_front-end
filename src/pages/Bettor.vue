<template>
  	<q-page class="q-pa-md">
  		<div class="row">
			<h2>Fund your wedding!</h2>
		</div>	
		<div class="row">
			<div class="col-4">
				<div class="col-4">
					<q-input
					outlined
					autocapitalize="off"
					v-model="to"
					label="To"
					hint="Send TLOS to lovebets smart contract"
					hide-hint
					maxlength="12"
					color="blue"
					style="padding-bottom: 20px"
					/>
				</div>
				<div class="col-4">	
					<q-input
					outlined
					suffix="TLOS"
					v-model="amount"
					label="Amount"
					maxlength="12"
					color="blue"
					mask="#.####"
			        fill-mask="0"
			        reverse-fill-mask
			        input-class="text-left"
			        style="padding-bottom: 20px"
					/>
				</div>
				<div class="col-4">	
					<q-input
					outlined
					bottom-slots
					v-model="memo"
					label="Memo"
					color="blue"

					/>
				</div>
			</div>

			<!-- End wedding -->
		    <div class="col-4 q-pa-md">
		    	<q-input
				class="q-py-lg"
				outlined
				autocapitalize="off"
				bottom-slots
				v-model="accountName"
				label="Account name"
				counter
				maxlength="12"
	    		>
					<template v-slot:append>
						<q-icon name="search" @click="search" />
					</template>
				</q-input>
		    </div> 	

		    <!-- Divorce -->
		    <div class="col-4">
		    </div> 

		</div>	

		<!-- Send button -->		
		<div class="row">
	      	<q-btn 
	      	size="lg" 
			padding  
			color="blue"
			icon-right="send" 
			label="send"
			@click="send" />
	      	<q-dialog v-model="showTransaction" confirm>
		        <q-card >
		          	<q-card-section class="row">
		            	<q-avatar icon="arrow_forward" color="primary" text-color="white" />
		            	<span class="q-ml-sm">
		              		Transaction sent, click to view in block explorer.
		            	</span>
		            	<q-item
						clickable
						tag="a"
						target="_blank"
						:href="`${explorerUrl}/transaction/${transaction}`"
						class="q-ml-sm"
						>{{ transaction }}</q-item>
		         	</q-card-section>
		          	<q-card-actions align="right">
		            	<q-btn flat label="Ok" color="primary" v-close-popup></q-btn>
		          	</q-card-actions>
		        </q-card>
	    	</q-dialog>
	    </div> 

 	</q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      to: null,
      amount: null,
      memo: null,
      showTransaction: null,
      transaction: null,
      explorerUrl: process.env.NETWORK_EXPLORER
    };
  },
  computed: {
    ...mapGetters("account", ["isAuthenticated", "accountName"])
  },
  methods: {
    ...mapActions("account", ["accountExists"]),
    async send() {
      if (!(await this.accountExists(this.to))) {
        this.$q.notify({
          type: "negative",
          message: `Account ${this.to} does not exist`
        });
        return;
      }

      const actions = [
        {
          account: "eosio.token",
          name: "transfer",
          data: {
            from: this.accountName.toLowerCase(),
            to: this.to,
            quantity: `${parseFloat(this.amount).toFixed(4)} TLOS`,
            memo: this.memo
          }
        }
      ];
      const transaction = await this.$store.$api.signTransaction(actions);
      if (transaction) {
        this.showTransaction = true;
        this.transaction = transaction.transactionId;
      }
    }
  }
};
</script>