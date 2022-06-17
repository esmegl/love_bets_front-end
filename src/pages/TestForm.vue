<template>
	<div class="q-pa-md"> 

		<q-form
			@submit="onSubmit"
			@reset="onReset"
			class="q-gutter-md"
			style="max-width: 720px" 
			autocorrect="off"
			autocapitalize="off"
			autocomplete="off"
			spellcheck="false"
	    >

			<!-- Minister -->
	 		<div class="row justify-start" >
				<div>Minister account name</div>
			</div>	

			<div class="row justify-center" >
		   		<div class="col">
					<q-input  
					label="Minister" 
					color="blue"
					lazy-rules
        			:rules="[ val => val && val.length > 0 || 'The minister is requiered to start the marriage.']"/>
				</div>  
			</div>	 

			<div class="row justify-start" >
				<div>Add the people that are going to marry</div>
			</div>	 

			<!-- Bettors -->
		 	<div class="row justify-between">
		   		<div class="col-7">
					<q-input  
						label="Account name" 
						color="blue"
						lazy-rules
        				:rules="[ val => val && val.length > 0 || 'Please input the account name of the first person']"/>
				</div>  
				<div class="col-4">
					<q-input
				        color="blue"
				        label="Amount to bet"
				        mask="#.####"
				        fill-mask="0"
				        reverse-fill-mask
				        input-class="text-left"
				        suffix="TELOS"
				     />
				</div>   
			</div>	

			<div class="row justify-between">
		   		<div class="col-7">
					<q-input  
						label="Account name" 
						color="blue"
						lazy-rules
        				:rules="[ val => val && val.length > 0 || 'There has to be at least two people to marry']"/>
				</div>  
				<div class="col-4">
					<q-input
				        color="blue"
				        label="Amount to bet"
				        mask="#.####"
				        fill-mask="0"
				        reverse-fill-mask
				        input-class="text-left"
				        suffix="TELOS"
				     />
				</div>  
			</div>	 

			<div class="row justify-end">
				<div class="col-5 justify-right">
					<q-btn color="blue" text-color="white" label="Add People" icon-right="add_circle"/>
				</div>	
			</div>	  

			<!-- Loss -->
	 		<div class="row " >
				<div>Set loss amount</div>
			</div>	

			<div class="row">
				<div class="col-4">
					<q-input
				        color="blue"
				        label="Loss"
				        mask="#.####"
				        fill-mask="0"
				        reverse-fill-mask
				        suffix="LOSS"
				     /> 
				</div>  
			</div>	

			<!-- Witnesses -->
	 		<div class="row justify-start" >
				<div>Invite your witnesses</div>
			</div>

			<div class="row justify-center" >
		   		<div class="col">
					<q-input  
						label="Witness account name" 
						color="blue"/>
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
		</q-form>
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



