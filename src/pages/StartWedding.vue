<template>
	<q-page class="column items-center">
		<div class="q-pa-md" v-if="isAuthenticated"> 
			<q-form
				class="q-gutter-md"
				style="max-width: 720" 
				autocorrect="off"
				autocapitalize="off"
				autocomplete="off"
				spellcheck="false"
		    > 

		    	<!-- Minister -->
		 		<div class="row justify-start" >Minister account name</div>

				<div class="row justify-center" >
			   		<div class="col text-h5 text-blue">
						{{accountName}}
					</div>  
				</div>	

		    	<!-- Bet name -->
		    	<div class="row justify-start" >Put a name to the union</div>	

				<div class="row justify-center" >
			   		<div class="col">
						<q-input 
						clearable 
						clear-icon="close" 
						filled
						name="bet_name"
						v-model="bet_name"
						label="Bet name" 
						color="blue"
						maxlength="12"
						hint="The characters allowed are letters from a to z and numbers from 1 to 5"
						hide-hint
					/>	
					</div>  
				</div>   


				<!-- Bettors -->
				<div class="row justify-start" >Add the people that are going to marry</div>
 

			 	<div class="row justify-between">
			   		<div class="col-7">
						<q-input 
						clearable 
						clear-icon="close" 
						filled
						v-model="bettor_name"
						label="Account name" 
						color="blue"
						/>	
					</div>  
					<div class="col-4">
						<q-input
						filled
						v-model="bettor_quantity"
				        color="blue"
				        label="Amount to bet"
				        mask="#.####"
				        fill-mask="0"
				        reverse-fill-mask
				        input-class="text-left"
				        suffix="TELOS"
				        hint="Minimum amount allowed is 30 TELOS"
				        hide-hint
					     />
					</div>


				</div>	

				<div class="row justify-end">
					<div class="col-5 justify-right">
						<q-btn 
						@click="addBettor" 
						color="blue" 
						text-color="white" 
						label="Add Bettor" 
						icon-right="add_circle"
						:disable="bettor_name == ''"
						/>
					</div>	
				</div>	 

				<!-- Bettors list -->
				<q-list 
				v-if="bettors.length > 0"
				separator
				>
					<q-item
					v-for="(bettor, index) in bettors"
					:key="bettor.name"
					>
						<q-item-section v-if="bettor.name != ''">
							<div class="row justify-between">
								<div class="col-5 align-items">
									{{ bettor.name }}
								</div>
								<div class="col-5">
									{{ bettor.amount}}
								</div>

								<q-btn 
								flat  
								color="blue" 
								icon="remove_circle" 
								@click="removeBettor(index)"
								>
									<q-tooltip :delay="500">
							          Remove bettor
							        </q-tooltip>
							    </q-btn>    
							</div>
						</q-item-section>
					</q-item>
				</q-list> 

				<!-- Loss -->
		 		<div class="row">Set loss percentage</div>

				<div class="row">
					<div class="col-4">
						<q-input
						filled
						v-model="loss"
				        color="blue"
				        label="Loss"
				        mask="#.##"
				        fill-mask="0"
				        reverse-fill-mask
				        suffix="%"
					    /> 
					</div>  
				</div>	

				<!-- Witnesses -->
		 		<div class="row justify-start">Invite the witnesses</div>

				<div class="row justify-center" >
			   		<div class="col">
						<q-input 
						clearable
						clear-icon="close" 
						filled
						v-model="witness"
						label="Witness account name" 
						color="blue"/>
					</div>  
				</div>	

				<div class="row justify-end">
					<div class="col-5 justify-right">
						<q-btn 
						color="blue" 
						text-color="white" 
						label="Add Witness" 
						icon-right="add_circle"
						@click="addWitness"
						:disable="witness == ''"
						/>
					</div>	
				</div>	

				<!-- Witnesses list -->
				<q-list 
				v-if="witnesses.length > 0"
				separator
				>
					<q-item
					v-for="(witness, index) in witnesses"
					:key="witness"
					>
						<q-item-section>
							<div class="row justify-between">
								<div class="col-5">
									{{ witness }}
								</div>
								<q-btn 
								flat  
								color="blue" 
								icon="remove_circle" 
								@click="removeWitness(index)"
								>
									<q-tooltip :delay="500">
							          Remove witness
							        </q-tooltip>
								</q-btn>
							</div>
						</q-item-section>
					</q-item>
				</q-list> 

				<div class="row justify-between">
					<div class="col-4">
						<q-btn 
						color="blue" 
						text-color="white" 
						label="Start Wedding"
						@click="initBet()"/>
					</div>

					<div class="col-4 justify-right">
						<q-btn 
						to="/choose_role"
						flat
						text-color="blue" 
						label="Cancel"
						/>
					</div>	
				</div>	
			</q-form>
		</div>	

		<q-page-sticky>
			<q-card>
				<q-card-section>
					<pre> {{ $data }} </pre>
				</q-card-section>
			</q-card>

			<q-card-actions>
				<q-btn @click="logger($data)" label="Logger">
					
				</q-btn>
			</q-card-actions>

		</q-page-sticky>	

	</q-page>	  
</template> 

<style>

	.center {
	display: flex;
	justify-content: center;
	align-items: center; 
	}

	.justify-right {
	display: flex;
	justify-content: right;
	align-items: center; 
	}

	.justify-left {
	display: flex;
	justify-content: right;
	align-items: center; 
	}

</style>   

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  	data () {
	    return {
			bet_name: '',
			loss: 0,
			minister_control: '',
			bettor_name: '',
			bettor_names: [],
			bettor_quantity: 0,
			bettor_amounts: [],
			bettors: 
			[{
				name: '',
				amount: 0
			}],
			witness: '',
			witnesses: [],
			accountHasProfile: false,
			requested: 
			[{
				actor: '',
				permission: 'active'
			}],
	    }
  	},

  	computed: {
	    ...mapGetters("account", ["isAuthenticated", "accountName"]),
	},

  	methods: {

	    addBettor: function() {
	        this.bettors.push({
	        	name: this.bettor_name,
	        	amount: this.bettor_quantity
	        });
	        this.bettor_names.push(this.bettor_name);
	        this.bettor_amounts.push(this.bettor_quantity);
	        this.bettor_name = '';
	        this.bettor_quantity = 0;
	    },

	    removeBettor: function(index) {
	    	this.bettors.splice(index, 1)
	    },

	    addWitness: function() {
	    	this.witnesses.push(this.witness);
	    	this.witness = '';
	    },

	    removeWitness: function(index) {
	    	this.witnesses.splice(index, 1)
	    },

	    initBet: async function() {

	    	// CREATE ACTION TO PROPOSE
	    	const actions = [
				{
					account: 'esmeesmeesme',
					name: 'initbet',
					authorization: [
					  {
					    actor: this.minister,
					    permission: 'active',
					  }
					],
					data: {
						// account: 'bmabwprunawr',
						// permission: 'active',
						// parent: '',
						// auth: {
						// 	threshold: 1,
						// 	keys: [{
						// 	    key: 'PUB_K1_8UDW64nhLjyESfendHw1PuNvJQgYzJWkG2tt7NvC9P8gZQTFWC',
						// 	    weight: 1
						// 	}],
						// 	accounts:[],
						// 	waits:[]
						// }
						bet_name: this.bet_name,
						minister: this.accountName,
						bettors: this.bettor_names,
						witnesses: this.witnesses,
						loss: this.loss,
						bettor_quantity: this.bettor_amounts
					}
				}
			];

			(async () => {
				const serialized_actions = await this.$store.$api.serializeActions(actions)

				// FILL THE LIST OF REQUESTED PARTICIPANTS TO SIGN
				this.requested[0].actor = this.minister
				for (var i = 0; i < bettor_names.length; i++) {
					this.requested.push({
						actor: this.bettor_names[i],
						permission: 'active'
					});
				} 
				for (var i = 0; i < witnesses.length; i++) {
				  this.requested.push({
				  	actor: this.witnesses[i],
				  	permission: 'active'
				  });
				} 

				// BUILD THE MULTISIG PROPOSE TRANSACTION
				proposeInput = {
					proposer: minister,
					proposal_name: this.bet_name,
					requested: this.requested,
					trx: {
						expiration: null,
						ref_block_num: 0,
						ref_block_prefix: 0,
						max_net_usage_words: 0,
						max_cpu_usage_ms: 0,
						delay_sec: 0,
						context_free_actions: [],
						actions: serialized_actions,
						transaction_extensions: []
					}
				};

				//PROPOSE THE TRANSACTION
				const result = await this.$store.$api.transact({
					actions: [{
						account: 'eosio.msig',
						name: 'propose',
						authorization: [{
							actor: this.minister,
							permission: 'active',
						}],
						data: proposeInput,
					}]
				}, {
					blocksBehind: 3,
					expireSeconds: 30,
					broadcast: true,
					sign: true
				});
			})();
	    }



	 //    initBet: async function() {  	

	 //    	const actions = [
	 //        {
		// 		account: "esmeesmeesme",
		// 		name: "initbet",
		// 		data: {
		// 			bet_name: this.bet_name,
		// 			minister: this.accountName,
		// 			bettors: this.bettor_names,
		// 			witnesses: this.witnesses,
		// 			loss: this.loss,
		// 			bettor_quantity: this.bettor_amounts
		// 		}
		// 	}
	 //      ];
	 //      const transaction = await this.$store.$api.signTransaction(actions);
		// }


		// This was a test

		// initBet: async function() {  	

	 //    	const actions = [
	 //        {
		// 		account: "eosio.token",
		// 		name: "transfer",
		// 		data: {
		// 			from: 'esmeesmeesme',
  //           		to: "bmabwprunawr",
  //           		quantity: '100.0000 TLOS',
  //           		memo: ''
		// 		}
		// 	}
	 //      ];
	 //      const transaction = await this.$store.$api.signTransaction(actions);
		// }
	}
}
</script>  