<template>
	<q-page class="column items-center">
		<div class="q-pa-md" v-if="isAuthenticated"> 
			<q-form
				action="/some-url"
				method="post"
				@submit="onSubmit"
				class="q-gutter-md"
				style="max-width: 720" 
				autocorrect="off"
				autocapitalize="off"
				autocomplete="off"
				spellcheck="false"
		    > 

		    	<!-- Bet name -->
		    	<div class="row justify-start" >Put a name to the union</div>	

				<div class="row justify-center" >
			   		<div class="col">
						<q-input  
						filled
						stack-label="Put a name to your union"
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

				<!-- Minister -->
		 		<!-- <div class="row justify-start" >Minister account name</div>

				<div class="row justify-center" >
			   		<div class="col">
							<q-input  
							filled
							name="minister"
							v-model="minister"
							color="blue"
							readonly
							>	
								<template v-slot:control>
				          <div class="self-center full-width no-outline">{{accountName}}</div>
				        </template>
							</q-input>
					</div>  
				</div>	   -->


				<!-- Bettors -->
				<div class="row justify-start" >Add the people that are going to marry</div>
 

			 	<div class="row justify-between">
			   		<div class="col-7">
						<q-input  
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
				        hint="The minimum amount allowed is 30 TELOS"
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
		 		<div class="row justify-start" >Invite the witnesses</div>

				<div class="row justify-center" >
			   		<div class="col">
						<q-input  
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
					:key="witness.name"
					>
						<q-item-section v-if="witness.name != ''">
							<div class="row justify-between">
								<div class="col-5">
									{{ witness.name }}
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
						type="submit"/>
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

		<!-- <q-page-sticky>
			<q-card>
				<q-card-section>
					<pre> {{ $data }} </pre>
				</q-card-section>
			</q-card>

			<q-card-actions>
				<q-btn @click="logger($data)" label="Logger">
					
				</q-btn>
			</q-card-actions>

		</q-page-sticky> -->	

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
				minister: '',
				loss: 0,
				bettor_name: '',
				bettor_quantity: 0,
				bettors: 
				[
					{
						name: '',
						amount: 0
					}
				],
				witness: '',
				witnesses: 
				[
					{
						name: ''
					}
				],
				accountHasProfile: false,
				accountName: ''
	    }
  	},

  	computed: {
	    ...mapGetters("account", ["isAuthenticated",
      "accountName"]),
	    userAvatar() 
	    {
	      if (this.avatar) return this.avatar;

	      return "https://images.squarespace-cdn.com/content/54b7b93ce4b0a3e130d5d232/1519987165674-QZAGZHQWHWV8OXFW6KRT/icon.png?content-type=image%2Fpng";
	    }
	 	},

  	methods: {
  		getAccountName: function() {
  			this.accountName = this.$route.params.accountName
  		},

	    addBettor: function() {
	        this.bettors.push({
	        	name: this.bettor_name,
	        	amount: this.bettor_quantity
	        });
	        this.bettor_name = '';
	        this.bettor_quantity = 0;
	    },

	    removeBettor: function(index) {
	    	this.bettors.splice(index, 1)
	    },

	    addWitness: function() {
	    	this.witnesses.push({name: this.witness});
	    	this.witness = '';
	    },

	    removeWitness: function(index) {
	    	this.witnesses.splice(index, 1)
	    },

	    ...mapActions("account", ["getUserProfile"]),
	    async loadUserProfile() {
	      this.loadAccountHistory();
	      if (
	        !this.$store.state.account.profiles.hasOwnProperty(this.accountName)
	      ) {
	        await this.getUserProfile(this.accountName);
	      }
	      const accountProfile = this.$store.state.account.profiles[
	        this.accountName
	      ];
	      if (!accountProfile) {
	        return;
	      }

	      this.accountHasProfile = true;
	      this.profileAccountName = this.accountName;
	      this.avatar = accountProfile.avatar;
	      this.bio = accountProfile.bio;
	      this.status = accountProfile.status;
	      this.displayName = accountProfile.display_name;
	    },
	    search() {
	      this.loadUserProfile();
	    },
	    async loadAccountHistory() {
	      const actionHistory = await this.$hyperion.get(
	        `/v2/history/get_actions?limit=20&account=${this.accountName}`
	      );
	      this.accountHistory = actionHistory.data.actions || [];
	    }
		},
}
</script>  