<template>
	<q-page>
		<div class="q-pa-md"> 
			<q-form
				action="/some-url"
				method="post"
				@submit="onSubmit"
				class="q-gutter-md"
				style="max-width: 720px" 
				autocorrect="off"
				autocapitalize="off"
				autocomplete="off"
				spellcheck="false"
		    > 

		    	<!-- Bet name -->
		    	<div class="row justify-start" >Put a name to your union</div>	

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
		 		<div class="row justify-start" >Minister account name</div>

				<div class="row justify-center" >
			   		<div class="col">
						<q-input  
						filled
						name="minister"
						v-model="minister"
						label="Minister" 
						color="blue"
						/>	
					</div>  
				</div>	  


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
								<div class="col-5">
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
								/>
							</div>
						</q-item-section>
					</q-item>
				</q-list> 

				<!-- Loss -->
		 		<div class="row">Set loss percentage</div>

				<div class="row">
					<div class="col-5">
						<q-input
						filled
						v-model="loss"
				        color="blue"
				        label="Loss"
				        mask="#.##"
				        fill-mask="0"
				        reverse-fill-mask
				        suffix="LOSS"
					    /> 
					</div>  
				</div>	

				<!-- Witnesses -->
		 		<div class="row justify-start" >Invite your witnesses</div>

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
								/>
							</div>
						</q-item-section>
					</q-item>
				</q-list> 

				<div class="row">
					<div class="col-4">
						<q-btn color="blue" text-color="white" label="Submit"/>
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

		</q-page-sticky>	 -->

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


  .btn {
    top: 50%;
    font-size: 16px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    position: relative;
  }

</style>   

<script>
import { mapGetters, mapActions } from "vuex";
import { ref } from "@vue/composition-api";

export default {
  	data () {
	    return {
			bet_name: null,
			minister: null,
			loss: 0,
			bettor_name: '',
			bettor_quantity: 0,
			bettors: [
				{
					name: '',
					amount: 0
				}
			],
			witness: null,
			witnesses: [
				{
					name: ''
				}
			]
	    }
  	},

  	methods: {
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
	 }
}
</script>  


<!-- <template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col">
        <q-input v-model="val" outlined />
        <q-icon @click="addVal">add_circle</q-icon>
      </div>
    </div>
    <div v-for="value in valuesList" v-bind:key="value" class="row">
      <div class="col-6">
        {{ value }}
        <q-icon @click="removeVal(value)">remove_circle</q-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      val: null,
      valuesList: null
    };
  },
  methods: {
    addVal: function() {
      if (this.val) {
        this.valuesList.push(this.val);
        this.val = null;
      }
    },
    removeVal: function(valToRemove) {
      const index = this.valuesList.indexOf(valToRemove);
      if (index > -1) {
        this.valuesList.splice(index, 1);
      }
    }
  }
};
</script> -->