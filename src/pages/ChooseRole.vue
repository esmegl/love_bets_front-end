<template>
	<q-page>
		<div v-if="!isAuthenticated" class="q-px-md">
			Please login to start
		</div>

		<div v-if="isAuthenticated">
			<div>
				<h2 class="center"> Choose you role in the wedding </h2>
			</div>

			<div class="q-px-md row" style="height: 200px;">

				<div class="col-4 self-center center">
					<q-btn
					to="/minister"
					label="I am a Minister"
					color="indigo"
	        		text-color="white"
	        		size="xl"
	        		padding="xl"
	        		/>
				</div>

				<div class="col-4 self-center center">
					<q-btn
					to="/bettor"
					label="I am going to Marry"
					color="indigo"
	        		text-color="white"
	        		size="xl"
	        		padding="xl"
	        		/>
				</div>

				<div class="col-4 self-center center">
					<q-btn
					to="/witness"
					label="I am a Witness"
					color="indigo"
	        		text-color="white"
	        		size="xl"
	        		padding="xl"
	        		/>
				</div>

			</div>	

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
    display: flex;
    justify-content: center;
    align-items: center; 
  }
</style>style>