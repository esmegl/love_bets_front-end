<template>
	<q-page class="q-px-md">

		<div>
			<h2 class="center"> Choose you role in the wedding </h2>
		</div>

		<div v-if="isAuthenticated">

			<!-- Minister -->
		 	<div class="row center">

				<q-card style="width: 320px">
					<q-card-section horizontal>
				        <q-img
				          src="~assets/minister.jpg"
				        />
				    </q-card-section>

      				<q-separator />    
	
					<q-card-actions class="center">
						<q-btn 
						size="lg"
						flat
						text-color="blue" 
						label="I am a Minister" 
						to="/start_wedding"/>
						</q-card-actions>
				</q-card>
			</div>	

			<!-- Bettors -->
			<div class="row center">

				<q-card style="width: 320px">
					<q-card-section horizontal>
				        <q-img
				          src="~assets/rings_2.jpg"
				        />
				    </q-card-section>

      				<q-separator />    
	
					<q-card-actions class="center">
						<q-btn 
						size="lg"
						flat
						text-color="blue" 
						label="I am going to marry" 
						to="/bettor"/>
						</q-card-actions>
				</q-card>
			</div>	

	
			<!-- Witnesses -->
			<div class="row center">

				<q-card style="width: 320px">
					<q-card-section horizontal>
				        <q-img
				          src="~assets/wedding_background.jpg"
				        />
				    </q-card-section>

      				<q-separator />    
	
					<q-card-actions class="center">
						<q-btn 
						size="lg"
						flat
						text-color="blue" 
						label="I am a Witness" 
						to="/witness"/>
						</q-card-actions>
				</q-card>
			</div>	
		</div>

		<div v-else>
			<h4 class="center">Please login to start</h4>
		</div>

	</q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("account", [
      "isAuthenticated",
    ])
  },
};
</script>

<style>
.center {
	padding-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center; 
  }
</style>style>