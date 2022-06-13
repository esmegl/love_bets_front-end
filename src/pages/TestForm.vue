<template>
	<div class="q-pa-md q-gutter-y-md" style="max-width: 720px" > 

		<!-- Minister -->
 		<div class="row justify-start" >
			<div>Minister name</div>
		</div>	

		<div class="row justify-center" >
	   		<div class="col">
				<q-field color="blue" outlined label="Minister">
			        <template v-slot:control>
			          
			        </template>
			    </q-field>
			</div>  
		</div>	 

		<div class="row justify-start" >
			<div>Add the people that are going to marry</div>
		</div>	 

		<!-- Bettors -->
	 	<div class="row">
	   		<div class="col-8">
				<q-field color="blue" outlined label="Account Name">
			        <template v-slot:control>
			          <div class="self-center full-width no-outline text-blue-grey" tabindex="0"></div>
			        </template>
			    </q-field>
			</div>  
			<div class="col-4">
				<q-field color="blue" outlined label="Quantity to bet">
			        <template v-slot:control>
			          <div class="self-center full-width no-outline text-blue-grey" tabindex="0"></div>
			        </template>
			    </q-field>
			</div>  
		</div>	

		<div class="row">
	   		<div class="col-8">
				<q-field color="blue" outlined label="Account Name">
			        <template v-slot:control>
			          <div class="self-center full-width no-outline text-blue-grey" tabindex="0"></div>
			        </template>
			    </q-field>
			</div>  
			<div class="col-4">
				<q-field color="blue" outlined label="Quantity to bet">
			        <template v-slot:control>
			          <div class="self-center full-width no-outline text-blue-grey" tabindex="0"></div>
			        </template>
			    </q-field>
			</div>  
		</div>	 

		<div class="row justify-end">
			<div class="col-5 justify-right">
				<q-btn color="blue" text-color="white" label="Add People" icon-right="add_circle"/>
			</div>	
		</div>	  

		<!-- Loss -->
 		<div class="row justify-start" >
			<div>Set loss percentage</div>
		</div>	

		<div class="col-4">
			<q-field color="blue" outlined label="Loss">
		        <template v-slot:control class="required">
		          <div class="self-center full-width no-outline text-blue-grey" tabindex="0"></div>
		        </template>
		    </q-field>
		</div>  

		<!-- Witnesses -->
 		<div class="row justify-start" >
			<div>Invite your witnesses</div>
		</div>

		<div class="row justify-center" >
	   		<div class="col">
				<q-field color="blue" outlined label="Witness account name">
			        <template v-slot:control>
			          <div class="self-center full-width no-outline text-blue-grey" tabindex="0"></div>
			        </template>
			    </q-field>
			</div>  
		</div>	

		<div class="row justify-end">
			<div class="col-5 justify-right">
				<q-btn color="blue" text-color="white" label="Add Witness" icon-right="add_circle"/>
			</div>	
		</div>	

		<div class="row">
			<div class="col-4">
				<q-btn color="blue" text-color="white" label="Start Marriage"/>
			</div>	
		</div>	

	</div>	      
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



